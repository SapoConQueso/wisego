import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WiseGoLogo } from "./WiseGoLogo";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, Search, ChevronRight, Info, BarChart3, MapPin, MessageSquare, User, LogOut } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { UserSession } from "@/pages/Index";

interface MainDashboardProps {
  onNavigate: (view: string) => void;
  userSession: UserSession;
  onLogout: () => void;
}

export function MainDashboard({ onNavigate, userSession, onLogout }: MainDashboardProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const menuItems = [
    { icon: Info, label: "Conócenos", action: () => onNavigate("about") },
    { icon: BarChart3, label: "Comparar", action: () => onNavigate("compare") },
    { icon: MapPin, label: "Mapa", action: () => onNavigate("map") },
    { icon: MessageSquare, label: "Chatbots", action: () => onNavigate("chatbots") },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <WiseGoLogo size="sm" />
          <span className="text-xl font-bold">WiseGO!</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-secondary">
              <div className="py-6 space-y-4">
                {menuItems.map((item, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="w-full justify-between text-left h-12"
                    onClick={item.action}
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Search Bar */}
      <div className="p-4 bg-secondary">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Buscar..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-44 bg-background border-0 rounded-full"
          />
          {userSession.isLoggedIn ? (
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
              <Button 
                size="sm"
                onClick={() => onNavigate("profile")}
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-4"
              >
                {userSession.username} 👤
              </Button>
              <Button 
                size="sm"
                variant="outline"
                onClick={onLogout}
                className="rounded-full px-3"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
              <Button 
                size="sm"
                variant="outline"
                onClick={() => onNavigate("login")}
                className="rounded-full px-3"
              >
                Iniciar Sesión
              </Button>
              <Button 
                size="sm"
                onClick={() => onNavigate("register")}
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-3"
              >
                Registrarse
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <main className="p-4 space-y-6">
        {/* Hero Section */}
        <div className="bg-primary text-primary-foreground rounded-xl p-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 400 200">
              <path d="M0,100 Q100,50 200,100 T400,100 L400,200 L0,200 Z" fill="white" />
            </svg>
          </div>
          <div className="relative z-10">
            <WiseGoLogo size="lg" className="mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-4">WiseGO!</h1>
          </div>
        </div>

        {/* Announcement */}
        <div className="bg-card border rounded-xl p-4">
          <div className="flex items-start space-x-3">
            <div className="bg-accent/20 p-2 rounded-lg">
              <Info className="h-5 w-5 text-accent" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium mb-2">
                ¡Ya están abiertas las inscripciones para el Open ULima!
              </p>
              <div className="space-y-2">
                <Button 
                  size="sm" 
                  onClick={() => window.open("https://www.ulima.edu.pe", "_blank")}
                  className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full"
                >
                  ¡Inscripciones aquí!
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => onNavigate("about")}
                  className="rounded-full"
                >
                  Más información
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Event Card */}
        <div className="bg-card text-card-foreground rounded-xl border overflow-hidden">
          <div className="bg-gradient-to-r from-orange-400 to-red-500 p-6 text-white">
            <div className="text-4xl font-bold mb-2">
              <span className="border-2 border-white rounded px-2 py-1">OPEN</span>
            </div>
            <div className="text-6xl font-bold text-orange-200">
              ULIMA
            </div>
            <div className="text-2xl font-bold mt-2">15.06</div>
          </div>
          <div className="p-4">
            <img 
              src="/lovable-uploads/cb593173-f798-4d72-8b4b-735221a57754.png" 
              alt="Open ULima Event" 
              className="w-full h-32 object-cover rounded-lg"
            />
          </div>
        </div>
      </main>
    </div>
  );
}