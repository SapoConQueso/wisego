import { useState } from "react";
import { BackgroundPattern } from "@/components/BackgroundPattern";
import { LoginForm } from "@/components/LoginForm";
import { RegisterForm } from "@/components/RegisterForm";
import { BirthdateForm } from "@/components/BirthdateForm";
import { MainDashboard } from "@/components/MainDashboard";
import { AboutPage } from "@/components/AboutPage";
import { ChatbotsPage } from "@/components/ChatbotsPage";
import { VocationalTestPage } from "@/components/VocationalTestPage";
import { AiChatPage } from "@/components/AiChatPage";
import { ComparePage } from "@/components/ComparePage";
import { MapPage } from "@/components/MapPage";
import { ProfilePage } from "@/components/ProfilePage";

type ViewType = "login" | "register" | "birthdate" | "dashboard" | "about" | "chatbots" | "vocational-test" | "ai-chat" | "compare" | "map" | "profile";

const Index = () => {
  const [currentView, setCurrentView] = useState<ViewType>("login");

  const renderCurrentView = () => {
    switch (currentView) {
      case "login":
        return (
          <BackgroundPattern className="flex items-center justify-center p-4">
            <LoginForm 
              onSwitchToRegister={() => setCurrentView("register")}
              onLogin={() => setCurrentView("dashboard")}
            />
          </BackgroundPattern>
        );
      
      case "register":
        return (
          <BackgroundPattern className="flex items-center justify-center p-4">
            <RegisterForm 
              onSwitchToLogin={() => setCurrentView("login")}
              onSwitchToBirthdate={() => setCurrentView("birthdate")}
            />
          </BackgroundPattern>
        );
      
      case "birthdate":
        return (
          <BackgroundPattern className="flex items-center justify-center p-4">
            <BirthdateForm 
              onComplete={() => setCurrentView("dashboard")}
              onBack={() => setCurrentView("login")}
            />
          </BackgroundPattern>
        );
      
      case "dashboard":
        return <MainDashboard onNavigate={(view) => setCurrentView(view as ViewType)} />;
      
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
        return <ProfilePage onNavigate={(view) => setCurrentView(view as ViewType)} />;
      
      default:
        return null;
    }
  };

  return renderCurrentView();
};

export default Index;
