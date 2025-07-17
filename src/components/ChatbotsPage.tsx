// src/components/ChatbotsPage.tsx - Versión mejorada con IA real
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { WiseGoLogo } from "./WiseGoLogo";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSelector } from "./LanguageSelector";
import { ArrowLeft, Bot, MessageCircle, GraduationCap, Users, Crown, Lock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/components/AuthProvider";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

// Importar el componente de chat con IA real
import { RealAiChat } from "./RealAiChat";

interface ChatbotsPageProps {
  onNavigate: (view: string) => void;
}

export function ChatbotsPage({ onNavigate }: ChatbotsPageProps) {
  const { isSubscribed, createCheckout, isGuest } = useAuth();
  const { currentLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);
  
  // Estado para manejar qué bot está seleccionado
  const [selectedBot, setSelectedBot] = useState<"general" | "vocational" | null>(null);

  const handlePremiumAction = (chatbotName: string) => {
    toast.error(`${chatbotName} ${t.chatbots.requiresPremium}`);
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

  const hasAccess = isSubscribed || isGuest;

  const startChat = (botType: "general" | "vocational") => {
    if (!hasAccess) {
      handlePremiumAction(botType === "general" ? "Chat IA General" : "Test Vocacional IA");
      return;
    }
    setSelectedBot(botType);
  };

  // Si hay un bot seleccionado, mostrar el chat
  if (selectedBot) {
    return (
      <RealAiChat
        onNavigate={() => setSelectedBot(null)}
        botType={selectedBot}
        title={selectedBot === "general" ? "Chat IA General" : "Test Vocacional IA"}
      />
    );
  }

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
        <div className="flex items-center space-x-2">
          <LanguageSelector />
          <ThemeToggle />
        </div>
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
                      <h3 className="font-title font-bold text-primary">{t.chatbots.unlockSpecializedBots}</h3>
                      <p className="text-sm text-muted-foreground">{t.chatbots.specializedUniversityBots}</p>
                    </div>
                  </div>
                  <Button 
                    className="bg-wisego-orange hover:bg-wisego-orange/90 text-white"
                    onClick={handleSubscribe}
                  >
                    <Crown className="h-4 w-4 mr-2" />
                    {t.chatbots.subscribe}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">{t.chatbots.intelligentAssistants}</h1>
          <p className="text-muted-foreground">{t.chatbots.chooseBot}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Test Vocacional Bot */}
          <Card className={`border-2 transition-colors ${hasAccess ? 'hover:border-primary cursor-pointer' : 'opacity-60 cursor-not-allowed'}`}
                onClick={() => startChat("vocational")}>
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
                <span>{t.chatbots.vocationalTest}</span>
                {!hasAccess && <Lock className="h-4 w-4 text-muted-foreground" />}
              </CardTitle>
              <CardDescription>
                {t.chatbots.discoverCareer}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Bot className="h-4 w-4" />
                  <span>{t.chatbots.personalizedAnalysis}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>{t.chatbots.naturalConversation}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>{t.chatbots.profileRecommendations}</span>
                </div>
              </div>
              <Button 
                className={`w-full ${hasAccess ? 'bg-primary hover:bg-primary/90' : 'bg-muted cursor-not-allowed'}`}
                disabled={!hasAccess}
              >
                {hasAccess ? t.chatbots.startVocationalTest : (
                  <div className="flex items-center space-x-2">
                    <Lock className="h-4 w-4" />
                    <span>{t.chatbots.requiresPremium}</span>
                  </div>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Chat General */}
          <Card className={`border-2 transition-colors ${hasAccess ? 'hover:border-accent cursor-pointer' : 'opacity-60 cursor-not-allowed'}`}
                onClick={() => startChat("general")}>
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
                <span>{t.chatbots.generalChat}</span>
                {!hasAccess && <Lock className="h-4 w-4 text-muted-foreground" />}
              </CardTitle>
              <CardDescription>
                {t.chatbots.conversationDescription}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Bot className="h-4 w-4" />
                  <span>{t.chatbots.instantResponses}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>{t.chatbots.homeworkHelp}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>{t.chatbots.academicOrientation}</span>
                </div>
              </div>
              <Button 
                className={`w-full ${hasAccess ? 'bg-accent hover:bg-accent/90' : 'bg-muted cursor-not-allowed'}`}
                disabled={!hasAccess}
              >
                {hasAccess ? t.chatbots.startConversation : (
                  <div className="flex items-center space-x-2">
                    <Lock className="h-4 w-4" />
                    <span>{t.chatbots.requiresPremium}</span>
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
              <CardTitle className="text-lg text-center">{t.chatbots.tipsTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• {t.chatbots.tip1}</li>
                <li>• {t.chatbots.tip2}</li>
                <li>• {t.chatbots.tip3}</li>
                <li>• {t.chatbots.tip4}</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
