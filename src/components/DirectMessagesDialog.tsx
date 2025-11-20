import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Send, ArrowLeft, Trash2 } from "lucide-react";
import { useDirectMessages } from "@/hooks/useDirectMessages";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export function DirectMessagesDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState<any[]>([]);
  const { toast } = useToast();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, conversations, isLoading, sendMessage, markAsRead, deleteMessage } = useDirectMessages(currentUser?.id);

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    if (isOpen && !currentUser) {
      toast({
        title: "Inicio de sesión requerido",
        description: "Debes iniciar sesión para usar la mensajería",
        variant: "destructive",
      });
      setIsOpen(false);
    }
  }, [isOpen, currentUser]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, selectedConversation]);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setCurrentUser(user);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const searchUsers = async (query: string) => {
    if (!query.trim()) {
      setUsers([]);
      return;
    }

    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .or(`username.ilike.%${query}%,full_name.ilike.%${query}%`)
      .neq('user_id', currentUser?.id)
      .limit(10);

    if (error) {
      console.error('Error searching users:', error);
    } else {
      setUsers(data || []);
    }
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !selectedConversation) return;

    const success = await sendMessage(selectedConversation, newMessage);
    if (success) {
      setNewMessage("");
    }
  };

  const handleDeleteMessage = async (messageId: string) => {
    await deleteMessage(messageId);
  };

  const conversationMessages = messages.filter(
    msg => 
      (msg.sender_id === selectedConversation && msg.receiver_id === currentUser?.id) ||
      (msg.receiver_id === selectedConversation && msg.sender_id === currentUser?.id)
  );

  useEffect(() => {
    conversationMessages.forEach(msg => {
      if (msg.receiver_id === currentUser?.id && !msg.is_read) {
        markAsRead(msg.id);
      }
    });
  }, [conversationMessages, currentUser]);

  if (!currentUser) {
    return (
      <Button variant="outline" size="icon" onClick={() => setIsOpen(true)}>
        <MessageCircle className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="relative border-primary/20 hover:bg-primary/10 hover:border-primary/40">
          <MessageCircle className="h-5 w-5 text-primary" />
          {conversations.some(c => c.unreadCount > 0) && (
            <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs animate-pulse">
              {conversations.reduce((sum, c) => sum + c.unreadCount, 0)}
            </Badge>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl h-[600px] p-0 animate-smooth-scale">
        <div className="flex h-full">
          {/* Conversations List */}
          <div className={`${selectedConversation ? 'hidden md:flex' : 'flex'} flex-col w-full md:w-1/3 border-r`}>
            <DialogHeader className="p-4 border-b">
              <DialogTitle>Mensajes</DialogTitle>
              <Input
                placeholder="Buscar usuarios..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  searchUsers(e.target.value);
                }}
                className="mt-2"
              />
            </DialogHeader>

            <ScrollArea className="flex-1">
              {searchQuery && users.length > 0 ? (
                <div className="p-2">
                  {users.map(user => (
                    <button
                      key={user.user_id}
                      className="w-full flex items-center gap-3 p-3 hover:bg-primary/10 rounded-lg transition-all duration-200 hover:shadow-md"
                      onClick={() => {
                        setSelectedConversation(user.user_id);
                        setSearchQuery("");
                        setUsers([]);
                      }}
                    >
                      <Avatar className="ring-2 ring-primary/20">
                        <AvatarImage src={user.avatar_url} />
                        <AvatarFallback>{user.username?.[0]?.toUpperCase() || '?'}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 text-left">
                        <p className="font-medium text-sm">{user.full_name || user.username}</p>
                        <p className="text-xs text-muted-foreground">@{user.username}</p>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-2">
                  {conversations.map(conv => (
                    <button
                      key={conv.partnerId}
                      className="w-full flex items-center gap-3 p-3 hover:bg-primary/10 rounded-lg transition-all duration-200 hover:shadow-md relative"
                      onClick={() => setSelectedConversation(conv.partnerId)}
                    >
                      <Avatar className="ring-2 ring-primary/20">
                        <AvatarImage src={conv.partner?.avatar_url} />
                        <AvatarFallback>{conv.partner?.username?.[0]?.toUpperCase() || '?'}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 text-left">
                        <p className="font-medium text-sm">{conv.partner?.full_name || conv.partner?.username}</p>
                        <p className="text-xs text-muted-foreground truncate">{conv.lastMessage?.message}</p>
                      </div>
                      {conv.unreadCount > 0 && (
                        <Badge variant="destructive" className="h-5 w-5 p-0 flex items-center justify-center text-xs">
                          {conv.unreadCount}
                        </Badge>
                      )}
                    </button>
                  ))}
                  {conversations.length === 0 && !isLoading && (
                    <p className="text-center text-muted-foreground text-sm p-4">
                      No hay conversaciones aún. Busca usuarios para comenzar.
                    </p>
                  )}
                </div>
              )}
            </ScrollArea>
          </div>

          {/* Chat Area */}
          {selectedConversation ? (
            <div className="flex flex-col w-full md:w-2/3">
              <div className="flex items-center gap-3 p-4 border-b">
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  onClick={() => setSelectedConversation(null)}
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                {conversations.find(c => c.partnerId === selectedConversation)?.partner && (
                  <>
                    <Avatar className="ring-2 ring-primary/30">
                      <AvatarImage src={conversations.find(c => c.partnerId === selectedConversation)?.partner?.avatar_url} />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {conversations.find(c => c.partnerId === selectedConversation)?.partner?.username?.[0]?.toUpperCase() || '?'}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground">
                        {conversations.find(c => c.partnerId === selectedConversation)?.partner?.full_name || 
                         conversations.find(c => c.partnerId === selectedConversation)?.partner?.username}
                      </p>
                    </div>
                  </>
                )}
              </div>

              <ScrollArea className="flex-1 p-4">
                {conversationMessages.map(msg => (
                  <div
                    key={msg.id}
                    className={`mb-4 flex group ${msg.sender_id === currentUser?.id ? 'justify-end' : 'justify-start'} animate-smooth-fade-in`}
                  >
                    <div
                      className={`max-w-[70%] rounded-lg p-3 relative shadow-sm ${
                        msg.sender_id === currentUser?.id
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-foreground'
                      }`}
                    >
                      <p className="text-sm break-words">{msg.message}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                      {msg.sender_id === currentUser?.id && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute -top-2 -right-2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity bg-destructive hover:bg-destructive/90 text-destructive-foreground rounded-full"
                          onClick={() => handleDeleteMessage(msg.id)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </ScrollArea>

              <div className="p-4 border-t flex gap-2 bg-muted/30">
                <Input
                  placeholder="Escribe un mensaje..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button 
                  onClick={handleSendMessage} 
                  size="icon"
                  disabled={!newMessage.trim()}
                  className="shrink-0"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ) : (
            <div className="hidden md:flex flex-1 items-center justify-center text-muted-foreground">
              <div className="text-center">
                <MessageCircle className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p>Selecciona una conversación</p>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}