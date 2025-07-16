import React, { useState, useEffect } from "react";
import { BackgroundPattern } from "@/components/BackgroundPattern";
import { LoginForm } from "@/components/LoginForm";
import { RegisterForm } from "@/components/RegisterForm";
import { MainDashboard } from "@/components/MainDashboard";
import { AboutPage } from "@/components/AboutPage";
import { ChatbotsPage } from "@/components/ChatbotsPage";
import { VocationalTestPage } from "@/components/VocationalTestPage";
import { AiChatPage } from "@/components/AiChatPage";
import { ComparePage } from "@/components/ComparePage";
import { MapPage } from "@/components/MapPageSimple";
import { ProfilePage } from "@/components/ProfilePage";
import { CommunityPage } from "@/components/CommunityPage";
import { UniversityTourPage } from "@/components/UniversityTourPage";
import { AuthProvider, useAuth } from "@/components/AuthProvider";
import { Toaster } from "@/components/ui/sonner";

type ViewType = "login" | "register" | "dashboard" | "about" | "chatbots" | "vocational-test" | "ai-chat" | "compare" | "map" | "profile" | "community" | "university-tour";

function AppContent() {
  const [currentView, setCurrentView] = useState<ViewType>("dashboard");
  const { user, isLoading, signOut, isSubscribed } = useAuth();

  // Check if user is logged in and redirect to login if not
  useEffect(() => {
    if (!isLoading && !user) {
      setCurrentView("login");
    } else if (!isLoading && user) {
      setCurrentView("dashboard");
    }
  }, [user, isLoading]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Cargando...</p>
        </div>
      </div>
    );
  }

  const renderCurrentView = () => {
    switch (currentView) {
      case "login":
        return (
          <BackgroundPattern className="flex items-center justify-center p-4">
            <LoginForm 
              onSwitchToRegister={() => setCurrentView("register")}
            />
          </BackgroundPattern>
        );
      
      case "register":
        return (
          <BackgroundPattern className="flex items-center justify-center p-4">
            <RegisterForm 
              onSwitchToLogin={() => setCurrentView("login")}
            />
          </BackgroundPattern>
        );
      
      case "dashboard":
        return <MainDashboard 
          onNavigate={(view) => setCurrentView(view as ViewType)}
          userSession={{
            isLoggedIn: !!user,
            isGuest: false,
            username: user?.user_metadata?.username || user?.email?.split('@')[0] || 'Usuario',
            email: user?.email,
            isPremium: isSubscribed,
            apiKeys: {}
          }}
          onLogout={async () => {
            await signOut();
            setCurrentView("login");
          }}
        />;
      
      case "about":
        return <AboutPage onBack={() => setCurrentView("dashboard")} />;
      
      case "chatbots":
        return <ChatbotsPage onNavigate={(view) => setCurrentView(view as ViewType)} />;
      
      case "vocational-test":
        return <VocationalTestPage onNavigate={(view) => setCurrentView(view as ViewType)} />;
      
      case "ai-chat":
        return <AiChatPage onNavigate={(view) => setCurrentView(view as ViewType)} />;
      
      case "compare":
        return <ComparePage onNavigate={(view) => setCurrentView(view as ViewType)} />;
      
      case "map":
        return <MapPage onNavigate={(view) => setCurrentView(view as ViewType)} />;
      
      case "profile":
        return <ProfilePage 
          onNavigate={(view) => setCurrentView(view as ViewType)}
        />;
      
      case "community":
        return <CommunityPage 
          onNavigate={(view) => setCurrentView(view as ViewType)}
          userSession={{
            isLoggedIn: !!user,
            isGuest: false,
            username: user?.user_metadata?.username || user?.email?.split('@')[0] || 'Usuario',
            email: user?.email,
            isPremium: isSubscribed,
            apiKeys: {}
          }}
        />;
      
      case "university-tour":
        return <UniversityTourPage onNavigate={(view) => setCurrentView(view as ViewType)} />;
      
      default:
        return null;
    }
  };

  return renderCurrentView();
}

const Index = () => {
  return (
    <AuthProvider>
      <AppContent />
      <Toaster />
    </AuthProvider>
  );
};

export default Index;