import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { WiseGoLogo } from "./WiseGoLogo";
import { ThemeToggle } from "./ThemeToggle";
import { ArrowLeft, Send, Bot, User, Settings, Key } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface DeepseekChatProps {
  onNavigate: (view: string) => void;
  title: string;
  systemPrompt?: string;
}

export function DeepseekChat({ onNavigate, title, systemPrompt = "Eres un asistente especializado en orientación educativa. Ayuda a los usuarios con preguntas sobre carreras, universidades y educación." }: DeepseekChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Función para obtener la API key según el tipo de chat
  const getApiKey = () => {
    if (title === "Test Vocacional IA") {
      return "sk-6c6b73b29e854804b16c32eb32153dd0";
    } else if (title === "Chat IA General") {
      return "sk-f7645a1fdbe245bb816f9d304951062b";
    } else {
      return apiKey;
    }
  };

  // Verificar si tenemos una API key válida
  const hasValidApiKey = () => {
    const key = getApiKey();
    return key && key.trim().length > 0;
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const callDeepseekAPI = async (userMessage: string): Promise<string> => {
    const finalApiKey = getApiKey();
    
    if (!finalApiKey.trim()) {
      throw new Error("Por favor, configura tu API Key de Deepseek primero.");
    }

    try {
      const response = await fetch('https://api.deepseek.com/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${finalApiKey}`
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: [
            {
              role: 'system',
              content: systemPrompt
            },
            ...messages.map(msg => ({
              role: msg.isBot ? 'assistant' : 'user',
              content: msg.text
            })),
            {
              role: 'user',
              content: userMessage
            }
          ],
          temperature: 0.7,
          max_tokens: 1000,
          stream: false
        })
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      return data.choices[0]?.message?.content || "Lo siento, no pude generar una respuesta.";
    } catch (error) {
      console.error('Error calling Deepseek API:', error);
      throw error;
    }
  };

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue.trim(),
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);
    setError("");

    try {
      const botResponse = await callDeepseekAPI(userMessage.text);
      
      const botMessage: Message = {
        id: Date.now() + 1,
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Error desconocido");
      
      // Agregar mensaje de error como respuesta del bot
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: `Error: ${error instanceof Error ? error.message : "No se pudo conectar con el servicio."}`,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => onNavigate("chatbots")}
            className="text-primary-foreground hover:bg-primary-foreground/10"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <WiseGoLogo size="sm" />
          <span className="text-xl font-bold">{title}</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Settings className="h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Configuración de API</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="apikey">API Key de Deepseek</Label>
                  <div className="flex space-x-2 mt-2">
                    <Key className="h-4 w-4 mt-3 text-muted-foreground" />
                    <Input
                      id="apikey"
                      type="password"
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                      placeholder="sk-..."
                      className="flex-1"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Obtén tu API Key en: https://platform.deepseek.com/
                  </p>
                </div>
                <div>
                  <Label htmlFor="systemprompt">Prompt del Sistema</Label>
                  <Textarea
                    id="systemprompt"
                    value={systemPrompt}
                    readOnly
                    className="mt-2"
                    rows={3}
                  />
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <ThemeToggle />
        </div>
      </header>

      {/* Error Alert */}
      {error && (
        <Alert className="m-4 border-destructive">
          <AlertDescription>
            {error}
          </AlertDescription>
        </Alert>
      )}

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
            <Bot className="h-16 w-16 text-muted-foreground" />
            <div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground">
                {hasValidApiKey() ? "¡Hola! ¿En qué puedo ayudarte hoy?" : "Por favor, configura tu API Key de Deepseek para comenzar."}
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4 max-w-4xl mx-auto">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                <Card className={`max-w-[80%] ${message.isBot ? 'bg-muted' : 'bg-primary text-primary-foreground'}`}>
                  <CardContent className="p-3">
                    <div className="flex items-start space-x-2">
                      {message.isBot ? (
                        <Bot className="h-5 w-5 mt-1 flex-shrink-0" />
                      ) : (
                        <User className="h-5 w-5 mt-1 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                        <p className={`text-xs mt-1 ${message.isBot ? 'text-muted-foreground' : 'text-primary-foreground/70'}`}>
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <Card className="bg-muted">
                  <CardContent className="p-3">
                    <div className="flex items-center space-x-2">
                      <Bot className="h-5 w-5 animate-pulse" />
                      <p className="text-sm">Escribiendo...</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t bg-card">
        <div className="flex space-x-2 max-w-4xl mx-auto">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={hasValidApiKey() ? "Escribe tu mensaje..." : "Configura tu API Key primero..."}
            disabled={!hasValidApiKey() || isLoading}
            className="flex-1"
          />
          <Button 
            onClick={sendMessage} 
            disabled={!inputValue.trim() || !hasValidApiKey() || isLoading}
            size="sm"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}