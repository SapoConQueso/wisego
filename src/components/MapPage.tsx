import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { WiseGoLogo } from "./WiseGoLogo";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSelector } from "./LanguageSelector";
import { ArrowLeft, Search, Filter, MapPin, Clock, DollarSign, Star, Crown, Lock, Navigation, Building, Eye, Route } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { MapComponent } from "./MapComponent";
import { useLanguage } from "@/hooks/useLanguage";
import { getTranslation } from "@/lib/translations";

interface MapPageProps {
  onNavigate: (view: string) => void;
}

interface University {
  id: string;
  name: string;
  district: string;
  type: "Pública" | "Privada";
  careers: string[];
  rating: number;
  distance: string;
  phone: string;
  website: string;
  description: string;
}

const universities: University[] = [
  {
    id: "1",
    name: "Universidad de Lima",
    district: "Santiago de Surco",
    type: "Privada",
    careers: ["Ingeniería de Sistemas", "Administración", "Comunicaciones", "Psicología", "Derecho", "Arquitectura"],
    rating: 4.5,
    distance: "2.5 km",
    phone: "(01) 437-6767",
    website: "www.ulima.edu.pe",
    description: "Universidad privada reconocida por su excelencia académica y moderna infraestructura."
  },
  {
    id: "2",
    name: "Universidad Nacional Mayor de San Marcos",
    district: "Lima",
    type: "Pública",
    careers: ["Medicina", "Derecho", "Ingeniería", "Letras", "Economía", "Ciencias Sociales"],
    rating: 4.3,
    distance: "5.2 km",
    phone: "(01) 619-7000",
    website: "www.unmsm.edu.pe",
    description: "La universidad más antigua de América, fundada en 1551, líder en investigación y formación académica."
  },
  {
    id: "3",
    name: "Universidad Peruana Cayetano Heredia",
    district: "San Martín de Porres",
    type: "Privada",
    careers: ["Medicina", "Veterinaria", "Psicología", "Enfermería", "Odontología", "Biología"],
    rating: 4.7,
    distance: "8.1 km",
    phone: "(01) 319-0000",
    website: "www.upch.edu.pe",
    description: "Universidad especializada en ciencias de la salud con alto prestigio nacional e internacional."
  },
  {
    id: "4",
    name: "Universidad del Pacífico",
    district: "Jesús María",
    type: "Privada",
    careers: ["Administración", "Economía", "Ingeniería Empresarial", "Contabilidad"],
    rating: 4.6,
    distance: "4.3 km",
    phone: "(01) 219-0100",
    website: "www.up.edu.pe",
    description: "Universidad líder en ciencias empresariales y económicas del Perú."
  },
  {
    id: "5",
    name: "Pontificia Universidad Católica del Perú",
    district: "San Miguel",
    type: "Privada",
    careers: ["Ingeniería", "Derecho", "Arquitectura", "Arte", "Ciencias Sociales", "Letras"],
    rating: 4.4,
    distance: "6.8 km",
    phone: "(01) 626-2000",
    website: "www.pucp.edu.pe",
    description: "Universidad católica con tradición en formación integral y responsabilidad social."
  }
];

