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

  // Simulación de respuesta de IA (reemplazará la llamada real más tarde)
  const simulateAIResponse = async (userMessage: string): Promise<string> => {
    // Simulamos un delay para hacer parecer que está procesando
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    
    // Respuestas predefinidas inteligentes basadas en palabras clave
    const responses = {
      saludo: [
        "¡Hola! Me alegra poder ayudarte con tu orientación educativa. ¿Tienes alguna carrera específica en mente?",
        "¡Perfecto! Estoy aquí para guiarte en tu búsqueda educativa. ¿Qué te interesa estudiar?",
        "¡Excelente! Puedo ayudarte a explorar diferentes opciones educativas. ¿Cuáles son tus intereses principales?"
      ],
      carrera: [
        "Hay muchas carreras fascinantes disponibles. ¿Podrías contarme más sobre tus intereses y habilidades para poder recomendarte mejor?",
        "Para ayudarte a elegir la carrera ideal, me gustaría conocer: ¿qué materias te gustan más? ¿Prefieres trabajar con personas, datos, o proyectos creativos?",
        "Excelente pregunta sobre carreras. ¿Hay algún campo específico que te llame la atención? Por ejemplo: tecnología, salud, arte, negocios, etc."
      ],
      universidad: [
        "Las universidades en Perú ofrecen excelentes programas. ¿Tienes preferencia por alguna región específica o modalidad de estudio?",
        "Hay muchas opciones universitarias. Para recomendarte mejor, ¿qué factores son más importantes para ti: ubicación, costos, prestigio, o especialización?",
        "Te puedo ayudar a comparar universidades. ¿Estás considerando universidades públicas, privadas, o ambas opciones?"
      ],
      ingenieria: [
        "¡La ingeniería es un campo excelente! Hay muchas especializaciones: industrial, sistemas, civil, mecánica, etc. ¿Alguna te interesa más?",
        "Las carreras de ingeniería tienen gran demanda laboral. ¿Te inclinas más hacia la tecnología, la construcción, o los procesos industriales?",
        "Perfecto, la ingeniería ofrece muchas oportunidades. ¿Prefieres trabajar con software, hardware, infraestructura, o procesos?"
      ],
      medicina: [
        "La medicina es una carrera muy noble y demandante. ¿Te atrae más la práctica clínica, la investigación, o alguna especialidad específica?",
        "Estudiar medicina requiere mucha dedicación pero es muy gratificante. ¿Has considerado las diferentes ramas como pediatría, cirugía, o medicina familiar?",
        "Excelente elección considerar medicina. ¿Te interesa más el contacto directo con pacientes o la investigación médica?"
      ],
      administracion: [
        "La administración de empresas es muy versátil. ¿Te interesa más el área de finanzas, marketing, recursos humanos, o operaciones?",
        "Los negocios ofrecen muchas oportunidades. ¿Tienes interés en emprender tu propio negocio o trabajar en empresas establecidas?",
        "La gestión empresarial es clave en todas las industrias. ¿Qué tipo de organizaciones te atraen más: startups, corporaciones, ONG?"
      ],
      default: [
        "Esa es una excelente pregunta. Basándome en mi experiencia en orientación educativa, te recomiendo considerar varios factores importantes.",
        "Me parece muy interesante tu consulta. Para darte una respuesta más específica, ¿podrías contarme un poco más sobre tu situación actual?",
        "Gracias por tu pregunta. En mi experiencia ayudando estudiantes, he visto que es importante considerar tanto tus intereses como las oportunidades del mercado laboral."
      ]
    };

    // Detectar palabras clave en el mensaje del usuario
    const message = userMessage.toLowerCase();
    let responseCategory = 'default';
    
    if (message.includes('hola') || message.includes('buenos') || message.includes('saludos')) {
      responseCategory = 'saludo';
    } else if (message.includes('carrera') || message.includes('estudiar') || message.includes('profesión')) {
      responseCategory = 'carrera';
    } else if (message.includes('universidad') || message.includes('instituto') || message.includes('centro de estudios')) {
      responseCategory = 'universidad';
    } else if (message.includes('ingeniería') || message.includes('ingenieria') || message.includes('ingeniero')) {
      responseCategory = 'ingenieria';
    } else if (message.includes('medicina') || message.includes('doctor') || message.includes('médico') || message.includes('salud')) {
      responseCategory = 'medicina';
    } else if (message.includes('administración') || message.includes('administracion') || message.includes('negocios') || message.includes('empresas')) {
      responseCategory = 'administracion';
    }

    // Seleccionar una respuesta aleatoria de la categoría
    const categoryResponses = responses[responseCategory as keyof typeof responses];
    const randomResponse = categoryResponses[Math.floor(Math.random() * categoryResponses.length)];
    
    return randomResponse;
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