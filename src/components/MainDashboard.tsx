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
            placeholder="Buscar carreras, universidades, funciones..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowSearchResults(e.target.value.length > 0);
            }}
            onFocus={() => setShowSearchResults(searchQuery.length > 0)}
            className="pl-10 pr-44 bg-background border-0 rounded-full"
          />
          
          {/* Search Results Dropdown */}
          {showSearchResults && hasResults && (
            <Card className="absolute top-full left-0 right-44 mt-2 z-50 max-h-64 overflow-y-auto">
              <CardContent className="p-2">
                {searchResults.map((result) => (
                  <Button
                    key={result.id}
                    variant="ghost"
                    className="w-full justify-start text-left h-auto p-3 hover:bg-muted"
                    onClick={() => {
                      result.action();
                      setSearchQuery("");
                      setShowSearchResults(false);
                    }}
                  >
                    <div>
                      <div className="font-medium">{result.title}</div>
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
              className="absolute right-48 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          )}

          {(user || isGuest) ? (
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
              <Button 
                size="sm"
                onClick={() => onNavigate("profile")}
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-4"
              >
                {isGuest ? "👤 Invitado" : (user?.user_metadata?.username || user?.email?.split('@')[0] || 'Usuario')} 👤
              </Button>
              <Button 
                size="sm"
                variant="outline"
                onClick={() => {
                  if (isGuest) {
                    signOut();
                  } else {
                    onLogout();
                  }
                }}
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

        {/* Guest Welcome Banner */}
        {isGuest && (
          <div className="bg-gradient-to-r from-wisego-orange/10 to-primary/10 border border-wisego-orange/20 rounded-xl p-4">
            <div className="flex items-start space-x-3">
              <div className="bg-wisego-orange/20 p-2 rounded-lg">
                <Crown className="h-5 w-5 text-wisego-orange" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="font-semibold text-primary">¡Bienvenido al Modo Demo!</h3>
                  <Badge className="bg-wisego-orange text-white">
                    <Crown className="h-3 w-3 mr-1" />
                    Acceso Completo
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Estás usando WiseGO en modo demostración con acceso completo a todas las funciones premium. 
                  Perfecto para la presentación de Junior StartUp. ¡Explora libremente todos los chatbots y herramientas!
                </p>
              </div>
            </div>
          </div>
        )}

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

        {/* Quick Actions */}
        <div className="bg-card text-card-foreground rounded-xl border p-6">
          <h2 className="text-2xl font-bold mb-6 text-center gradient-text">Accesos Rápidos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {menuItems.map((item, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-20 flex flex-col items-center justify-center space-y-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={item.action}
              >
                <item.icon className="h-6 w-6" />
                <span className="text-sm font-medium">{item.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}