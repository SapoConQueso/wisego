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
    const match = msg?.match(/en (\\S+)/);
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
    try { await createCheckout(); }
    catch { toast.error("Error al suscribirse"); }
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
    if (!text || !selectedBot) return;
    // añadir usuario
    const newHistory = [...chatHistory, { role: "user" as const, text }];
    setChatHistory(newHistory);
    saveHistory(newHistory);
    inputRef.current!.value = "";

    // formatear prompt con personalidad + chat previo
    const fullPrompt =
      PERSONALITIES[selectedBot] + "\n" +
      newHistory.map(m => `${m.role==="user"?"Usuario":"Asistente"}: ${m.text}`).join("\n");

    // conectar SSE
    const resp = await fetch("http://zaylar.com:12506/agent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: fullPrompt })
    });
    const reader = resp.body!.getReader();
    const decoder = new TextDecoder();
    let assistantText = "";

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
          // actualizar estado legible
          const txt = STATUS_TEXT[evt.status]?.(evt.message) ?? "";
          setStatusText(txt);

          if (evt.status === "done") {
            assistantText += evt.response;
            const updated = [...newHistory, { role: "assistant" as const, text: assistantText }];
            setChatHistory(updated);
            saveHistory(updated);
            setStatusText("");
          }
        } catch {}
      });
    }
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
      <header className="bg-primary text-primary-foreground p-4 flex items-center">
        <Button variant="ghost" size="sm" onClick={() => setSelectedBot(null)}>
          <ArrowLeft className="h-5 w-5"/>
        </Button>
        <span className="ml-4 text-xl font-bold">
          {selectedBot==="general"? "Chat IA General":"Test Vocacional IA"}
        </span>
      </header>
      <div className="flex-1 p-4 overflow-auto space-y-4">
        {chatHistory.map((msg, i) => (
          <div key={i} className={msg.role==="user"?"text-right":"text-left"}>
            <div className={`inline-block p-2 rounded ${
              msg.role==="user"? "bg-primary text-white":"bg-muted text-foreground"
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {statusText && (
          <div className="text-center text-sm italic text-muted-foreground">
            {statusText}
          </div>
        )}
      </div>
      <div className="p-4 flex space-x-2 bg-background">
        <input
          ref={inputRef}
          className="flex-1 border p-2 rounded"
          placeholder="Escribe tu mensaje..."
        />
        <Button onClick={sendMessage}>Enviar</Button>
      </div>
    </div>
  );
}
export default ChatbotsPage;