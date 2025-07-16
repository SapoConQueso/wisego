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
import { CommunityPage } from "@/components/CommunityPage";

type ViewType = "login" | "register" | "birthdate" | "dashboard" | "about" | "chatbots" | "vocational-test" | "ai-chat" | "compare" | "map" | "profile" | "community";

export interface UserSession {
  isLoggedIn: boolean;
  isGuest: boolean;
  username: string;
  email?: string;
}

const Index = () => {
  const [currentView, setCurrentView] = useState<ViewType>("login");
  const [userSession, setUserSession] = useState<UserSession>({
    isLoggedIn: false,
    isGuest: false,
    username: "",
    email: ""
  });

  const renderCurrentView = () => {
    switch (currentView) {
      case "login":
        return (
          <BackgroundPattern className="flex items-center justify-center p-4">
            <LoginForm 
              onSwitchToRegister={() => setCurrentView("register")}
              onLogin={() => {
                setUserSession({
                  isLoggedIn: true,
                  isGuest: false,
                  username: "usuario",
                  email: "usuario@example.com"
                });
                setCurrentView("dashboard");
              }}
              onGuestAccess={() => {
                setUserSession({
                  isLoggedIn: true,
                  isGuest: true,
                  username: "Invitado",
                  email: ""
                });
                setCurrentView("dashboard");
              }}
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
        return <MainDashboard 
          onNavigate={(view) => setCurrentView(view as ViewType)} 
          userSession={userSession}
          onLogout={() => {
            setUserSession({
              isLoggedIn: false,
              isGuest: false,
              username: "",
              email: ""
            });
            setCurrentView("login");
          }}
        />;
      
      case "about":
        return <AboutPage onBack={() => setCurrentView("dashboard")} />;
      
      case "chatbots":
        return <ChatbotsPage onNavigate={(view) => setCurrentView(view as ViewType)} userSession={userSession} />;
      
      case "vocational-test":
        return <VocationalTestPage onNavigate={(view) => setCurrentView(view as ViewType)} />;
      
      case "ai-chat":
        return <AiChatPage onNavigate={(view) => setCurrentView(view as ViewType)} />;
      
      case "compare":
        return <ComparePage onNavigate={(view) => setCurrentView(view as ViewType)} />;
      
      case "map":
        return <MapPage onNavigate={(view) => setCurrentView(view as ViewType)} />;
      
      case "profile":
        return <ProfilePage onNavigate={(view) => setCurrentView(view as ViewType)} userSession={userSession} />;
      
      case "community":
        return <CommunityPage onNavigate={(view) => setCurrentView(view as ViewType)} userSession={userSession} />;
      
      default:
        return null;
    }
  };

  return renderCurrentView();
};

export default Index;
