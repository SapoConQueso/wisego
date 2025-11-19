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
  sender?: {
    username: string;
    full_name: string;
    avatar_url: string;
  };
  receiver?: {
    username: string;
    full_name: string;
    avatar_url: string;
  };
}

export const useDirectMessages = (userId?: string) => {
  const [messages, setMessages] = useState<DirectMessage[]>([]);
  const [conversations, setConversations] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (!userId) {
      setIsLoading(false);
      return;
    }

    fetchMessages();
    fetchConversations();

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
          fetchConversations();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [userId]);

  const fetchMessages = async () => {
    if (!userId) return;

    const { data, error } = await supabase
      .from('direct_messages')
      .select(`
        *,
        sender:profiles!direct_messages_sender_id_fkey(username, full_name, avatar_url),
        receiver:profiles!direct_messages_receiver_id_fkey(username, full_name, avatar_url)
      `)
      .or(`sender_id.eq.${userId},receiver_id.eq.${userId}`)
      .order('created_at', { ascending: true });

    if (error) {
      console.error('Error fetching messages:', error);
      toast({
        title: "Error",
        description: "No se pudieron cargar los mensajes",
        variant: "destructive",
      });
    } else {
      setMessages(data || []);
    }
    setIsLoading(false);
  };

  const fetchConversations = async () => {
    if (!userId) return;

    const { data, error } = await supabase
      .from('direct_messages')
      .select(`
        *,
        sender:profiles!direct_messages_sender_id_fkey(username, full_name, avatar_url),
        receiver:profiles!direct_messages_receiver_id_fkey(username, full_name, avatar_url)
      `)
      .or(`sender_id.eq.${userId},receiver_id.eq.${userId}`)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching conversations:', error);
    } else {
      // Group by conversation partner
      const grouped = (data || []).reduce((acc: any[], msg: DirectMessage) => {
        const partnerId = msg.sender_id === userId ? msg.receiver_id : msg.sender_id;
        const existing = acc.find(c => c.partnerId === partnerId);
        
        if (!existing) {
          acc.push({
            partnerId,
            partner: msg.sender_id === userId ? msg.receiver : msg.sender,
            lastMessage: msg,
            unreadCount: msg.receiver_id === userId && !msg.is_read ? 1 : 0,
          });
        } else if (msg.receiver_id === userId && !msg.is_read) {
          existing.unreadCount++;
        }
        
        return acc;
      }, []);
      
      setConversations(grouped);
    }
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
    } else {
      toast({
        title: "Mensaje enviado",
        description: "Tu mensaje ha sido enviado exitosamente",
      });
      fetchMessages();
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
      fetchConversations();
    }
  };

  return {
    messages,
    conversations,
    isLoading,
    sendMessage,
    markAsRead,
    refetch: fetchMessages,
  };
};