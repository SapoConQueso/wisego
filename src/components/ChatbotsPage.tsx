import { useState } from "react";
import { Button } from "@/components/ui/button";
import { WiseGoLogo } from "./WiseGoLogo";
import { ThemeToggle } from "./ThemeToggle";
import { ArrowLeft, Bot, MessageCircle, GraduationCap, Users, Crown, Lock, Building2, BookOpen, BrainCircuit } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface ChatbotsPageProps {
  onNavigate: (view: string) => void;
}

export function ChatbotsPage({ onNavigate }: ChatbotsPageProps) {
  const [isPremium, setIsPremium] = useState(false); // Simular estado premium
  const { toast } = useToast();

  const handlePremiumAction = (chatbotName: string) => {
    toast({
      title: "Chatbot Premium",
      description: `${chatbotName} está disponible solo para usuarios Premium. ¡Suscríbete por S/25 al mes!`,
      variant: "destructive",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => onNavigate("dashboard")}
            className="text-primary-foreground hover:bg-primary-foreground/10"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <WiseGoLogo size="sm" />
          <span className="text-xl font-bold">Chatbots IA</span>
        </div>
        <ThemeToggle />
      </header>

      {/* Main Content */}
      <main className="p-4 space-y-6">
        {/* Premium Banner */}
        {!isPremium && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <Card className="border-wisego-orange bg-gradient-to-r from-wisego-orange/5 to-primary/5">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Crown className="h-6 w-6 text-wisego-orange" />
                    <div>
                      <h3 className="font-title font-bold text-primary">¡Accede a Chatbots Especializados!</h3>
                      <p className="text-sm text-muted-foreground">Chatbots universitarios y especializados por S/25/mes</p>
                    </div>
                  </div>
                  <Button 
                    className="bg-wisego-orange hover:bg-wisego-orange/90 text-white"
                    onClick={() => onNavigate("profile")}
                  >
                    <Crown className="h-4 w-4 mr-2" />
                    Suscribirse
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Asistentes Inteligentes</h1>
          <p className="text-muted-foreground">Elige el chatbot que mejor se adapte a tus necesidades</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Test Vocacional Bot */}
          <Card className="border-2 hover:border-primary transition-colors cursor-pointer"
                onClick={() => onNavigate("vocational-test")}>
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Test Vocacional IA</CardTitle>
              <CardDescription>
                Descubre tu carrera ideal con nuestro asistente especializado
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Bot className="h-4 w-4" />
                  <span>Análisis personalizado de aptitudes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>Conversación natural e intuitiva</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>Recomendaciones basadas en tu perfil</span>
                </div>
              </div>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Iniciar Test Vocacional
              </Button>
            </CardContent>
          </Card>

          {/* Chat General */}
          <Card className="border-2 hover:border-accent transition-colors cursor-pointer"
                onClick={() => onNavigate("ai-chat")}>
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="text-xl">Chat IA General</CardTitle>
              <CardDescription>
                Conversa con nuestro asistente sobre cualquier tema educativo
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Bot className="h-4 w-4" />
                  <span>Respuestas instantáneas y precisas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>Ayuda con tareas y consultas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>Orientación académica personalizada</span>
                </div>
              </div>
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Iniciar Conversación
              </Button>
            </CardContent>
          </Card>

          {/* Premium Chatbots */}
          <Card className={`border-2 transition-colors ${isPremium ? 'hover:border-wisego-orange cursor-pointer' : 'opacity-60 cursor-not-allowed'}`}
                onClick={() => isPremium ? onNavigate("ai-chat") : handlePremiumAction("Chatbot UNMSM")}>
            <CardHeader className="text-center relative">
              {!isPremium && (
                <Badge className="absolute top-2 right-2 bg-wisego-orange text-white">
                  <Crown className="h-3 w-3 mr-1" />
                  Premium
                </Badge>
              )}
              <div className="mx-auto w-16 h-16 bg-wisego-orange/10 rounded-full flex items-center justify-center mb-4">
                <Building2 className="h-8 w-8 text-wisego-orange" />
              </div>
              <CardTitle className="text-xl flex items-center justify-center space-x-2">
                <span>Chatbot UNMSM</span>
                {!isPremium && <Lock className="h-4 w-4 text-muted-foreground" />}
              </CardTitle>
              <CardDescription>
                Asistente especializado en la Universidad Nacional Mayor de San Marcos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <BrainCircuit className="h-4 w-4" />
                  <span>Información específica de carreras UNMSM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-4 w-4" />
                  <span>Requisitos de admisión actualizados</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>Experiencias de estudiantes actuales</span>
                </div>
              </div>
              <Button 
                className={`w-full ${isPremium ? 'bg-wisego-orange hover:bg-wisego-orange/90' : 'bg-muted cursor-not-allowed'}`}
                disabled={!isPremium}
              >
                {isPremium ? 'Chatear con UNMSM Bot' : (
                  <div className="flex items-center space-x-2">
                    <Lock className="h-4 w-4" />
                    <span>Requiere Premium</span>
                  </div>
                )}
              </Button>
            </CardContent>
          </Card>

          <Card className={`border-2 transition-colors ${isPremium ? 'hover:border-primary cursor-pointer' : 'opacity-60 cursor-not-allowed'}`}
                onClick={() => isPremium ? onNavigate("ai-chat") : handlePremiumAction("Chatbot UNI")}>
            <CardHeader className="text-center relative">
              {!isPremium && (
                <Badge className="absolute top-2 right-2 bg-wisego-orange text-white">
                  <Crown className="h-3 w-3 mr-1" />
                  Premium
                </Badge>
              )}
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl flex items-center justify-center space-x-2">
                <span>Chatbot UNI</span>
                {!isPremium && <Lock className="h-4 w-4 text-muted-foreground" />}
              </CardTitle>
              <CardDescription>
                Experto en Universidad Nacional de Ingeniería
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <BrainCircuit className="h-4 w-4" />
                  <span>Especializado en carreras de ingeniería</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-4 w-4" />
                  <span>Información de laboratorios y proyectos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>Conexión con estudiantes UNI</span>
                </div>
              </div>
              <Button 
                className={`w-full ${isPremium ? 'bg-primary hover:bg-primary/90' : 'bg-muted cursor-not-allowed'}`}
                disabled={!isPremium}
              >
                {isPremium ? 'Chatear con UNI Bot' : (
                  <div className="flex items-center space-x-2">
                    <Lock className="h-4 w-4" />
                    <span>Requiere Premium</span>
                  </div>
                )}
              </Button>
            </CardContent>
          </Card>

          <Card className={`border-2 transition-colors ${isPremium ? 'hover:border-accent cursor-pointer' : 'opacity-60 cursor-not-allowed'}`}
                onClick={() => isPremium ? onNavigate("ai-chat") : handlePremiumAction("Chatbot PUCP")}>
            <CardHeader className="text-center relative">
              {!isPremium && (
                <Badge className="absolute top-2 right-2 bg-wisego-orange text-white">
                  <Crown className="h-3 w-3 mr-1" />
                  Premium
                </Badge>
              )}
              <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Building2 className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="text-xl flex items-center justify-center space-x-2">
                <span>Chatbot PUCP</span>
                {!isPremium && <Lock className="h-4 w-4 text-muted-foreground" />}
              </CardTitle>
              <CardDescription>
                Guía para la Pontificia Universidad Católica del Perú
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <BrainCircuit className="h-4 w-4" />
                  <span>Información académica completa PUCP</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-4 w-4" />
                  <span>Becas y programas de intercambio</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>Vida estudiantil y actividades</span>
                </div>
              </div>
              <Button 
                className={`w-full ${isPremium ? 'bg-accent hover:bg-accent/90' : 'bg-muted cursor-not-allowed'}`}
                disabled={!isPremium}
              >
                {isPremium ? 'Chatear con PUCP Bot' : (
                  <div className="flex items-center space-x-2">
                    <Lock className="h-4 w-4" />
                    <span>Requiere Premium</span>
                  </div>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Tips Section */}
        <div className="max-w-2xl mx-auto mt-12">
          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-lg text-center">💡 Consejos para usar los chatbots</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Sé específico en tus preguntas para obtener mejores respuestas</li>
                <li>• El test vocacional funciona mejor cuando respondes con honestidad</li>
                <li>• Puedes hacer preguntas de seguimiento para profundizar en los temas</li>
                <li>• Los chatbots aprenden de la conversación para mejorar sus respuestas</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}