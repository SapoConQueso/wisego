import { useState, useEffect, useRef } from "react";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { WiseGoLogo } from "./WiseGoLogo";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSelector } from "./LanguageSelector";
import { ArrowLeft, Send, Bot, User } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

interface Message {
  role: "user" | "assistant";
  text: string;
  timestamp: Date;
}

interface SSEChatProps {
  onNavigate: (view: string) => void;
  title: string;
  botType: "general" | "vocational";
}

const PERSONALITIES: Record<string, string> = {
  general: "Eres un asistente amigable y educativo. Responde con claridad y ejemplos cuando sea posible.",
  vocational: "Eres un orientador vocacional profesional y empático. Guía al usuario a descubrir sus fortalezas y opciones de carrera."
};

// Mapeo de status SSE a texto legible
const STATUS_TEXT: Record<string, (msg?: string) => string> = {
  start: () => "Iniciando agente...",
  llm_call: () => "Procesando...",
  scrape: (msg) => {
    const match = msg?.match(/en (\S+)/);
    return match ? `Buscando en ${match[1]}...` : "Buscando en página...";
  },
  search: () => "Buscando resultados...",
  error: (msg) => `Error: ${msg}`,
  done: () => ""
};

export function SSEChat({ onNavigate, title, botType }: SSEChatProps) {
  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  const [statusText, setStatusText] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { currentLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);

  // Carga historial desde cookie al montar el componente
  useEffect(() => {
    const key = `chat_history_${botType}`;
    const saved = Cookies.get(key);
    if (saved) {
      try {
        const parsedHistory = JSON.parse(saved).map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }));
        setChatHistory(parsedHistory);
      } catch (error) {
        console.error("Error parsing chat history:", error);
      }
    }
  }, [botType]);

  // Auto-scroll al final de los mensajes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory, statusText]);

  // Guarda historial en cookie
  const saveHistory = (history: Message[]) => {
    const key = `chat_history_${botType}`;
    Cookies.set(key, JSON.stringify(history), { expires: 7 });
  };

  const sendMessage = async () => {
    const text = inputValue.trim();
    if (!text || isLoading) return;

    // Añadir mensaje del usuario
    const userMessage: Message = {
      role: "user",
      text,
      timestamp: new Date()
    };

    const newHistory = [...chatHistory, userMessage];
    setChatHistory(newHistory);
    saveHistory(newHistory);
    setInputValue("");
    setIsLoading(true);

    try {
      // Formatear prompt con personalidad + chat previo
      const fullPrompt =
        PERSONALITIES[botType] + "\n" +
        newHistory.map(m => `${m.role === "user" ? "Usuario" : "Asistente"}: ${m.text}`).join("\n");

      // Conectar SSE
      const response = await fetch("http://zaylar.com:12506/agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: fullPrompt })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const reader = response.body!.getReader();
      const decoder = new TextDecoder();
      let assistantText = "";

      // Leer stream
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        
        // Cada evento separado por doble salto
        chunk.split("\n\n").forEach(line => {
          if (!line.startsWith("data:")) return;
          
          try {
            const evt = JSON.parse(line.replace("data:", "").trim());
            
            // Actualizar estado legible
            const txt = STATUS_TEXT[evt.status]?.(evt.message) ?? "";
            setStatusText(txt);

            if (evt.status === "done") {
              assistantText += evt.response;
              const assistantMessage: Message = {
                role: "assistant",
                text: assistantText,
                timestamp: new Date()
              };
              
              const updatedHistory = [...newHistory, assistantMessage];
              setChatHistory(updatedHistory);
              saveHistory(updatedHistory);
              setStatusText("");
            }
          } catch (error) {
            console.error("Error parsing SSE event:", error);
          }
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      
      // Agregar mensaje de error
      const errorMessage: Message = {
        role: "assistant",
        text: `Error: No se pudo conectar con el servicio. ${error instanceof Error ? error.message : "Inténtalo de nuevo."}`,
        timestamp: new Date()
      };
      
      const updatedHistory = [...newHistory, errorMessage];
      setChatHistory(updatedHistory);
      saveHistory(updatedHistory);
      setStatusText("");
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

  const clearChat = () => {
    setChatHistory([]);
    const key = `chat_history_${botType}`;
    Cookies.remove(key);
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
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={clearChat}
            className="text-primary-foreground hover:bg-primary-foreground/10"
          >
            Limpiar Chat
          </Button>
          <LanguageSelector />
          <ThemeToggle />
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4">
        {chatHistory.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
            <Bot className="h-16 w-16 text-muted-foreground" />
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-muted-foreground max-w-md">
                {t.chat?.startConversation || "¡Comienza la conversación escribiendo un mensaje!"}
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4 max-w-4xl mx-auto">
            {chatHistory.map((message, index) => (
              <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <Card className={`max-w-[80%] ${message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                  <CardContent className="p-3">
                    <div className="flex items-start space-x-2">
                      {message.role === 'assistant' ? (
                        <Bot className="h-5 w-5 mt-1 flex-shrink-0" />
                      ) : (
                        <User className="h-5 w-5 mt-1 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                        <p className={`text-xs mt-1 ${message.role === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
            
            {/* Status text */}
            {statusText && (
              <div className="text-center text-sm italic text-muted-foreground">
                {statusText}
              </div>
            )}
            
            {/* Loading indicator */}
            {isLoading && !statusText && (
              <div className="flex justify-start">
                <Card className="bg-muted">
                  <CardContent className="p-3">
                    <div className="flex items-center space-x-2">
                      <Bot className="h-5 w-5 animate-pulse" />
                      <p className="text-sm">{t.chat?.typing || "Escribiendo..."}</p>
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
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={t.chat?.placeholder || "Escribe tu mensaje..."}
            disabled={isLoading}
            className="flex-1"
          />
          <Button 
            onClick={sendMessage} 
            disabled={!inputValue.trim() || isLoading}
            size="sm"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}