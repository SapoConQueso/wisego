import { useState, useRef, useEffect } from "react";
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
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { currentLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);

  // Mensaje inicial de bienvenida
  useEffect(() => {
    if (messages.length === 0) {
      const welcomeMessage: Message = {
        id: Date.now(),
        text: t.chat.welcomeMessage || "¡Hola! Soy tu asistente de orientación educativa. ¿En qué puedo ayudarte hoy?",
        isBot: true,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [t.chat.welcomeMessage, messages.length]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  // Contador de mensajes del usuario para respuestas en secuencia
  const [userMessageCount, setUserMessageCount] = useState(0);

  // Respuestas predeterminadas del Test Vocacional
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

  // Mensaje de servicio no disponible
  const simulateAIResponse = async (userMessage: string): Promise<string> => {
    // Simulamos un delay breve
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return "Lo sentimos, el servicio de chat con IA se encuentra temporalmente fuera de línea por mantenimiento. Estamos trabajando para mejorar tu experiencia. Por favor, intenta nuevamente más tarde o explora nuestras otras herramientas disponibles.";
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

    try {
      const botResponse = await simulateAIResponse(userMessage.text);
      
      const botMessage: Message = {
        id: Date.now() + 1,
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setUserMessageCount(prev => prev + 1);
    } catch (error) {
      // Agregar mensaje de error como respuesta del bot
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: `Error: ${error instanceof Error ? error.message : "No se pudo conectar con el servicio. Inténtalo de nuevo."}`,
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
          <LanguageSelector />
          <ThemeToggle />
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
            <Bot className="h-16 w-16 text-muted-foreground" />
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-muted-foreground max-w-md">
                {t.chat.startConversation || "¡Comienza la conversación escribiendo un mensaje!"}
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
                      <p className="text-sm">{t.chat.typing || "Escribiendo..."}</p>
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
            placeholder={t.chat.placeholder || "Escribe tu mensaje..."}
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