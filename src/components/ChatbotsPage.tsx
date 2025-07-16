import { useState } from "react";
import { Button } from "@/components/ui/button";
import { WiseGoLogo } from "./WiseGoLogo";
import { ThemeToggle } from "./ThemeToggle";
import { ArrowLeft, Bot, MessageCircle, GraduationCap, Users, Crown, Lock, Building2, BookOpen, BrainCircuit } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/components/AuthProvider";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

interface ChatbotsPageProps {
  onNavigate: (view: string) => void;
}

export function ChatbotsPage({ onNavigate }: ChatbotsPageProps) {
  const { isSubscribed, createCheckout, isGuest } = useAuth();
  const { currentLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);

  const handlePremiumAction = (chatbotName: string) => {
    toast.error(`${chatbotName} está disponible solo para usuarios Premium. ¡Suscríbete!`);
  };

  const handleSubscribe = async () => {
    try {
      if (isGuest) {
        toast.error("Los invitados no pueden realizar compras. Regístrate para acceder a suscripciones.");
        return;
      }
      await createCheckout();
    } catch (error) {
      toast.error("Error al crear la suscripción");
    }
  };

  // En modo invitado, consideramos que tiene acceso completo
  const hasAccess = isSubscribed || isGuest;

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
          <span className="text-xl font-bold">{t.chatbots.title}</span>
        </div>
        <ThemeToggle />
      </header>

      {/* Main Content */}
      <main className="p-4 space-y-6">
      {/* Premium Banner */}
        {!hasAccess && (
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
                    onClick={handleSubscribe}
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

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Test Vocacional Bot */}
          <Card className={`border-2 transition-colors ${hasAccess ? 'hover:border-primary cursor-pointer' : 'opacity-60 cursor-not-allowed'}`}
                onClick={() => hasAccess ? onNavigate("vocational-test") : handlePremiumAction("Test Vocacional IA")}>
            <CardHeader className="text-center relative">
              {!hasAccess && (
                <Badge className="absolute top-2 right-2 bg-wisego-orange text-white">
                  <Crown className="h-3 w-3 mr-1" />
                  Premium
                </Badge>
              )}
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl flex items-center justify-center space-x-2">
                <span>Test Vocacional IA</span>
                {!hasAccess && <Lock className="h-4 w-4 text-muted-foreground" />}
              </CardTitle>
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
              <Button 
                className={`w-full ${hasAccess ? 'bg-primary hover:bg-primary/90' : 'bg-muted cursor-not-allowed'}`}
                disabled={!hasAccess}
              >
                {hasAccess ? 'Iniciar Test Vocacional' : (
                  <div className="flex items-center space-x-2">
                    <Lock className="h-4 w-4" />
                    <span>Requiere Premium</span>
                  </div>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Chat General */}
          <Card className={`border-2 transition-colors ${hasAccess ? 'hover:border-accent cursor-pointer' : 'opacity-60 cursor-not-allowed'}`}
                onClick={() => hasAccess ? onNavigate("ai-chat") : handlePremiumAction("Chat IA General")}>
            <CardHeader className="text-center relative">
              {!hasAccess && (
                <Badge className="absolute top-2 right-2 bg-wisego-orange text-white">
                  <Crown className="h-3 w-3 mr-1" />
                  Premium
                </Badge>
              )}
              <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="text-xl flex items-center justify-center space-x-2">
                <span>Chat IA General</span>
                {!hasAccess && <Lock className="h-4 w-4 text-muted-foreground" />}
              </CardTitle>
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
              <Button 
                className={`w-full ${hasAccess ? 'bg-accent hover:bg-accent/90' : 'bg-muted cursor-not-allowed'}`}
                disabled={!hasAccess}
              >
                {hasAccess ? 'Iniciar Conversación' : (
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