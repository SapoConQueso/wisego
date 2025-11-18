import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WiseGoLogo } from "./WiseGoLogo";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSelector } from "./LanguageSelector";
import { Menu, Search, ChevronRight, Info, BarChart3, MapPin, MessageSquare, User, LogOut, Users, X, Crown, FileText, UserCheck, Calculator, Heart, Bell } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useSearch } from "@/hooks/useSearch";
import { useAuth } from "@/components/AuthProvider";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";
import { useNotifications } from "@/hooks/useNotifications";
import { NotificationsPanel } from "./NotificationsPanel";
import { NewFeatureDialog } from "./NewFeatureDialog";
import { EducationalAdBanner } from "./EducationalAdBanner";
import { PremiumPlansModal } from "./PremiumPlansModal";
import { useSubscription } from "@/hooks/useSubscription";

interface MainDashboardProps {
  onNavigate: (view: string) => void;
  onLogout: () => void;
}

export function MainDashboard({ onNavigate, onLogout }: MainDashboardProps) {
  const { user, isGuest, signOut } = useAuth();
  const { searchQuery, setSearchQuery, searchResults, hasResults } = useSearch(onNavigate);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const { currentLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);
  const { unreadCount } = useNotifications();

  const menuItems = [
    { icon: BarChart3, label: t.nav.compare, action: () => onNavigate("compare") },
    { icon: MapPin, label: t.nav.map, action: () => onNavigate("map") },
    { icon: MessageSquare, label: t.nav.chatbots, action: () => onNavigate("chatbots") },
    { icon: Users, label: t.nav.community, action: () => onNavigate("community") },
    { icon: FileText, label: t.nav.scholarshipGuide, action: () => onNavigate("scholarship-guide") },
    { icon: UserCheck, label: t.nav.mentorMatch, action: () => onNavigate("mentor-match") },
    { icon: Calculator, label: t.nav.costSimulator, action: () => onNavigate("cost-simulator") },
    { icon: Heart, label: t.nav.cultureFit, action: () => onNavigate("culture-fit") },
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
      <NewFeatureDialog />
      
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-3 sm:p-4 shadow-lg border-b border-border sticky top-0 z-50">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 min-w-0 flex-shrink cursor-pointer" onClick={() => onNavigate("dashboard")}>
            <WiseGoLogo size="sm" />
            <span className="text-lg sm:text-xl font-bold font-title tracking-wide hidden xs:block">WiseGO!</span>
          </div>
          
          <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
            {!isGuest && user && (
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative text-primary-foreground hover:bg-primary-foreground/20"
                onClick={() => setShowNotifications(true)}
              >
                <Bell className="h-5 w-5" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 bg-destructive rounded-full text-xs flex items-center justify-center animate-pulse">
                    {unreadCount}
                  </span>
                )}
              </Button>
            )}
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

      <main className="pb-12">
      {/* Hero Section - Redesigned */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/20"></div>
        <div className="absolute inset-0 bg-[url('/lovable-uploads/pattern.svg')] opacity-5"></div>
        
        <div className="relative py-12 sm:py-16 px-4 max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <Badge className="mb-4 text-sm px-4 py-1.5" variant="secondary">
              ✨ Nuevas funcionalidades disponibles
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 font-title">
              {t.dashboard.title}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              {t.dashboard.subtitle}
            </p>
            
            {/* Quick Action Pills */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <Button 
                variant="wisego" 
                size="lg" 
                onClick={() => onNavigate("compare")}
                className="gap-2 shadow-lg hover:shadow-xl transition-all"
              >
                <BarChart3 className="h-4 w-4" />
                Comparar Universidades
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => onNavigate("chatbots")}
                className="gap-2 border-2 hover:bg-accent"
              >
                <MessageSquare className="h-4 w-4" />
                Test Vocacional
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => onNavigate("map")}
                className="gap-2 border-2 hover:bg-accent"
              >
                <MapPin className="h-4 w-4" />
                Explorar Mapa
              </Button>
            </div>
          </div>
        </div>
      </section>

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

        {/* Quick Actions - Improved Grid */}
        <section className="py-12 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground mb-3 font-title">Herramientas Disponibles</h2>
              <p className="text-muted-foreground text-lg">Explora todas las funciones de WiseGO!</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary cursor-pointer group hover:-translate-y-2" onClick={() => onNavigate("compare")}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500/20 to-blue-600/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <BarChart3 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{t.nav.compare}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.dashboard.compareDesc}</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary cursor-pointer group hover:-translate-y-2" onClick={() => onNavigate("map")}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500/20 to-green-600/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <MapPin className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{t.nav.map}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.dashboard.mapDesc}</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary cursor-pointer group hover:-translate-y-2" onClick={() => onNavigate("chatbots")}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500/20 to-purple-600/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <MessageSquare className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{t.nav.chatbots}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.dashboard.chatbotsDesc}</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary cursor-pointer group hover:-translate-y-2" onClick={() => onNavigate("community")}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-500/20 to-pink-600/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Users className="w-8 h-8 text-pink-600 dark:text-pink-400" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{t.nav.community}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.dashboard.communityDesc}</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary cursor-pointer group hover:-translate-y-2" onClick={() => onNavigate("scholarship-guide")}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-500/20 to-yellow-600/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <FileText className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{t.nav.scholarshipGuide}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Encuentra y aplica a becas disponibles</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary cursor-pointer group hover:-translate-y-2" onClick={() => onNavigate("mentor-match")}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-indigo-500/20 to-indigo-600/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <UserCheck className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{t.nav.mentorMatch}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Conecta con mentores y asesores</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary cursor-pointer group hover:-translate-y-2" onClick={() => onNavigate("cost-simulator")}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-teal-500/20 to-teal-600/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Calculator className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{t.nav.costSimulator}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Calcula el costo total de tu carrera</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary cursor-pointer group hover:-translate-y-2" onClick={() => onNavigate("culture-fit")}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-500/20 to-red-600/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Heart className="w-8 h-8 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{t.nav.cultureFit}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Descubre qué universidades encajan contigo</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

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
      {/* Notifications Sheet */}
      <Sheet open={showNotifications} onOpenChange={setShowNotifications}>
        <SheetContent side="right" className="w-full sm:w-[400px] p-0">
          <NotificationsPanel onClose={() => setShowNotifications(false)} />
        </SheetContent>
      </Sheet>
    </div>
  );
}