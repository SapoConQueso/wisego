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

  // Respuestas predeterminadas por tipo de bot
  const VOCATIONAL_RESPONSES = [
    "Si lo tuyo es comunicar, conectar con personas, contar historias o generar ideas, pero prefieres evadir temas matemáticos complejos, podrías considerar carreras como Comunicación Social, Relaciones Públicas, Marketing Digital, Diseño Gráfico o Psicología (enfocada en el área de intervención o educación). Estas áreas valoran tu habilidad para comunicar, trabajar en equipo y entender personas. Luego podremos ver universidades e institutos que ofrecen esas opciones con mallas adaptadas a tus intereses.",
    
    "Sí — nuestro test está diseñado para identificar tus intereses, tus habilidades y tus preferencias de trabajo (por ejemplo: prefiero crear ideas vs. prefiero analizar datos). Al responder secciones sobre '¿quieres inventar cosas o resolver procesos?' y '¿te interesa el arte/la comunicación o la tecnología/la lógica?', podremos indicarte si estás más orientado hacia una carrera creativa (diseño, comunicación, artes) o una carrera técnica (ingeniería, informática, análisis). De esa manera, tendrás una propuesta personalizada y no una lista genérica.",
    
    `Si tu objetivo es ayudar, impactar en la vida de las personas, pero quieres explorar otras rutas distintas a medicina o psicología clínica, existen múltiples opciones:

• Educación / Pedagogía: profesor, orientador educativo, formador de contenido.
• Trabajo social comunitario o desarrollo humano: proyectos ONG, inclusión cultural.
• Comunicación para cambio social: comunicación institucional, campañas de salud, marketing social.
• Diseño de servicios / experiencia de usuario: ayudar a mejorar productos o servicios para personas.

Podremos explorar opciones en nuestra base de datos de universidades e institutos para encontrar aquellas que ofrezcan mallas orientadas al impacto social, y filtrar por modalidad, costo y ubicación.`
  ];

  const GENERAL_RESPONSES = [
    `Según datos recientes del mercado peruano, la carrera de Ingeniería Industrial es una de las más demandadas por las empresas en 2025, gracias a las tendencias de automatización y mejora de procesos.

En Lima destacan instituciones con alta empleabilidad para esta carrera, por ejemplo la Universidad de Lima, que figura en rankings internacionales por empleabilidad estudiantil.

En WiseGO! podemos revisar nuestra base de datos y mostrar una lista filtrada con universidades que publican sus tasas de egreso y empleo, comparar costos, ubicación y valor agregado para que elijas con criterio.`,
    
    `¡Buena pregunta! En nuestra sección de Eventos tienes un listado actualizado de próximos Open Days, ferias universitarias y talleres vocacionales. Por ejemplo, si estás en Lima, te sugerimos revisar los eventos en los distritos de San Isidro, Miraflores y Surco en los próximos 2 a 4 semanas.

También puedes filtrar por modalidad presencial o virtual, y te podemos enviar una alerta cuando falten pocos días para el evento. ¿Te gustaría que te busque uno ahora mismo?`
  ];

  const sendMessage = async () => {
    const text = inputRef.current?.value.trim();
    if (!text || !selectedBot) return;
    
    // añadir mensaje de usuario
    const newHistory = [...chatHistory, { role: "user" as const, text }];
    setChatHistory(newHistory);
    saveHistory(newHistory);
    inputRef.current!.value = "";

    // Simulación de procesamiento
    setStatusText("Procesando...");
    
    // Simular delay
    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 1200));

    // Seleccionar respuesta según el bot y el número de mensaje
    const responses = selectedBot === "vocational" ? VOCATIONAL_RESPONSES : GENERAL_RESPONSES;
    const userMessagesCount = newHistory.filter(m => m.role === "user").length;
    const responseIndex = (userMessagesCount - 1) % responses.length;
    const assistantText = responses[responseIndex];

    const updated = [...newHistory, { role: "assistant" as const, text: assistantText }];
    setChatHistory(updated);
    saveHistory(updated);
    setStatusText("");
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