import { useState } from "react";
import { Button } from "@/components/ui/button";
import { WiseGoLogo } from "./WiseGoLogo";
import { ThemeToggle } from "./ThemeToggle";
import { ArrowLeft, Bot, MessageCircle, GraduationCap, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ChatbotsPageProps {
  onNavigate: (view: string) => void;
}

export function ChatbotsPage({ onNavigate }: ChatbotsPageProps) {
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
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Asistentes Inteligentes</h1>
          <p className="text-muted-foreground">Elige el chatbot que mejor se adapte a tus necesidades</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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