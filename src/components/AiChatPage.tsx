import { useState } from "react";
import { Button } from "@/components/ui/button";
import { WiseGoLogo } from "./WiseGoLogo";
import { ThemeToggle } from "./ThemeToggle";
import { ArrowLeft, Send, Bot, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface AiChatPageProps {
  onNavigate: (view: string) => void;
}

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export function AiChatPage({ onNavigate }: AiChatPageProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "¡Hola! Soy tu asistente educativo inteligente. Puedo ayudarte con dudas académicas, información sobre carreras, universidades, y mucho más. ¿En qué puedo ayudarte hoy?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const sendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const question = inputValue.toLowerCase();
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(question),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (userInput: string): string => {
    if (userInput.includes("carrera") || userInput.includes("estudiar")) {
      return "Te puedo ayudar con información sobre diferentes carreras. ¿Hay algún área específica que te interese? Por ejemplo: ingeniería, medicina, artes, negocios, etc.";
    }
    
    if (userInput.includes("universidad") || userInput.includes("instituto")) {
      return "Existen muchas opciones educativas en Perú. Puedo darte información sobre universidades públicas y privadas, institutos técnicos, y sus programas académicos. ¿Qué tipo de institución te interesa?";
    }
    
    if (userInput.includes("matemáticas") || userInput.includes("fisica") || userInput.includes("química")) {
      return "Las ciencias exactas son fundamentales para muchas carreras. ¿Necesitas ayuda con algún tema específico o quieres saber sobre carreras relacionadas?";
    }
    
    if (userInput.includes("trabajo") || userInput.includes("empleo")) {
      return "El mercado laboral actual valora mucho las habilidades digitales y la capacidad de adaptación. ¿Te gustaría conocer sobre las profesiones más demandadas o cómo prepararte para el futuro laboral?";
    }
    
    return "Entiendo tu consulta. Te puedo ayudar con información sobre carreras, universidades, orientación académica, y preparación para el futuro profesional. ¿Podrías ser más específico sobre lo que necesitas?";
  };

  const quickQuestions = [
    "¿Qué carreras tienen mayor demanda laboral?",
    "¿Cómo elegir la universidad correcta?",
    "¿Qué habilidades necesito desarrollar?",
    "¿Cuáles son las carreras mejor pagadas?"
  ];

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
          <span className="text-xl font-bold">Chat IA General</span>
        </div>
        <ThemeToggle />
      </header>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full">
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <Card className={`max-w-[80%] ${
                  message.isBot 
                    ? 'bg-muted border-border' 
                    : 'bg-accent text-accent-foreground border-accent'
                }`}>
                  <CardContent className="p-3">
                    <div className="flex items-start space-x-2">
                      {message.isBot && (
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Bot className="h-3 w-3 text-primary-foreground" />
                        </div>
                      )}
                      <div className="flex-1">
                        <p className="text-sm">{message.text}</p>
                        <p className={`text-xs mt-1 ${
                          message.isBot ? 'text-muted-foreground' : 'text-accent-foreground/70'
                        }`}>
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                      {!message.isBot && (
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <User className="h-3 w-3 text-primary-foreground" />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
            
            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground text-center">Preguntas frecuentes:</p>
                <div className="grid grid-cols-1 gap-2">
                  {quickQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => setInputValue(question)}
                      className="text-left justify-start h-auto p-3 text-sm"
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="p-4 border-t">
          <div className="flex space-x-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Escribe tu pregunta aquí..."
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              className="flex-1"
            />
            <Button onClick={sendMessage} className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}