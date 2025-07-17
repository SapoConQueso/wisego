import { useState } from "react";
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
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

interface MapPageProps {
  onNavigate: (view: string) => void;
}

interface University {
  id: string;
  nameKey: string;
  district: string;
  typeKey: 'public' | 'private';
  careerKeys: string[];
  rating: number;
  distance: string;
  phone: string;
  website: string;
  descriptionKey: string;
}

// Definir las universidades con datos multiidioma
const getUniversities = (t: any) => {
  const universities: University[] = [
    {
      id: "1",
      nameKey: "Universidad de Lima",
      district: "Surco",
      typeKey: "private",
      careerKeys: ["engineering", "administration", "communications", "psychology"],
      rating: 4.5,
      distance: "5.2 km",
      phone: "(01) 437-6767",
      website: "www.ulima.edu.pe",
      descriptionKey: "Universidad privada con excelencia académica y moderna infraestructura."
    },
    {
      id: "2",
      nameKey: "Universidad Nacional Mayor de San Marcos",
      district: "Lima",
      typeKey: "public",
      careerKeys: ["medicine", "engineering", "law", "sciences"],
      rating: 4.7,
      distance: "8.1 km",
      phone: "(01) 619-7000",
      website: "www.unmsm.edu.pe",
      descriptionKey: "La universidad más antigua de América, con tradición y prestigio académico."
    },
    {
      id: "3",
      nameKey: "Pontificia Universidad Católica del Perú",
      district: "San Miguel",
      typeKey: "private",
      careerKeys: ["law", "economics", "engineering", "art"],
      rating: 4.8,
      distance: "12.5 km",
      phone: "(01) 626-2000",
      website: "www.pucp.edu.pe",
      descriptionKey: "Universidad católica reconocida por su calidad académica y formación integral."
    },
    {
      id: "4",
      nameKey: "Universidad del Pacífico",
      district: "Jesús María",
      typeKey: "private",
      careerKeys: ["administration", "economics", "industrialEngineering"],
      rating: 4.6,
      distance: "7.8 km",
      phone: "(01) 219-0100",
      website: "www.up.edu.pe",
      descriptionKey: "Especializada en ciencias empresariales con alto nivel académico."
    },
    {
      id: "5",
      nameKey: "Universidad Peruana Cayetano Heredia",
      district: "San Martín de Porres",
      typeKey: "private",
      careerKeys: ["medicine", "veterinary", "psychology", "nursing"],
      rating: 4.4,
      distance: "15.3 km",
      phone: "(01) 319-0000",
      website: "www.upch.edu.pe",
      descriptionKey: "Universidad líder en ciencias de la salud con investigación de vanguardia."
    }
  ];

  return universities;
};

