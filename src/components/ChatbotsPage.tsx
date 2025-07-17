import { useState, useEffect, useRef } from "react";
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
  Lock,
  Send,
  User
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

interface ChatbotsPageProps {
  onNavigate: (view: string) => void;
}

interface Message {
  id: number;
  role: "user" | "assistant";
  text: string;
  timestamp: Date;
}

const PERSONALITIES: Record<string, string> = {
  general: "Eres un asistente amigable y educativo. Responde con claridad y ejemplos cuando sea posible.",
  vocational: "Eres un orientador vocacional profesional y empático. Guía al usuario a descubrir sus fortalezas y opciones de carrera."
};

// Mock auth context for demonstration
const useAuth = () => ({
  isSubscribed: true, // Set to true for demo
  isGuest: false,
  createCheckout: async () => console.log("Checkout created")
});

// Mock toast for demonstration
const toast = {
  error: (message: string) => console.error(message)
};

export function ChatbotsPage({ onNavigate }: ChatbotsPageProps) {
  const { isSubscribed, createCheckout, isGuest } = useAuth();
  const hasAccess = isSubscribed || isGuest;

  const [selectedBot, setSelectedBot] = useState<"general" | "vocational" | null>(null);
  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Reset chat history when bot changes
  useEffect(() => {
    if (selectedBot) {
      const welcomeMessage: Message = {
        id: Date.now(),
        role: "assistant",
        text: selectedBot === "general" 
          ? "¡Hola! Soy tu asistente educativo. ¿En qué puedo ayudarte hoy?"
          : "¡Hola! Soy tu orientador vocacional. Te ayudaré a descubrir la carrera perfecta para ti. ¿Comenzamos?",
        timestamp: new Date()
      };
      setChatHistory([welcomeMessage]);
    }
  }, [selectedBot]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [chatHistory]);

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
    } catch { 
      toast.error("Error al suscribirse"); 
    }
  };

  const startChat = (bot: "general" | "vocational") => {
    if (!hasAccess) {
      handlePremiumAction(bot === "general" ? "Chat IA General" : "Test Vocacional IA");
      return;
    }
    setSelectedBot(bot);
  };

  // Simulate AI response
  const simulateAIResponse = async (userMessage: string, botType: string): Promise<string> => {
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    
    const message = userMessage.toLowerCase();
    
    if (botType === "vocational") {
      if (message.includes('hola') || message.includes('comenzamos')) {
        return "Perfecto, empezemos con el test vocacional. ¿Podrías contarme cuáles son tus materias favoritas en el colegio?";
      } else if (message.includes('matemáticas') || message.includes('ciencias')) {
        return "Excelente, veo que tienes afinidad por las ciencias exactas. ¿Te gusta más resolver problemas teóricos o aplicar conocimientos en proyectos prácticos?";
      } else if (message.includes('historia') || message.includes('literatura')) {
        return "Interesante, tienes afinidad por las humanidades. ¿Prefieres escribir, investigar, o tal vez enseñar a otros?";
      } else {
        return "Muy bien, esa información es valiosa. ¿Cómo te ves trabajando en el futuro: en una oficina, al aire libre, con personas, o de forma más independiente?";
      }
    } else {
      if (message.includes('carrera') || message.includes('estudiar')) {
        return "Para ayudarte a elegir una carrera, considera tus intereses, habilidades y el mercado laboral. ¿Hay algún campo específico que te llame la atención?";
      } else if (message.includes('universidad')) {
        return "En Perú hay excelentes universidades. ¿Tienes preferencia por alguna región específica o modalidad de estudio (presencial/virtual)?";
      } else {
        return "Es una excelente pregunta. Te recomiendo considerar varios factores importantes para tomar una decisión informada. ¿Podrías contarme más detalles sobre tu situación?";
      }
    }
  };

  const sendMessage = async () => {
    if (!inputValue.trim() || !selectedBot) return;

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      text: inputValue.trim(),
      timestamp: new Date()
    };

    setChatHistory(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const botResponse = await simulateAIResponse(userMessage.text, selectedBot);
      
      const botMessage: Message = {
        id: Date.now() + 1,
        role: "assistant",
        text: botResponse,
        timestamp: new Date()
      };

      setChatHistory(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: Date.now() + 1,
        role: "assistant",
        text: "Lo siento, hubo un error al procesar tu mensaje. Por favor, inténtalo de nuevo.",
        timestamp: new Date()
      };
      setChatHistory(prev => [...prev, errorMessage]);
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

  // Bot selection screen
  if (!selectedBot) {
    return (
      <div className="min-h-screen bg-background">
        <header className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => onNavigate("dashboard")}
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
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
            <Card className="border-orange-500 bg-gradient-to-r from-orange-500/5 to-primary/5">
              <CardContent className="p-6 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <Crown className="h-6 w-6 text-orange-500"/>
                  <div>
                    <h3 className="font-bold text-primary">¡Accede a chatbots especializados!</h3>
                    <p className="text-sm text-muted-foreground">S/25/mes</p>
                  </div>
                </div>
                <Button 
                  className="bg-orange-500 hover:bg-orange-500/90 text-white"
                  onClick={handleSubscribe}
                >
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
            <Card 
              onClick={() => startChat("vocational")}
              className={`border-2 transition-colors cursor-pointer ${
                hasAccess ? "hover:border-primary" : "opacity-60"
              }`}
            >
              <CardHeader className="text-center relative">
                {!hasAccess && <Badge className="absolute top-2 right-2">Premium</Badge>}
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="h-8 w-8 text-primary"/>
                </div>
                <CardTitle>Test Vocacional IA</CardTitle>
                <CardDescription>Análisis de aptitudes</CardDescription>
              </CardHeader>
            </Card>
            
            <Card 
              onClick={() => startChat("general")}
              className={`border-2 transition-colors cursor-pointer ${
                hasAccess ? "hover:border-accent" : "opacity-60"
              }`}
            >
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

  // Chat screen
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" onClick={() => setSelectedBot(null)}>
            <ArrowLeft className="h-5 w-5"/>
          </Button>
          <span className="text-xl font-bold">
            {selectedBot === "general" ? "Chat IA General" : "Test Vocacional IA"}
          </span>
        </div>
        <ThemeToggle/>
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4 max-w-4xl mx-auto">
          {chatHistory.map((message) => (
            <div key={message.id} className={`flex ${message.role === "user" ? 'justify-end' : 'justify-start'}`}>
              <Card className={`max-w-[80%] ${
                message.role === "user" 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted text-foreground'
              }`}>
                <CardContent className="p-3">
                  <div className="flex items-start space-x-2">
                    {message.role === "assistant" ? (
                      <Bot className="h-5 w-5 mt-1 flex-shrink-0" />
                    ) : (
                      <User className="h-5 w-5 mt-1 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.role === "assistant" 
                          ? 'text-muted-foreground' 
                          : 'text-primary-foreground/70'
                      }`}>
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
      </div>

      {/* Input Area */}
      <div className="p-4 border-t bg-card">
        <div className="flex space-x-2 max-w-4xl mx-auto">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Escribe tu mensaje..."
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

// Mock components for demonstration
const WiseGoLogo = ({ size }: { size: string }) => (
  <div className="flex items-center space-x-2">
    <GraduationCap className="h-6 w-6 text-orange-500" />
    <span className="font-bold">WiseGo</span>
  </div>
);

const ThemeToggle = () => (
  <Button variant="ghost" size="sm">
    <Bot className="h-5 w-5" />
  </Button>
);

export default ChatbotsPage;