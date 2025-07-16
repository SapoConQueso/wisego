import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WiseGoLogo } from "./WiseGoLogo";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, Search, ChevronRight, Info, BarChart3, MapPin, MessageSquare, User, LogOut, Users, X, Crown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useSearch } from "@/hooks/useSearch";
import { useAuth } from "@/components/AuthProvider";
import { Card, CardContent } from "@/components/ui/card";

interface MainDashboardProps {
  onNavigate: (view: string) => void;
  onLogout: () => void;
}

export function MainDashboard({ onNavigate, onLogout }: MainDashboardProps) {
  const { user, isGuest, signOut } = useAuth();
  const { searchQuery, setSearchQuery, searchResults, hasResults } = useSearch(onNavigate);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const menuItems = [
    { icon: Info, label: "Conócenos", action: () => onNavigate("about") },
    { icon: BarChart3, label: "Comparar", action: () => onNavigate("compare") },
    { icon: MapPin, label: "Mapa", action: () => onNavigate("map") },
    { icon: MessageSquare, label: "Chatbots", action: () => onNavigate("chatbots") },
    { icon: Users, label: "Comunidad", action: () => onNavigate("community") },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary/95 to-primary/90">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary/95 to-primary text-primary-foreground p-4 flex items-center justify-between shadow-lg backdrop-blur-sm border-b border-primary-foreground/10">
        <div className="flex items-center space-x-3">
          <WiseGoLogo size="sm" />
          <span className="text-xl font-bold font-title tracking-wide">WiseGO!</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-200 hover:scale-105">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-card border-l border-border shadow-2xl">
              <div className="py-6 space-y-4">
                <div className="flex items-center space-x-3 pb-4 border-b border-border">
                  <WiseGoLogo size="sm" />
                  <span className="text-lg font-bold font-title text-primary">WiseGO!</span>
                </div>
                {menuItems.map((item, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="w-full justify-between text-left h-12 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                    onClick={item.action}
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                      <span className="font-subtitle">{item.label}</span>
                    </div>
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Search Bar */}
      <div className="p-4 bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="relative max-w-4xl mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 h-4 w-4" />
          <Input
            type="text"
            placeholder="Buscar carreras, universidades, funciones..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowSearchResults(e.target.value.length > 0);
            }}
            onFocus={() => setShowSearchResults(searchQuery.length > 0)}
            className="pl-10 pr-44 bg-white/20 border-white/30 rounded-full text-white placeholder:text-white/70 focus:bg-white/30 focus:border-white/50 transition-all duration-300"
          />
          
          {/* Search Results Dropdown */}
          {showSearchResults && hasResults && (
            <Card className="absolute top-full left-0 right-44 mt-2 z-50 max-h-64 overflow-y-auto shadow-2xl border border-border/50">
              <CardContent className="p-2">
                {searchResults.map((result) => (
                  <Button
                    key={result.id}
                    variant="ghost"
                    className="w-full justify-start text-left h-auto p-3 hover:bg-muted transition-all duration-200"
                    onClick={() => {
                      result.action();
                      setSearchQuery("");
                      setShowSearchResults(false);
                    }}
                  >
                    <div>
                      <div className="font-medium font-subtitle">{result.title}</div>
                      <div className="text-sm text-muted-foreground">{result.description}</div>
                    </div>
                  </Button>
                ))}
              </CardContent>
            </Card>
          )}

          {showSearchResults && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setSearchQuery("");
                setShowSearchResults(false);
              }}
              className="absolute right-48 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 text-white/70 hover:text-white hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </Button>
          )}

          {(user || isGuest) ? (
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
              <Button 
                size="sm"
                onClick={() => onNavigate("profile")}
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-4 shadow-lg"
              >
                {isGuest ? "👤 Invitado" : (user?.user_metadata?.username || user?.email?.split('@')[0] || 'Usuario')} 👤
              </Button>
              <Button 
                size="sm"
                variant="ghost"
                onClick={() => {
                  if (isGuest) {
                    signOut();
                  } else {
                    onLogout();
                  }
                }}
                className="rounded-full px-3 text-white/70 hover:text-white hover:bg-white/20 border border-white/30"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
              <Button 
                size="sm"
                variant="ghost"
                onClick={() => onNavigate("login")}
                className="rounded-full px-3 text-white/70 hover:text-white hover:bg-white/20 border border-white/30"
              >
                Iniciar Sesión
              </Button>
              <Button 
                size="sm"
                onClick={() => onNavigate("register")}
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-3 shadow-lg"
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
        <div className="bg-white/20 backdrop-blur-sm text-white rounded-2xl p-8 text-center relative overflow-hidden border border-white/30 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-accent/20"></div>
          <div className="absolute inset-0 opacity-30">
            <svg width="100%" height="100%" viewBox="0 0 400 200" className="h-full">
              <defs>
                <pattern id="heroPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="2" fill="white" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#heroPattern)" />
            </svg>
          </div>
          <div className="relative z-10">
            <WiseGoLogo size="lg" className="mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold font-title mb-4 tracking-wide">WiseGO!</h1>
            <p className="text-lg sm:text-xl font-subtitle text-white/90 max-w-2xl mx-auto">
              Tu compañero inteligente para elegir la carrera perfecta
            </p>
          </div>
        </div>

        {/* Guest Welcome Banner */}
        {isGuest && (
          <div className="bg-white/30 backdrop-blur-sm border border-white/40 rounded-2xl p-6 shadow-xl">
            <div className="flex items-start space-x-4">
              <div className="bg-accent/90 p-3 rounded-xl shadow-lg">
                <Crown className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <h3 className="font-semibold font-title text-white text-lg">¡Bienvenido al Modo Demo!</h3>
                  <Badge className="bg-accent text-white shadow-lg border border-accent/50">
                    <Crown className="h-3 w-3 mr-1" />
                    Acceso Completo
                  </Badge>
                </div>
                <p className="text-sm font-subtitle text-white/90 leading-relaxed">
                  Estás usando WiseGO en modo demostración con acceso completo a todas las funciones premium. 
                  Perfecto para la presentación de Junior StartUp. ¡Explora libremente todos los chatbots y herramientas!
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Announcement */}
        <div className="bg-white/25 backdrop-blur-sm border border-white/30 rounded-2xl p-6 shadow-xl">
          <div className="flex items-start space-x-4">
            <div className="bg-accent/90 p-3 rounded-xl shadow-lg">
              <Info className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-base font-medium font-title text-white mb-4">
                ¡Ya están abiertas las inscripciones para el Open ULima!
              </p>
              <div className="flex flex-wrap gap-3">
                <Button 
                  size="sm" 
                  onClick={() => window.open("https://www.ulima.edu.pe", "_blank")}
                  className="bg-accent text-white hover:bg-accent/90 rounded-full shadow-lg border border-accent/50 font-subtitle"
                >
                  ¡Inscripciones aquí!
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => onNavigate("about")}
                  className="rounded-full text-white hover:bg-white/20 border border-white/30 font-subtitle"
                >
                  Más información
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-6 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold font-title mb-8 text-center text-white">Accesos Rápidos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {menuItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="h-24 sm:h-28 flex flex-col items-center justify-center space-y-3 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 hover:scale-105 transition-all duration-300 backdrop-blur-sm group"
                onClick={item.action}
              >
                <item.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white group-hover:text-accent transition-colors" />
                <span className="text-xs sm:text-sm font-medium font-subtitle text-white/90 group-hover:text-white text-center leading-tight">{item.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}