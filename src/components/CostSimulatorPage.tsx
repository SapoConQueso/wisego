import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Calculator, DollarSign, Clock } from "lucide-react";
import { WiseGoLogo } from "./WiseGoLogo";
import { ThemeToggle } from "./ThemeToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

interface CostSimulatorPageProps {
  onNavigate: (view: string) => void;
}

interface CostResult {
  tuition: number;
  monthly: number;
  total: number;
  materials: number;
  living?: number;
}

export function CostSimulatorPage({ onNavigate }: CostSimulatorPageProps) {
  const { currentLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);
  const [university, setUniversity] = useState("");
  const [career, setCareer] = useState("");
  const [duration, setDuration] = useState("");
  const [result, setResult] = useState<CostResult | null>(null);

  const calculateCosts = () => {
    // Simulación de cálculo basado en datos reales aproximados
    const baseCosts = {
      public: { tuition: 500, monthly: 150 },
      private: { tuition: 3000, monthly: 1800 }
    };

    const isPrivate = university.includes('Católica') || university.includes('Lima') || university.includes('Pacífico');
    const costs = isPrivate ? baseCosts.private : baseCosts.public;
    
    const years = parseInt(duration) || 5;
    const monthsPerYear = 10; // Ciclo académico típico
    
    const tuition = costs.tuition * years;
    const monthly = costs.monthly * monthsPerYear * years;
    const materials = 500 * years; // Estimado anual
    const total = tuition + monthly + materials;

    setResult({ tuition, monthly, total, materials });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm"
                  onClick={() => onNavigate("dashboard")}
                  className="text-primary-foreground hover:bg-primary-foreground/10">
            <ArrowLeft className="h-5 w-5"/>
          </Button>
          <WiseGoLogo size="sm"/>
          <span className="text-xl font-bold">{t.costSimulator.title}</span>
        </div>
        <ThemeToggle/>
      </header>

      <main className="p-6 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">{t.costSimulator.title}</h1>
          <p className="text-xl text-muted-foreground">{t.costSimulator.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Formulario */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5"/>
                Calcular Costos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-2 block">{t.costSimulator.selectUniversity}</label>
                <Select value={university} onValueChange={setUniversity}>
                  <SelectTrigger>
                    <SelectValue placeholder="Elige una universidad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="san-marcos">Universidad Nacional Mayor de San Marcos</SelectItem>
                    <SelectItem value="catolica">Pontificia Universidad Católica del Perú</SelectItem>
                    <SelectItem value="uni">Universidad Nacional de Ingeniería</SelectItem>
                    <SelectItem value="lima">Universidad de Lima</SelectItem>
                    <SelectItem value="pacifico">Universidad del Pacífico</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">{t.costSimulator.selectCareer}</label>
                <Select value={career} onValueChange={setCareer}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona una carrera" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ingenieria">Ingeniería</SelectItem>
                    <SelectItem value="administracion">Administración</SelectItem>
                    <SelectItem value="medicina">Medicina</SelectItem>
                    <SelectItem value="derecho">Derecho</SelectItem>
                    <SelectItem value="psicologia">Psicología</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">{t.costSimulator.duration} ({t.costSimulator.years})</label>
                <Input 
                  type="number" 
                  placeholder="5" 
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  min="1"
                  max="8"
                />
              </div>

              <Button 
                onClick={calculateCosts} 
                className="w-full"
                disabled={!university || !career || !duration}
              >
                <Calculator className="h-4 w-4 mr-2"/>
                {t.costSimulator.calculate}
              </Button>
            </CardContent>
          </Card>

          {/* Resultados */}
          {result && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5"/>
                  {t.costSimulator.results}
                </CardTitle>
                <CardDescription>{t.costSimulator.estimated}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <p className="text-sm text-muted-foreground">{t.costSimulator.tuition}</p>
                    <p className="text-2xl font-bold text-blue-600">S/{result.tuition.toLocaleString()}</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                    <p className="text-sm text-muted-foreground">{t.costSimulator.monthly}</p>
                    <p className="text-2xl font-bold text-green-600">S/{result.monthly.toLocaleString()}</p>
                  </div>
                </div>

                <div className="text-center p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border-2 border-primary/20">
                  <p className="text-sm text-muted-foreground mb-2">{t.costSimulator.totalCost}</p>
                  <p className="text-4xl font-bold text-primary">S/{result.total.toLocaleString()}</p>
                </div>

                <div>
                  <h4 className="font-medium mb-3">{t.costSimulator.breakdown}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>{t.costSimulator.registration}</span>
                      <span>S/{result.tuition.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Pensiones académicas</span>
                      <span>S/{result.monthly.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t.costSimulator.materials}</span>
                      <span>S/{result.materials.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}