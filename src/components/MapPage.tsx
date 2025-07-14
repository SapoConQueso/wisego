import { useState } from "react";
import { Button } from "@/components/ui/button";
import { WiseGoLogo } from "./WiseGoLogo";
import { ThemeToggle } from "./ThemeToggle";
import { ArrowLeft, MapPin, Search, Filter, Navigation } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
}

const universities: University[] = [
  {
    id: "1",
    name: "Universidad de Lima",
    district: "Santiago de Surco",
    type: "Privada",
    careers: ["Ingeniería", "Administración", "Comunicaciones", "Psicología"],
    rating: 4.5,
    distance: "2.5 km"
  },
  {
    id: "2",
    name: "Universidad Nacional Mayor de San Marcos",
    district: "Lima",
    type: "Pública",
    careers: ["Medicina", "Derecho", "Ingeniería", "Letras"],
    rating: 4.3,
    distance: "5.2 km"
  },
  {
    id: "3",
    name: "Universidad Peruana Cayetano Heredia",
    district: "San Martín de Porres",
    type: "Privada",
    careers: ["Medicina", "Veterinaria", "Psicología", "Enfermería"],
    rating: 4.7,
    distance: "8.1 km"
  },
  {
    id: "4",
    name: "Universidad del Pacífico",
    district: "Jesús María",
    type: "Privada",
    careers: ["Administración", "Economía", "Ingeniería"],
    rating: 4.6,
    distance: "4.3 km"
  },
  {
    id: "5",
    name: "Pontificia Universidad Católica del Perú",
    district: "San Miguel",
    type: "Privada",
    careers: ["Ingeniería", "Derecho", "Arquitectura", "Arte"],
    rating: 4.4,
    distance: "6.8 km"
  }
];

export function MapPage({ onNavigate }: MapPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<string>("all");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("all");

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
      <header className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
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
          <span className="text-xl font-bold">Mapa de Universidades</span>
        </div>
        <ThemeToggle />
      </header>

      <main className="p-4 space-y-6">
        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Buscar universidades o carreras..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex space-x-4">
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Tipo de universidad" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas</SelectItem>
                <SelectItem value="Pública">Públicas</SelectItem>
                <SelectItem value="Privada">Privadas</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
              <SelectTrigger className="w-48">
                <MapPin className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Distrito" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los distritos</SelectItem>
                {districts.map(district => (
                  <SelectItem key={district} value={district}>{district}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-0">
              <div className="h-64 bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                <div className="text-center z-10">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                  <p className="text-lg font-semibold">Mapa Interactivo</p>
                  <p className="text-sm text-muted-foreground">Vista de universidades en Lima</p>
                </div>
                
                {/* Simulated map markers */}
                <div className="absolute top-16 left-20 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <div className="absolute top-32 right-24 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <div className="absolute bottom-20 left-32 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <div className="absolute bottom-24 right-20 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Universities List */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Universidades Cercanas</h2>
            <span className="text-sm text-muted-foreground">
              {filteredUniversities.length} universidades encontradas
            </span>
          </div>

          <div className="space-y-4">
            {filteredUniversities.map((university) => (
              <Card key={university.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{university.name}</CardTitle>
                      <CardDescription className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{university.district}</span>
                      </CardDescription>
                    </div>
                    <div className="flex space-x-2">
                      <Badge className={getTypeColor(university.type)}>
                        {university.type}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <Navigation className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{university.distance}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-2">Carreras destacadas:</p>
                      <div className="flex flex-wrap gap-2">
                        {university.careers.map((career, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {career}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-1">
                        <span className="text-sm text-muted-foreground">Calificación:</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`text-sm ${
                                i < Math.floor(university.rating) 
                                  ? 'text-yellow-400' 
                                  : 'text-gray-300'
                              }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">({university.rating})</span>
                      </div>

                      <div className="space-x-2">
                        <Button variant="outline" size="sm">
                          Ver en mapa
                        </Button>
                        <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                          Más información
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