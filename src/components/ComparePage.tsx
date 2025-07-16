import { useState } from "react";
import { Button } from "@/components/ui/button";
import { WiseGoLogo } from "./WiseGoLogo";
import { ThemeToggle } from "./ThemeToggle";
import { ArrowLeft, Search, Plus, X, BarChart3, Users, MapPin, DollarSign, Star, Clock, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

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
  difficulty: number; // 1-10
  jobOpportunities: number; // 1-10
  salaryRange: number; // 1-10
  workLifeBalance: number; // 1-10
  prestige: number; // 1-10
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
    description: "Desarrollo de software y sistemas tecnológicos",
    difficulty: 8,
    jobOpportunities: 9,
    salaryRange: 8,
    workLifeBalance: 7,
    prestige: 7
  },
  {
    id: "2",
    name: "Medicina",
    university: "Universidad Peruana Cayetano Heredia",
    duration: "7 años",
    avgSalary: "S/ 5,000 - 12,000",
    demand: "Alta",
    location: "Lima",
    description: "Ciencias de la salud y medicina general",
    difficulty: 10,
    jobOpportunities: 8,
    salaryRange: 9,
    workLifeBalance: 4,
    prestige: 10
  },
  {
    id: "3",
    name: "Administración",
    university: "Universidad del Pacífico",
    duration: "5 años",
    avgSalary: "S/ 3,500 - 7,000",
    demand: "Media",
    location: "Lima",
    description: "Gestión empresarial y negocios",
    difficulty: 6,
    jobOpportunities: 7,
    salaryRange: 6,
    workLifeBalance: 8,
    prestige: 6
  },
  {
    id: "4",
    name: "Psicología",
    university: "Universidad de Lima",
    duration: "5 años",
    avgSalary: "S/ 3,000 - 6,000",
    demand: "Media",
    location: "Lima",
    description: "Estudio del comportamiento humano",
    difficulty: 7,
    jobOpportunities: 6,
    salaryRange: 5,
    workLifeBalance: 9,
    prestige: 6
  },
  {
    id: "5",
    name: "Derecho",
    university: "Pontificia Universidad Católica del Perú",
    duration: "6 años",
    avgSalary: "S/ 4,000 - 10,000",
    demand: "Media",
    location: "Lima",
    description: "Ciencias jurídicas y legislación",
    difficulty: 8,
    jobOpportunities: 7,
    salaryRange: 7,
    workLifeBalance: 6,
    prestige: 8
  },
  {
    id: "6",
    name: "Arquitectura",
    university: "Universidad de Lima",
    duration: "5 años",
    avgSalary: "S/ 3,500 - 8,000",
    demand: "Media",
    location: "Lima",
    description: "Diseño y construcción de espacios",
    difficulty: 7,
    jobOpportunities: 6,
    salaryRange: 6,
    workLifeBalance: 7,
    prestige: 7
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
    if (selectedCareers.length < 5 && !selectedCareers.find(c => c.id === career.id)) {
      setSelectedCareers([...selectedCareers, career]);
    }
  };

  const removeFromComparison = (careerId: string) => {
    setSelectedCareers(selectedCareers.filter(c => c.id !== careerId));
  };

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case "Alta": return "bg-green-100 text-green-800 border-green-300 dark:bg-green-900 dark:text-green-200";
      case "Media": return "bg-yellow-100 text-yellow-800 border-yellow-300 dark:bg-yellow-900 dark:text-yellow-200";
      case "Baja": return "bg-red-100 text-red-800 border-red-300 dark:bg-red-900 dark:text-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-300 dark:bg-gray-800 dark:text-gray-200";
    }
  };

  const getRadarData = () => {
    const criteria = [
      { attribute: 'Dificultad', key: 'difficulty' },
      { attribute: 'Oportunidades', key: 'jobOpportunities' },
      { attribute: 'Salario', key: 'salaryRange' },
      { attribute: 'Balance Vida', key: 'workLifeBalance' },
      { attribute: 'Prestigio', key: 'prestige' }
    ];

    return criteria.map(criterion => {
      const dataPoint: any = { attribute: criterion.attribute };
      selectedCareers.forEach((career, index) => {
        dataPoint[`career${index}`] = career[criterion.key as keyof Career];
      });
      return dataPoint;
    });
  };

  const chartConfig = {
    career0: {
      label: selectedCareers[0]?.name || "Carrera 1",
      color: "hsl(var(--primary))",
    },
    career1: {
      label: selectedCareers[1]?.name || "Carrera 2", 
      color: "hsl(var(--accent))",
    },
    career2: {
      label: selectedCareers[2]?.name || "Carrera 3",
      color: "hsl(var(--muted-foreground))",
    },
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
          <span className="text-xl font-title font-bold gradient-text">Comparación Inteligente</span>
        </div>
        <ThemeToggle />
      </header>

      <main className="p-4 space-y-6">
        {/* Search */}
        <div className="max-w-6xl mx-auto animate-slide-up">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 group-focus-within:text-primary transition-colors" />
            <Input
              type="text"
              placeholder="Buscar carreras, universidades, especialidades..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 font-body transition-all duration-300 focus:ring-2 focus:ring-primary/20 hover:shadow-md"
            />
          </div>
        </div>

        {/* Comparison Panel */}
        {selectedCareers.length > 0 && (
          <div className="max-w-7xl mx-auto animate-scale-in">
            <Card className="hover-lift">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
                <CardTitle className="flex items-center space-x-2 font-title">
                  <BarChart3 className="h-6 w-6 text-primary" />
                  <span className="gradient-text text-2xl">Análisis Comparativo ({selectedCareers.length}/5)</span>
                </CardTitle>
                <CardDescription className="font-subtitle">
                  Visualización avanzada de métricas clave para tomar la mejor decisión
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                {selectedCareers.length >= 2 && (
                  <div className="mb-8">
                    <h4 className="text-lg font-title font-semibold mb-4 text-center">Gráfico Radial Comparativo</h4>
                    <div className="h-96 w-full">
                      <ChartContainer config={chartConfig}>
                        <ResponsiveContainer width="100%" height="100%">
                          <RadarChart data={getRadarData()}>
                            <PolarGrid className="stroke-muted" />
                            <PolarAngleAxis 
                              dataKey="attribute" 
                              className="fill-muted-foreground text-sm font-subtitle"
                            />
                            <PolarRadiusAxis 
                              angle={90} 
                              domain={[0, 10]} 
                              className="fill-muted-foreground"
                            />
                            {selectedCareers.map((_, index) => (
                              <Radar
                                key={index}
                                name={selectedCareers[index]?.name}
                                dataKey={`career${index}`}
                                stroke={chartConfig[`career${index}` as keyof typeof chartConfig]?.color}
                                fill={chartConfig[`career${index}` as keyof typeof chartConfig]?.color}
                                fillOpacity={0.2}
                                strokeWidth={2}
                              />
                            ))}
                            <ChartTooltip content={<ChartTooltipContent />} />
                          </RadarChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                  {selectedCareers.map((career, index) => (
                    <div 
                      key={career.id} 
                      className="border-2 rounded-xl p-6 relative bg-gradient-to-br from-card to-muted/20 hover-lift"
                      style={{ 
                        borderColor: chartConfig[`career${index}` as keyof typeof chartConfig]?.color,
                        animationDelay: `${index * 0.2}s`
                      }}
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFromComparison(career.id)}
                        className="absolute top-3 right-3 h-8 w-8 p-0 hover:bg-destructive hover:text-destructive-foreground transition-all duration-200 hover:scale-110"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                      
                      <h3 className="font-title font-bold text-lg mb-3 pr-12 text-primary">{career.name}</h3>
                      <div className="space-y-3 text-sm font-body">
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-accent" />
                          <span className="font-subtitle">{career.university}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-accent" />
                          <span>{career.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <DollarSign className="h-4 w-4 text-accent" />
                          <span className="font-medium">{career.avgSalary}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-accent" />
                          <span>{career.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Award className="h-4 w-4 text-accent" />
                          <Badge className={getDemandColor(career.demand)}>
                            {career.demand}
                          </Badge>
                        </div>

                        {/* Metrics */}
                        <div className="pt-3 border-t space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-subtitle text-xs">Dificultad:</span>
                            <div className="flex">
                              {[...Array(10)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`h-3 w-3 ${i < career.difficulty ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                                />
                              ))}
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="font-subtitle text-xs">Oportunidades:</span>
                            <div className="flex">
                              {[...Array(10)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`h-3 w-3 ${i < career.jobOpportunities ? 'text-green-400 fill-current' : 'text-gray-300'}`} 
                                />
                              ))}
                            </div>
                          </div>
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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-title font-bold mb-6 gradient-text text-center">Explora Todas las Carreras</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCareers.map((career, index) => (
              <Card 
                key={career.id} 
                className="hover-lift cursor-pointer animate-fade-in bg-gradient-to-br from-card to-muted/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-lg font-title font-bold text-primary hover:text-accent transition-colors">
                        {career.name}
                      </CardTitle>
                      <CardDescription className="font-subtitle text-muted-foreground mt-1">
                        {career.university}
                      </CardDescription>
                    </div>
                    <Badge className={`${getDemandColor(career.demand)} font-subtitle`}>
                      {career.demand}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-body text-muted-foreground mb-4 leading-relaxed">{career.description}</p>
                  
                  <div className="space-y-3 text-sm mb-6">
                    <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                      <span className="font-subtitle text-muted-foreground flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        Duración:
                      </span>
                      <span className="font-medium">{career.duration}</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                      <span className="font-subtitle text-muted-foreground flex items-center">
                        <DollarSign className="h-4 w-4 mr-2" />
                        Salario:
                      </span>
                      <span className="font-medium">{career.avgSalary}</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                      <span className="font-subtitle text-muted-foreground flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        Ubicación:
                      </span>
                      <span className="font-medium">{career.location}</span>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="text-center p-2 bg-primary/10 rounded">
                      <div className="text-xs font-subtitle text-muted-foreground">Prestigio</div>
                      <div className="font-bold text-primary">{career.prestige}/10</div>
                    </div>
                    <div className="text-center p-2 bg-accent/10 rounded">
                      <div className="text-xs font-subtitle text-muted-foreground">Balance</div>
                      <div className="font-bold text-accent">{career.workLifeBalance}/10</div>
                    </div>
                  </div>

                  <Button
                    onClick={() => addToComparison(career)}
                    disabled={selectedCareers.length >= 5 || selectedCareers.some(c => c.id === career.id)}
                    className="w-full transition-all duration-300 hover:shadow-lg"
                    variant={selectedCareers.some(c => c.id === career.id) ? "secondary" : "default"}
                  >
                    {selectedCareers.some(c => c.id === career.id) ? (
                      <>
                        <X className="h-4 w-4 mr-2" />
                        Ya agregada
                      </>
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