export function MapPage({ onNavigate }: MapPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<string>("all");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("all");
  const [selectedUniversity, setSelectedUniversity] = useState<University | null>(null);
  const [isPremium, setIsPremium] = useState(false); // Simular estado premium
  const [isDemoMode, setIsDemoMode] = useState(true); // Simular modo demo
  const { toast } = useToast();
  const { currentLanguage, initializeLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);

  useEffect(() => {
    initializeLanguage();
  }, [initializeLanguage]);

  const handlePremiumAction = (action: string) => {
    toast({
      title: t.map.premiumFeature,
      description: `${action} ${t.map.premiumMessage}`,
      variant: "destructive",
    });
  };

  const districts = [...new Set(universities.map(u => u.district))];

  const filteredUniversities = universities.filter(university => {
    const matchesSearch = university.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         university.careers.some(career => career.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesType = filterType === "all" || university.type === filterType;
    const matchesDistrict = selectedDistrict === "all" || university.district === selectedDistrict;
    
    return matchesSearch && matchesType && matchesDistrict;
  });

  const getTypeColor = (type: string) => {
    return type === "Pública" 
      ? "bg-blue-100 text-blue-800 border-blue-300" 
      : "bg-purple-100 text-purple-800 border-purple-300";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-accent text-primary-foreground p-4 flex items-center justify-between animate-fade-in">
        <div className="flex items-center space-x-3">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => onNavigate("dashboard")}
            className="text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-200 hover:scale-105"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <WiseGoLogo size="sm" />
          <span className="text-xl font-title font-bold gradient-text">{t.map.title}</span>
        </div>
        <div className="flex items-center space-x-2">
          <LanguageSelector />
          <ThemeToggle />
        </div>
      </header>

      <main className="p-4 space-y-6">
        {/* Premium Banner */}
        {!isPremium && !isDemoMode && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <Card className="border-wisego-orange bg-gradient-to-r from-wisego-orange/5 to-primary/5">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Crown className="h-6 w-6 text-wisego-orange" />
                    <div>
                      <h3 className="font-title font-bold text-primary">{t.map.premiumTitle}</h3>
                      <p className="text-sm text-muted-foreground">{t.map.premiumDescription}</p>
                    </div>
                  </div>
                  <Button 
                    className="bg-wisego-orange hover:bg-wisego-orange/90 text-white"
                    onClick={() => onNavigate("profile")}
                  >
                    <Crown className="h-4 w-4 mr-2" />
                    {t.map.subscribe}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto space-y-4 animate-slide-up">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 group-focus-within:text-primary transition-colors" />
            <Input
              type="text"
              placeholder={t.map.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 font-body transition-all duration-300 focus:ring-2 focus:ring-primary/20 hover:shadow-md"
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-48 hover-lift">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Tipo de universidad" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t.map.allTypes}</SelectItem>
                <SelectItem value="Pública">{t.map.public}</SelectItem>
                <SelectItem value="Privada">{t.map.private}</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
              <SelectTrigger className="w-48 hover-lift">
                <MapPin className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Distrito" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t.map.allDistricts}</SelectItem>
                {districts.map(district => (
                  <SelectItem key={district} value={district}>{district}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Interactive Map */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center font-title gradient-text">{t.map.interactiveMap}</h2>
          <MapComponent />
        </div>

        {/* Universities List */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-title font-bold gradient-text">{t.map.universitiesFound}</h2>
            <span className="text-sm font-subtitle text-muted-foreground bg-muted px-3 py-1 rounded-full">
              {filteredUniversities.length} {t.map.results}
            </span>
          </div>

          <div className="space-y-6">
            {filteredUniversities.map((university, index) => (
              <Card 
                key={university.id} 
                className="hover-lift cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedUniversity(university)}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-title font-bold text-primary hover:text-accent transition-colors">
                        {university.name}
                      </CardTitle>
                      <CardDescription className="flex items-center space-x-2 mt-2 font-subtitle">
                        <MapPin className="h-4 w-4 text-accent" />
                        <span>{university.district}</span>
                      </CardDescription>
                      <p className="text-sm font-body text-muted-foreground mt-2">{university.description}</p>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <Badge className={`${getTypeColor(university.type)} font-subtitle`}>
                        {university.type}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <Navigation className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-body text-muted-foreground">{university.distance}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-subtitle font-medium text-muted-foreground mb-3">{t.map.careers}</p>
                      <div className="flex flex-wrap gap-2">
                        {university.careers.map((career, index) => (
                          <Badge 
                            key={index} 
                            variant="outline" 
                            className="text-xs font-body hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-pointer"
                          >
                            {career}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-subtitle text-muted-foreground">{t.map.rating}</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`text-lg transition-colors ${
                                i < Math.floor(university.rating) 
                                  ? 'text-yellow-400' 
                                  : 'text-gray-300'
                              }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                        <span className="text-sm font-body text-muted-foreground">({university.rating})</span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-subtitle text-muted-foreground">{t.map.contact}</span>
                        <span className="text-sm font-body">{university.phone}</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t">
                      <span className="text-sm font-body text-muted-foreground">{university.website}</span>
                      <div className="flex flex-wrap gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                        >
                          <Route className="h-4 w-4 mr-1" />
                          {t.map.howToGet}
                        </Button>
                        <Button 
                          size="sm" 
                          className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-200"
                        >
                          <Building className="h-4 w-4 mr-1" />
                          {t.map.viewDetails}
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className={`${isPremium || isDemoMode ? 'bg-blue-100 text-blue-800 border-blue-300' : 'bg-wisego-orange/10 text-wisego-orange border-wisego-orange'} hover:bg-blue-200 transition-all duration-200`}
                          onClick={() => {
                            if (isPremium || isDemoMode) {
                              onNavigate("university-tour");
                            } else {
                              handlePremiumAction(t.map.viewInside);
                            }
                          }}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          {t.map.viewInside}
                          {!isPremium && !isDemoMode && <Lock className="h-3 w-3 ml-1" />}
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className={`${isPremium || isDemoMode ? 'bg-green-100 text-green-800 border-green-300' : 'bg-wisego-orange/10 text-wisego-orange border-wisego-orange'} hover:bg-green-200 transition-all duration-200`}
                          onClick={() => {
                            if (isPremium || isDemoMode) {
                              onNavigate("university-tour");
                            } else {
                              handlePremiumAction(t.map.virtualTour);
                            }
                          }}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          {t.map.virtualTour}
                          {!isPremium && !isDemoMode && <Lock className="h-3 w-3 ml-1" />}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}