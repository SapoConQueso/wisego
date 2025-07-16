import { useState } from "react";
import { Button } from "@/components/ui/button";
import { WiseGoLogo } from "./WiseGoLogo";
import { ThemeToggle } from "./ThemeToggle";
import { ArrowLeft, Search, Filter, MapPin, Clock, DollarSign, Star, Crown, Lock, Navigation, Building, Eye, Route } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { MapComponent } from "./MapComponent";

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
    district: "Surco",
    type: "Privada",
    careers: ["Ingeniería", "Administración", "Comunicaciones", "Psicología"],
    rating: 4.5,
    distance: "5.2 km",
    phone: "(01) 437-6767",
    website: "www.ulima.edu.pe",
    description: "Universidad privada con excelencia académica y moderna infraestructura."
  },
  {
    id: "2",
    name: "Universidad Nacional Mayor de San Marcos",
    district: "Lima",
    type: "Pública",
    careers: ["Medicina", "Ingeniería", "Derecho", "Ciencias"],
    rating: 4.7,
    distance: "8.1 km",
    phone: "(01) 619-7000",
    website: "www.unmsm.edu.pe",
    description: "La universidad más antigua de América, con tradición y prestigio académico."
  },
  {
    id: "3",
    name: "Pontificia Universidad Católica del Perú",
    district: "San Miguel",
    type: "Privada",
    careers: ["Derecho", "Economía", "Ingeniería", "Arte"],
    rating: 4.8,
    distance: "12.5 km",
    phone: "(01) 626-2000",
    website: "www.pucp.edu.pe",
    description: "Universidad católica reconocida por su calidad académica y formación integral."
  },
  {
    id: "4",
    name: "Universidad del Pacífico",
    district: "Jesús María",
    type: "Privada",
    careers: ["Administración", "Economía", "Ingeniería Industrial"],
    rating: 4.6,
    distance: "7.8 km",
    phone: "(01) 219-0100",
    website: "www.up.edu.pe",
    description: "Especializada en ciencias empresariales con alto nivel académico."
  },
  {
    id: "5",
    name: "Universidad Peruana Cayetano Heredia",
    district: "San Martín de Porres",
    type: "Privada",
    careers: ["Medicina", "Veterinaria", "Psicología", "Enfermería"],
    rating: 4.4,
    distance: "15.3 km",
    phone: "(01) 319-0000",
    website: "www.upch.edu.pe",
    description: "Universidad líder en ciencias de la salud con investigación de vanguardia."
  }
];

export function MapPage({ onNavigate }: MapPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [districtFilter, setDistrictFilter] = useState<string>("all");
  const [selectedUniversity, setSelectedUniversity] = useState<University | null>(null);
  const [isPremium] = useState(false);
  const { toast } = useToast();

  const handlePremiumAction = (action: string) => {
    toast({
      title: "Función Premium",
      description: `${action} está disponible solo para usuarios premium. ¡Suscríbete para acceder!`,
      variant: "default",
    });
  };

  const filteredUniversities = universities.filter(university => {
    const matchesSearch = university.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         university.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         university.careers.some(career => career.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesType = typeFilter === "all" || university.type === typeFilter;
    const matchesDistrict = districtFilter === "all" || university.district === districtFilter;
    
    return matchesSearch && matchesType && matchesDistrict;
  });

  const getTypeColor = (type: string) => {
    return type === "Pública" ? "bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-900 dark:text-emerald-200" 
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
          <span className="text-xl font-bold">Mapa Universitario</span>
        </div>
        <ThemeToggle />
      </header>

      <main className="p-4 space-y-6">
        {/* Premium Banner */}
        {!isPremium && (
          <div className="max-w-6xl mx-auto">
            <Card className="bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Crown className="h-6 w-6 text-accent" />
                    <div>
                      <h3 className="font-bold text-lg">¡Desbloquea todas las funciones premium!</h3>
                      <p className="text-sm text-muted-foreground">
                        Accede a rutas optimizadas, comparaciones avanzadas y más información detallada
                      </p>
                    </div>
                  </div>
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                    Obtener Premium
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
                placeholder="Buscar universidades, carreras o distritos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-2">
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos los tipos</SelectItem>
                  <SelectItem value="Pública">Pública</SelectItem>
                  <SelectItem value="Privada">Privada</SelectItem>
                </SelectContent>
              </Select>

              <Select value={districtFilter} onValueChange={setDistrictFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Distrito" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
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

        {/* Interactive Map */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Mapa Interactivo de Universidades</h2>
          <MapComponent />
        </div>

        {/* Universities List */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">Universidades Encontradas</h2>
            <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
              {filteredUniversities.length} resultados
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
                        {university.name}
                        <Badge className={getTypeColor(university.type)}>
                          {university.type}
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
                  <p className="text-muted-foreground mb-4">{university.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        Carreras Principales
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {university.careers.map((career, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {career}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold">Información de Contacto</h4>
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
                      Ver Detalles
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Mostrar ruta - función libre
                        window.open(`https://maps.google.com/maps?q=${university.name}`, '_blank');
                      }}
                      className="flex items-center gap-1 hover:bg-accent hover:text-accent-foreground"
                    >
                      <Route className="h-4 w-4" />
                      Cómo Llegar
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