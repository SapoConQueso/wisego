import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WiseGoLogo } from "./WiseGoLogo";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSelector } from "./LanguageSelector";
import { Menu, Search, ChevronRight, Info, BarChart3, MapPin, MessageSquare, User, LogOut, Users, X, Crown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useSearch } from "@/hooks/useSearch";
import { useAuth } from "@/components/AuthProvider";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

interface MainDashboardProps {
  onNavigate: (view: string) => void;
  onLogout: () => void;
}

export function MainDashboard({ onNavigate, onLogout }: MainDashboardProps) {
  const { user, isGuest, signOut } = useAuth();
  const { searchQuery, setSearchQuery, searchResults, hasResults } = useSearch(onNavigate);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const { currentLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);

  const menuItems = [
    { icon: BarChart3, label: t.nav.compare, action: () => onNavigate("compare") },
    { icon: MapPin, label: t.nav.map, action: () => onNavigate("map") },
    { icon: MessageSquare, label: t.nav.chatbots, action: () => onNavigate("chatbots") },
    { icon: Users, label: t.nav.community, action: () => onNavigate("community") },
  ];

  const partners = [
    { 
      name: "Karina Candia", 
      image: "/lovable-uploads/bd38207e-462a-47e9-9a78-9edb4bbc277c.png"
    },
    { 
      name: "Ramírez Gastón", 
      image: "/lovable-uploads/4ef0a75d-219a-4c1a-b2dd-73b8eec2f8dc.png"
    },
    { 
      name: "Gonzalo Begazo", 
      image: "/lovable-uploads/e476cfa8-0dd8-4e88-9c36-f83b1d5714cd.png"
    },
    { 
      name: "Score", 
      image: "/lovable-uploads/ff3df5bc-6b2b-4556-9cee-f425bde2d45d.png"
    },
    { 
      name: "SMMUN", 
      image: "/lovable-uploads/46f3aab4-23b7-435c-ae4c-6246823af9db.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-3 sm:p-4 shadow-lg border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 min-w-0 flex-shrink">
            <WiseGoLogo size="sm" />
            <span className="text-lg sm:text-xl font-bold font-title tracking-wide hidden xs:block">WiseGO!</span>
          </div>
          
          <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
            <div className="hidden sm:block">
              <LanguageSelector />
            </div>
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-200 hover:scale-105 h-8 w-8 p-0 sm:h-auto sm:w-auto sm:p-2">
                  <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-card border-l border-border shadow-2xl">
                <div className="py-6 space-y-4">
                  <div className="flex items-center space-x-3 pb-4 border-b border-border">
                    <WiseGoLogo size="sm" />
                    <span className="text-lg font-bold font-title text-primary">WiseGO!</span>
                  </div>
                  
                  {/* Mobile-only Language and Theme selectors */}
                  <div className="sm:hidden space-y-2 pb-4 border-b border-border">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-muted-foreground">Idioma:</span>
                      <LanguageSelector />
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-muted-foreground">Tema:</span>
                      <ThemeToggle />
                    </div>
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
        </div>
      </header>

      {/* Search Bar */}
      <div className="p-3 sm:p-4 bg-muted/30 border-b border-border">
        <div className="space-y-3">
          {/* Search Input */}
          <div className="relative max-w-4xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder={t.dashboard.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSearchResults(e.target.value.length > 0);
              }}
              onFocus={() => setShowSearchResults(searchQuery.length > 0)}
              className="pl-10 pr-4 bg-background border-border rounded-full text-foreground placeholder:text-muted-foreground focus:bg-background focus:border-primary transition-all duration-300"
            />
            
            {/* Search Results Dropdown */}
            {showSearchResults && hasResults && (
              <Card className="absolute top-full left-0 right-0 mt-2 z-50 max-h-64 overflow-y-auto shadow-2xl border border-border/50">
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
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 text-muted-foreground hover:text-foreground hover:bg-muted/50"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* User Actions - Separate row on mobile */}
          <div className="flex justify-center">
            {(user || isGuest) ? (
              <div className="flex items-center space-x-2">
                <Button 
                  size="sm"
                  onClick={() => onNavigate("profile")}
                  className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-3 sm:px-4 shadow-lg text-xs sm:text-sm"
                >
                  <span className="hidden sm:inline">{isGuest ? "👤 Invitado" : (user?.user_metadata?.username || user?.email?.split('@')[0] || 'Usuario')} 👤</span>
                  <span className="sm:hidden">👤 {isGuest ? "Invitado" : "Perfil"}</span>
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
                  className="rounded-full px-3 text-muted-foreground hover:text-foreground hover:bg-muted border border-border"
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Button 
                  size="sm"
                  variant="ghost"
                  onClick={() => onNavigate("login")}
                  className="rounded-full px-3 text-muted-foreground hover:text-foreground hover:bg-muted border border-border text-xs sm:text-sm"
                >
                  {t.nav.login}
                </Button>
                <Button 
                  size="sm"
                  onClick={() => onNavigate("register")}
                  className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-3 shadow-lg text-xs sm:text-sm"
                >
                  {t.nav.register}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="p-4 space-y-6">
        {/* Hero Section */}
        <div className="bg-card text-card-foreground rounded-2xl p-8 text-center relative overflow-hidden border border-border shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 400 200" className="h-full">
              <defs>
                <pattern id="heroPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#heroPattern)" />
            </svg>
          </div>
          <div className="relative z-10">
            <WiseGoLogo size="lg" className="mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold font-title mb-4 tracking-wide">{t.dashboard.title}</h1>
            <p className="text-lg sm:text-xl font-subtitle text-muted-foreground max-w-2xl mx-auto">
              {t.dashboard.subtitle}
            </p>
          </div>
        </div>

        {/* Guest Welcome Banner */}
        {isGuest && (
          <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="bg-accent p-3 rounded-xl shadow-lg">
                <Crown className="h-6 w-6 text-accent-foreground" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <h3 className="font-semibold font-title text-card-foreground text-lg">{t.dashboard.welcomeDemo}</h3>
                  <Badge className="bg-accent text-accent-foreground shadow-lg border border-accent/50">
                    <Crown className="h-3 w-3 mr-1" />
                    {t.dashboard.fullAccess}
                  </Badge>
                </div>
                <p className="text-sm font-subtitle text-muted-foreground leading-relaxed">
                  {t.dashboard.demoDescription}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Announcement */}
        <div className="bg-card border border-border rounded-2xl p-6 shadow-lg relative">
          {/* AD Badge */}
          <div className="absolute top-3 right-3 bg-muted/80 text-muted-foreground text-xs font-bold px-2 py-1 rounded border border-border/50">
            AD
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-accent p-3 rounded-xl shadow-lg">
              <Info className="h-6 w-6 text-accent-foreground" />
            </div>
            <div className="flex-1">
              <p className="text-base font-medium font-title text-card-foreground mb-4">
                {t.dashboard.announcement}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button 
                  size="sm" 
                  onClick={() => window.open("https://www.ulima.edu.pe", "_blank")}
                  className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full shadow-lg border border-accent/50 font-subtitle"
                >
                  {t.dashboard.announcementButton}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold font-title mb-8 text-center text-card-foreground">{t.dashboard.quickActions}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {menuItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="h-24 sm:h-28 flex flex-col items-center justify-center space-y-3 bg-muted/30 border border-border rounded-xl hover:bg-muted hover:scale-105 transition-all duration-300 group"
                onClick={item.action}
              >
                <item.icon className="h-6 w-6 sm:h-8 sm:w-8 text-foreground group-hover:text-accent transition-colors" />
                <span className="text-xs sm:text-sm font-medium font-subtitle text-muted-foreground group-hover:text-foreground text-center leading-tight">{item.label}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* ¿Por qué elegir WiseGo? */}
        <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold font-title mb-6 text-center text-card-foreground">
            {t.about.whyChoose} <span className="text-accent">WiseGO!</span>?
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
            {t.about.whyChooseText}
          </p>
        </div>

        {/* Nuestra Visión */}
        <div className="bg-primary text-primary-foreground rounded-2xl p-6 shadow-lg">
          <h3 className="text-2xl sm:text-3xl font-bold font-title mb-6 text-center">{t.about.ourVision}</h3>
          <p className="text-base leading-relaxed text-center max-w-4xl mx-auto">
            {t.about.visionText}
          </p>
        </div>

        {/* Nuestra Misión */}
        <div className="bg-accent text-accent-foreground rounded-2xl p-6 shadow-lg">
          <h3 className="text-2xl sm:text-3xl font-bold font-title mb-6 text-center">{t.about.ourMission}</h3>
          <p className="text-base leading-relaxed text-center max-w-4xl mx-auto">
            {t.about.missionText}
          </p>
        </div>

        {/* Nuestros Socios Clave */}
        <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl sm:text-3xl font-bold font-title mb-10 text-center text-card-foreground">
            {t.about.keyPartners}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center space-x-6 bg-muted/30 rounded-2xl p-6 border border-border hover:bg-muted/50 hover:scale-105 transition-all duration-300 shadow-md">
                <div className="flex-shrink-0">
                  <img 
                    src={partner.image} 
                    alt={partner.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-border shadow-lg"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-lg font-semibold font-subtitle text-card-foreground">{partner.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}