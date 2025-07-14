import { useState } from "react";
import { Button } from "@/components/ui/button";
import { WiseGoLogo } from "./WiseGoLogo";
import { ThemeToggle } from "./ThemeToggle";
import { ArrowLeft, Search, Plus, X, BarChart3, Users, MapPin, DollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface ComparePageProps {
  onNavigate: (view: string) => void;
}

interface Career {
  id: string;
  name: string;
  university: string;
  duration: string;
  avgSalary: string;
  demand: "Alta" | "Media" | "Baja";
  location: string;
  description: string;
}

const careers: Career[] = [
  {
    id: "1",
    name: "Ingeniería de Sistemas",
    university: "Universidad de Lima",
    duration: "5 años",
    avgSalary: "S/ 4,500 - 8,000",
    demand: "Alta",
    location: "Lima",
    description: "Desarrollo de software y sistemas tecnológicos"
  },
  {
    id: "2",
    name: "Medicina",
    university: "Universidad Peruana Cayetano Heredia",
    duration: "7 años",
    avgSalary: "S/ 5,000 - 12,000",
    demand: "Alta",
    location: "Lima",
    description: "Ciencias de la salud y medicina general"
  },
  {
    id: "3",
    name: "Administración",
    university: "Universidad del Pacífico",
    duration: "5 años",
    avgSalary: "S/ 3,500 - 7,000",
    demand: "Media",
    location: "Lima",
    description: "Gestión empresarial y negocios"
  },
  {
    id: "4",
    name: "Psicología",
    university: "Universidad de Lima",
    duration: "5 años",
    avgSalary: "S/ 3,000 - 6,000",
    demand: "Media",
    location: "Lima",
    description: "Estudio del comportamiento humano"
  }
];

export function ComparePage({ onNavigate }: ComparePageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCareers, setSelectedCareers] = useState<Career[]>([]);

  const filteredCareers = careers.filter(career =>
    career.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    career.university.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToComparison = (career: Career) => {
    if (selectedCareers.length < 3 && !selectedCareers.find(c => c.id === career.id)) {
      setSelectedCareers([...selectedCareers, career]);
    }
  };

  const removeFromComparison = (careerId: string) => {
    setSelectedCareers(selectedCareers.filter(c => c.id !== careerId));
  };

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case "Alta": return "bg-green-100 text-green-800 border-green-300";
      case "Media": return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "Baja": return "bg-red-100 text-red-800 border-red-300";
      default: return "bg-gray-100 text-gray-800 border-gray-300";
    }
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
          <span className="text-xl font-bold">Comparar Carreras</span>
        </div>
        <ThemeToggle />
      </header>

      <main className="p-4 space-y-6">
        {/* Search */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Buscar carreras o universidades..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Comparison Panel */}
        {selectedCareers.length > 0 && (
          <div className="max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5" />
                  <span>Comparación de Carreras ({selectedCareers.length}/3)</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {selectedCareers.map((career) => (
                    <div key={career.id} className="border rounded-lg p-4 relative">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFromComparison(career.id)}
                        className="absolute top-2 right-2 h-6 w-6 p-0 hover:bg-destructive hover:text-destructive-foreground"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                      
                      <h3 className="font-semibold mb-2 pr-8">{career.name}</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span>{career.university}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>{career.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <DollarSign className="h-4 w-4 text-muted-foreground" />
                          <span>{career.avgSalary}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-muted-foreground">Duración:</span>
                          <span>{career.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-muted-foreground">Demanda:</span>
                          <Badge className={getDemandColor(career.demand)}>
                            {career.demand}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Available Careers */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Carreras Disponibles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredCareers.map((career) => (
              <Card key={career.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{career.name}</CardTitle>
                      <CardDescription>{career.university}</CardDescription>
                    </div>
                    <Badge className={getDemandColor(career.demand)}>
                      {career.demand}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{career.description}</p>
                  
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duración:</span>
                      <span>{career.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Salario promedio:</span>
                      <span>{career.avgSalary}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Ubicación:</span>
                      <span>{career.location}</span>
                    </div>
                  </div>

                  <Button
                    onClick={() => addToComparison(career)}
                    disabled={selectedCareers.length >= 3 || selectedCareers.some(c => c.id === career.id)}
                    className="w-full"
                    variant={selectedCareers.some(c => c.id === career.id) ? "secondary" : "default"}
                  >
                    {selectedCareers.some(c => c.id === career.id) ? (
                      "Ya agregada"
                    ) : selectedCareers.length >= 3 ? (
                      "Máximo 3 carreras"
                    ) : (
                      <>
                        <Plus className="h-4 w-4 mr-2" />
                        Agregar a comparación
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}