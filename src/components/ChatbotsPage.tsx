import { useState, useEffect, useRef } from "react";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";
import { WiseGoLogo } from "./WiseGoLogo";
import { ThemeToggle } from "./ThemeToggle";
import {
  ArrowLeft,
  Bot,
  MessageCircle,
  GraduationCap,
  Users,
  Crown,
  Lock
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/components/AuthProvider";
import { toast } from "sonner";

interface ChatbotsPageProps {
  onNavigate: (view: string) => void;
}

const PERSONALITIES: Record<string,string> = {
  general: "Eres un asistente amigable y educativo. Responde con claridad y ejemplos cuando sea posible.",
  vocational: "Eres un orientador vocacional profesional y empático. Guía al usuario a descubrir sus fortalezas y opciones de carrera."
};

// Mapeo de status SSE a texto legible
const STATUS_TEXT: Record<string,(msg?:string)=>string> = {
  start: () => "Iniciando agente...",
  llm_call: () => "Procesando...",
  scrape: (msg) => {
    // extraer dominio de la message
    const match = msg?.match(/en (\S+)/);
    return match ? `Buscando en ${match[1]}...` : "Buscando en página...";
  },
  search: () => "Buscando resultados...",
  error: (msg) => `Error: ${msg}`,
  done: () => ""
};

export function ChatbotsPage({ onNavigate }: ChatbotsPageProps) {
  const { isSubscribed, createCheckout, isGuest } = useAuth();
  const hasAccess = isSubscribed || isGuest;

  const [selectedBot, setSelectedBot] = useState<"general"|"vocational"|null>(null);
  const [chatHistory, setChatHistory] = useState<{ role: "user"|"assistant"; text: string }[]>([]);
  const [statusText, setStatusText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Carga historial desde cookie al cambiar de bot
  useEffect(() => {
    if (!selectedBot) return;
    const key = `chat_history_${selectedBot}`;
    const saved = Cookies.get(key);
    setChatHistory(saved ? JSON.parse(saved) : []);
  }, [selectedBot]);

  // Guarda historial en cookie
  const saveHistory = (history: typeof chatHistory) => {
    if (!selectedBot) return;
    const key = `chat_history_${selectedBot}`;
    Cookies.set(key, JSON.stringify(history), { expires: 7 });
  };

  const handlePremiumAction = (name: string) => {
    toast.error(`${name} requiere Premium. ¡Suscríbete!`);
  };
  
  const handleSubscribe = async () => {
    if (isGuest) {
      toast.error("Los invitados no pueden suscribirse.");
      return;
    }
    try { 
      await createCheckout(); 
    }
    catch { 
      toast.error("Error al suscribirse"); 
    }
  };

  const startChat = (bot: "general"|"vocational") => {
    if (!hasAccess) {
      handlePremiumAction(bot==="general"?"Chat IA General":"Test Vocacional IA");
      return;
    }
    setSelectedBot(bot);
  };

  const sendMessage = async () => {
    const text = inputRef.current?.value.trim();
    if (!text || !selectedBot || isLoading) return;
    
    setIsLoading(true);
    // añadir usuario
    const newHistory = [...chatHistory, { role: "user", text }];
    setChatHistory(newHistory);
    saveHistory(newHistory);
    inputRef.current!.value = "";

    try {
      // formatear prompt con personalidad + chat previo
      const fullPrompt =
        PERSONALITIES[selectedBot] + "\n" +
        newHistory.map(m => `${m.role==="user"?"Usuario":"Asistente"}: ${m.text}`).join("\n");

      console.log("Enviando prompt a la API:", fullPrompt);

      // conectar SSE
      const resp = await fetch("http://zaylar.com:12506/agent", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "text/event-stream"
        },
        body: JSON.stringify({ prompt: fullPrompt })
      });

      console.log("Respuesta de la API:", resp.status, resp.statusText);

      if (!resp.ok) {
        throw new Error(`HTTP error! status: ${resp.status} - ${resp.statusText}`);
      }

      const reader = resp.body!.getReader();
      const decoder = new TextDecoder();
      let assistantText = "";
      let hasAddedAssistantMessage = false;

      // leer stream
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        
        // cada evento separado por doble salto
        chunk.split("\n\n").forEach(line => {
          if (!line.startsWith("data:")) return;
          try {
            const evt = JSON.parse(line.replace("data:", "").trim());
            console.log("Evento SSE recibido:", evt);
            
            // actualizar estado legible
            const txt = STATUS_TEXT[evt.status]?.(evt.message) ?? "";
            setStatusText(txt);

            // Manejar respuesta incremental
            if (evt.response && evt.response.trim()) {
              assistantText += evt.response;
              console.log("Texto del asistente actualizado:", assistantText);
              
              // Agregar o actualizar el mensaje del asistente
              if (!hasAddedAssistantMessage) {
                const updated = [...newHistory, { role: "assistant", text: assistantText }];
                setChatHistory(updated);
                hasAddedAssistantMessage = true;
              } else {
                // Actualizar el último mensaje del asistente
                setChatHistory(prev => {
                  const updated = [...prev];
                  updated[updated.length - 1] = { role: "assistant", text: assistantText };
                  return updated;
                });
              }
            }

            if (evt.status === "done") {
              console.log("Streaming completado. Texto final:", assistantText);
              // Guardar historial final
              const finalHistory = [...newHistory, { role: "assistant", text: assistantText }];
              saveHistory(finalHistory);
              setStatusText("");
            }
          } catch (e) {
            console.error("Error parsing SSE event:", e, "Line:", line);
          }
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Error al enviar el mensaje. Intenta de nuevo.");
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

  const clearHistory = () => {
    if (!selectedBot) return;
    setChatHistory([]);
    const key = `chat_history_${selectedBot}`;
    Cookies.remove(key);
    toast.success("Historial limpiado");
  };

  // pantalla de selección
  if (!selectedBot) {
    return (
      <div className="min-h-screen bg-background">
        <header className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm"
                    onClick={() => onNavigate("dashboard")}
                    className="text-primary-foreground hover:bg-primary-foreground/10">
              <ArrowLeft className="h-5 w-5"/>
            </Button>
            <WiseGoLogo size="sm"/>
            <span className="text-xl font-bold">Chatbots IA</span>
          </div>
          <ThemeToggle/>
        </header>
        <main className="p-4 space-y-6 max-w-4xl mx-auto">
          {/* Premium banner */}
          {!hasAccess && (
            <Card className="border-wisego-orange bg-gradient-to-r from-wisego-orange/5 to-primary/5">
              <CardContent className="p-6 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <Crown className="h-6 w-6 text-wisego-orange"/>
                  <div>
                    <h3 className="font-bold text-primary">¡Accede a chatbots especializados!</h3>
                    <p className="text-sm text-muted-foreground">S/25/mes</p>
                  </div>
                </div>
                <Button className="bg-wisego-orange hover:bg-wisego-orange/90 text-white"
                        onClick={handleSubscribe}>
                  <Crown className="h-4 w-4 mr-2"/> Suscribirse
                </Button>
              </CardContent>
            </Card>
          )}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Asistentes Inteligentes</h1>
            <p className="text-muted-foreground">Elige tu chatbot</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card onClick={() => startChat("vocational")}
                  className={`border-2 transition-colors cursor-pointer ${hasAccess?"hover:border-primary":"opacity-60"}`}>
              <CardHeader className="text-center relative">
                {!hasAccess && <Badge className="absolute top-2 right-2">Premium</Badge>}
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="h-8 w-8 text-primary"/>
                </div>
                <CardTitle>Test Vocacional IA</CardTitle>
                <CardDescription>Análisis de aptitudes</CardDescription>
              </CardHeader>
            </Card>
            <Card onClick={() => startChat("general")}
                  className={`border-2 transition-colors cursor-pointer ${hasAccess?"hover:border-accent":"opacity-60"}`}>
              <CardHeader className="text-center relative">
                {!hasAccess && <Badge className="absolute top-2 right-2">Premium</Badge>}
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <MessageCircle className="h-8 w-8 text-accent"/>
                </div>
                <CardTitle>Chat IA General</CardTitle>
                <CardDescription>Consultas educativas</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </main>
      </div>
    );
  }

  // pantalla de chat
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" onClick={() => setSelectedBot(null)}>
            <ArrowLeft className="h-5 w-5"/>
          </Button>
          <span className="text-xl font-bold">
            {selectedBot==="general"? "Chat IA General":"Test Vocacional IA"}
          </span>
        </div>
        <Button variant="ghost" size="sm" onClick={clearHistory}>
          Limpiar
        </Button>
      </header>
      <div className="flex-1 p-4 overflow-auto space-y-4">
        {chatHistory.length === 0 && (
          <div className="text-center text-muted-foreground py-8">
            <Bot className="h-12 w-12 mx-auto mb-4 opacity-50"/>
            <p>¡Hola! Soy tu asistente de IA. ¿En qué puedo ayudarte hoy?</p>
          </div>
        )}
        {chatHistory.map((msg, i) => (
          <div key={i} className={msg.role==="user"?"text-right":"text-left"}>
            <div className={`inline-block p-3 rounded-lg max-w-[80%] ${
              msg.role==="user"? 
                "bg-primary text-primary-foreground ml-auto":
                "bg-muted text-foreground"
            }`}>
              <div className="whitespace-pre-wrap break-words">
                {msg.text}
              </div>
            </div>
          </div>
        ))}
        {statusText && (
          <div className="text-center text-sm italic text-muted-foreground">
            <Bot className="h-4 w-4 inline mr-2 animate-pulse"/>
            {statusText}
          </div>
        )}
      </div>
      <div className="p-4 border-t bg-background">
        <div className="flex space-x-2 max-w-4xl mx-auto">
          <input
            ref={inputRef}
            className="flex-1 border border-input bg-background px-3 py-2 rounded-md text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Escribe tu mensaje..."
            onKeyPress={handleKeyPress}
            disabled={isLoading}
          />
          <Button 
            onClick={sendMessage} 
            disabled={isLoading}
            className="px-6"
          >
            {isLoading ? "..." : "Enviar"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ChatbotsPage;