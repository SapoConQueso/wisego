import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export interface DirectMessage {
  id: string;
  sender_id: string;
  receiver_id: string;
  message: string;
  is_read: boolean;
  created_at: string;
}

export interface ConversationPartner {
  user_id: string;
  username: string | null;
  full_name: string | null;
  avatar_url: string | null;
}

export interface Conversation {
  partnerId: string;
  partner: ConversationPartner | null;
  lastMessage: DirectMessage;
  unreadCount: number;
}

export const useDirectMessages = (userId?: string) => {
  const [messages, setMessages] = useState<DirectMessage[]>([]);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [profiles, setProfiles] = useState<Map<string, ConversationPartner>>(new Map());
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (!userId) {
      setIsLoading(false);
      return;
    }

    fetchProfiles().then(() => {
      fetchMessages();
    });

    const channel = supabase
      .channel('direct_messages')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'direct_messages',
          filter: `receiver_id=eq.${userId}`,
        },
        () => {
          fetchMessages();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [userId]);

  const fetchProfiles = async () => {
    const { data } = await supabase
      .from('profiles')
      .select('user_id, username, full_name, avatar_url');

    if (data) {
      const profileMap = new Map<string, ConversationPartner>();
      data.forEach(profile => {
        profileMap.set(profile.user_id, profile);
      });
      setProfiles(profileMap);
    }
  };

  const fetchMessages = async () => {
    if (!userId) return;

    const { data, error } = await supabase
      .from('direct_messages')
      .select('*')
      .or(`sender_id.eq.${userId},receiver_id.eq.${userId}`)
      .order('created_at', { ascending: true });

    if (error) {
      console.error('Error fetching messages:', error);
      toast({
        title: "Error",
        description: "No se pudieron cargar los mensajes",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }
    
    setMessages(data || []);
    buildConversations(data || []);
    setIsLoading(false);
  };

  const buildConversations = (msgs: DirectMessage[]) => {
    if (!userId) return;

    const grouped = msgs.reduce((acc: Conversation[], msg: DirectMessage) => {
      const partnerId = msg.sender_id === userId ? msg.receiver_id : msg.sender_id;
      const existing = acc.find(c => c.partnerId === partnerId);
      
      if (!existing) {
        acc.push({
          partnerId,
          partner: profiles.get(partnerId) || null,
          lastMessage: msg,
          unreadCount: msg.receiver_id === userId && !msg.is_read ? 1 : 0,
        });
      } else {
        existing.lastMessage = msg;
        if (msg.receiver_id === userId && !msg.is_read) {
          existing.unreadCount++;
        }
      }
      
      return acc;
    }, []);
    
    setConversations(grouped);
  };

  const sendMessage = async (receiverId: string, message: string) => {
    if (!userId) {
      toast({
        title: "Error",
        description: "Debes iniciar sesión para enviar mensajes",
        variant: "destructive",
      });
      return;
    }

    const { error } = await supabase
      .from('direct_messages')
      .insert({
        sender_id: userId,
        receiver_id: receiverId,
        message,
      });

    if (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "No se pudo enviar el mensaje",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  const deleteMessage = async (messageId: string) => {
    const { error } = await supabase
      .from('direct_messages')
      .delete()
      .eq('id', messageId)
      .eq('sender_id', userId);

    if (error) {
      console.error('Error deleting message:', error);
      toast({
        title: "Error",
        description: "No se pudo eliminar el mensaje",
        variant: "destructive",
      });
      return false;
    } else {
      toast({
        title: "Mensaje eliminado",
        description: "El mensaje ha sido eliminado",
      });
      return true;
    }
  };

  const markAsRead = async (messageId: string) => {
    const { error } = await supabase
      .from('direct_messages')
      .update({ is_read: true })
      .eq('id', messageId)
      .eq('receiver_id', userId);

    if (error) {
      console.error('Error marking message as read:', error);
    } else {
      fetchMessages();
    }
  };

  const getPartner = (partnerId: string): ConversationPartner | null => {
    return profiles.get(partnerId) || null;
  };

  return {
    messages,
    conversations,
    isLoading,
    sendMessage,
    markAsRead,
    deleteMessage,
    getPartner,
    refetch: fetchMessages,
  };
};