import { useState } from "react";
import { BackgroundPattern } from "@/components/BackgroundPattern";
import { LoginForm } from "@/components/LoginForm";
import { RegisterForm } from "@/components/RegisterForm";
import { BirthdateForm } from "@/components/BirthdateForm";
import { MainDashboard } from "@/components/MainDashboard";
import { AboutPage } from "@/components/AboutPage";

type ViewType = "login" | "register" | "birthdate" | "dashboard" | "about";

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
      
      default:
        return null;
    }
  };

  return renderCurrentView();
};

export default Index;