export function MapPage({ onNavigate }: MapPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [districtFilter, setDistrictFilter] = useState<string>("all");
  const [selectedUniversity, setSelectedUniversity] = useState<University | null>(null);
  const [isPremium] = useState(false);
  const { toast } = useToast();
  const { currentLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);

  const universities = getUniversities(t);

  const handlePremiumAction = (action: string) => {
    toast({
      title: t.map.premiumFeature,
      description: `${action} ${t.map.premiumMessage}`,
      variant: "default",
    });
  };

  const filteredUniversities = universities.filter(university => {
    const nameTranslated = university.nameKey;
    const careersTranslated = university.careerKeys.map(key => t.map[key as keyof typeof t.map] || key);
    const typeTranslated = university.typeKey === 'public' ? t.map.public : t.map.private;
    
    const matchesSearch = nameTranslated.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         university.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         careersTranslated.some(career => career.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesType = typeFilter === "all" || 
                       (typeFilter === "Pública" && university.typeKey === 'public') ||
                       (typeFilter === "Privada" && university.typeKey === 'private');
    const matchesDistrict = districtFilter === "all" || university.district === districtFilter;
    
    return matchesSearch && matchesType && matchesDistrict;
  });

  const getTypeColor = (typeKey: 'public' | 'private') => {
    return typeKey === 'public' ? "bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-900 dark:text-emerald-200" 
                                : "bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-900 dark:text-blue-200";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-accent text-primary-foreground p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => onNavigate("dashboard")}
            className="text-primary-foreground hover:bg-primary-foreground/10"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <WiseGoLogo size="sm" />
          <span className="text-xl font-bold">{t.map.title}</span>
        </div>
        <div className="flex items-center space-x-2">
          <LanguageSelector />
          <ThemeToggle />
        </div>
      </header>

      <main className="p-4 space-y-6">
        {/* Premium Banner */}
        {!isPremium && (
          <div className="max-w-6xl mx-auto">
            <Card className="bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Crown className="h-8 w-8 text-accent" />
                    <div>
                      <h3 className="font-bold text-xl text-card-foreground">{t.map.premiumTitle}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {t.map.premiumDescription}
                      </p>
                    </div>
                  </div>
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-6 py-3 text-lg font-semibold rounded-xl shadow-lg">
                    {t.map.premiumButton}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Search and Filters */}
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder={t.map.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-2">
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder={t.map.typeLabel} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t.map.allTypes}</SelectItem>
                  <SelectItem value="Pública">{t.map.public}</SelectItem>
                  <SelectItem value="Privada">{t.map.private}</SelectItem>
                </SelectContent>
              </Select>

              <Select value={districtFilter} onValueChange={setDistrictFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder={t.map.districtLabel} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t.map.allDistricts}</SelectItem>
                  <SelectItem value="Lima">Lima</SelectItem>
                  <SelectItem value="Surco">Surco</SelectItem>
                  <SelectItem value="San Miguel">San Miguel</SelectItem>
                  <SelectItem value="Jesús María">Jesús María</SelectItem>
                  <SelectItem value="San Martín de Porres">San Martín de Porres</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Hero Section for Map */}
        <div className="max-w-6xl mx-auto text-center mb-8">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 border border-border shadow-lg">
            <h1 className="text-3xl sm:text-4xl font-bold font-title mb-4 text-card-foreground">
              {t.map.mapTitle}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.map.mapSubtitle}
            </p>
          </div>
        </div>

        {/* Interactive Map */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-card-foreground">{t.map.interactiveMap}</h2>
            <MapComponent />
          </div>
        </div>

        {/* University Locations Section */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <MapPin className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-card-foreground">{t.map.universityLocations}</h2>
            </div>
            <p className="text-muted-foreground">
              {t.map.findLocation}
            </p>
          </div>
        </div>

        {/* Universities List */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">{t.map.universitiesFound}</h2>
            <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
              {filteredUniversities.length} {t.map.results}
            </span>
          </div>

          <div className="space-y-6">
            {filteredUniversities.map((university, index) => (
              <Card 
                key={university.id} 
                className="hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedUniversity(university)}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-primary flex items-center gap-2">
                        {university.nameKey}
                        <Badge className={getTypeColor(university.typeKey)}>
                          {university.typeKey === 'public' ? t.map.public : t.map.private}
                        </Badge>
                      </CardTitle>
                      <CardDescription className="mt-2 flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {university.district}
                        </span>
                        <span className="flex items-center gap-1">
                          <Navigation className="h-4 w-4" />
                          {university.distance}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          {university.rating}
                        </span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4">{university.descriptionKey}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        {t.map.careers}
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {university.careerKeys.map((careerKey, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {t.map[careerKey as keyof typeof t.map] || careerKey}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold">{t.map.contact}</h4>
                      <p className="text-sm text-muted-foreground">{university.phone}</p>
                      <p className="text-sm text-primary">{university.website}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Mostrar información detallada - función libre
                        setSelectedUniversity(university);
                      }}
                      className="flex items-center gap-1 hover:bg-primary hover:text-primary-foreground"
                    >
                      <Eye className="h-4 w-4" />
                      {t.map.viewDetails}
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Mostrar ruta - función libre
                        window.open(`https://maps.google.com/maps?q=${university.nameKey}`, '_blank');
                      }}
                      className="flex items-center gap-1 hover:bg-accent hover:text-accent-foreground"
                    >
                      <Route className="h-4 w-4" />
                      {t.map.howToGet}
                    </Button>

                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (isPremium) {
                          onNavigate("university-tour");
                        } else {
                          handlePremiumAction(t.map.viewInside);
                        }
                      }}
                      className={`flex items-center gap-1 ${isPremium ? 'bg-blue-100 text-blue-800 border-blue-300' : 'bg-wisego-orange/10 text-wisego-orange border-wisego-orange'} hover:bg-blue-200 transition-all duration-200`}
                    >
                      <Eye className="h-4 w-4" />
                      {t.map.viewInside}
                      {!isPremium && <Lock className="h-3 w-3" />}
                    </Button>

                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (isPremium) {
                          onNavigate("university-tour");
                        } else {
                          handlePremiumAction(t.map.virtualTour);
                        }
                      }}
                      className={`flex items-center gap-1 ${isPremium ? 'bg-green-100 text-green-800 border-green-300' : 'bg-wisego-orange/10 text-wisego-orange border-wisego-orange'} hover:bg-green-200 transition-all duration-200`}
                    >
                      <Eye className="h-4 w-4" />
                      {t.map.virtualTour}
                      {!isPremium && <Lock className="h-3 w-3" />}
                    </Button>
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