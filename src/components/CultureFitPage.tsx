import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Brain, Star, CheckCircle, GraduationCap } from "lucide-react";
import { WiseGoLogo } from "./WiseGoLogo";
import { ThemeToggle } from "./ThemeToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

interface CultureFitPageProps {
  onNavigate: (view: string) => void;
}

const universityQuestions = [
  { key: 'environment', options: ['competitive', 'collaborative'] },
  { key: 'clubs', options: ['clubs', 'studyOnly'] },
  { key: 'campus', options: ['largeCampus', 'smallCampus'] },
  { key: 'culture', options: ['diversity', 'tradition'] },
  { key: 'location', options: ['urbanCampus', 'suburbanCampus'] },
  { key: 'classSize', options: ['smallClasses', 'largeClasses'] },
  { key: 'research', options: ['researchFocus', 'practicalFocus'] },
  { key: 'socialLife', options: ['activeSocial', 'quietStudy'] }
];

const vocationalQuestions = [
  { key: 'workStyle', options: ['teamWork', 'independentWork'] },
  { key: 'problemSolving', options: ['analyticalThinking', 'creativeThinking'] },
  { key: 'communication', options: ['peopleOriented', 'taskOriented'] },
  { key: 'learningStyle', options: ['handsOn', 'theoretical'] },
  { key: 'workEnvironment', options: ['officeBased', 'fieldBased'] },
  { key: 'schedule', options: ['structuredHours', 'flexibleHours'] },
  { key: 'growth', options: ['leadershipRole', 'specialistRole'] },
  { key: 'impact', options: ['socialImpact', 'economicImpact'] }
];

const universities = [
  { name: 'Universidad Nacional Mayor de San Marcos', match: 85, reason: 'Ambiente diverso y colaborativo, gran variedad de clubs estudiantiles' },
  { name: 'Pontificia Universidad Católica del Perú', match: 78, reason: 'Tradición académica sólida con enfoque en excelencia' },
  { name: 'Universidad de Lima', match: 72, reason: 'Campus moderno con balance entre tradición e innovación' },
  { name: 'Universidad Nacional de Ingeniería', match: 68, reason: 'Enfoque técnico especializado con fuerte tradición en investigación' },
  { name: 'Universidad Peruana de Ciencias Aplicadas', match: 75, reason: 'Ambiente moderno e innovador con enfoque práctico' }
];

const careers = [
  { name: 'Ingeniería de Sistemas', match: 92, reason: 'Perfecta para pensamiento analítico y trabajo independiente' },
  { name: 'Administración de Empresas', match: 88, reason: 'Ideal para liderazgo y orientación a resultados económicos' },
  { name: 'Psicología', match: 85, reason: 'Excelente para orientación social y trabajo con personas' },
  { name: 'Medicina', match: 90, reason: 'Combina impacto social con trabajo especializado' },
  { name: 'Arquitectura', match: 83, reason: 'Perfecta para pensamiento creativo y trabajo práctico' }
];

export function CultureFitPage({ onNavigate }: CultureFitPageProps) {
  const { currentLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);
  const [mode, setMode] = useState<'select' | 'university' | 'vocational'>('select');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const currentQuestions = mode === 'university' ? universityQuestions : vocationalQuestions;
  const currentResults = mode === 'university' ? universities : careers;

  const handleAnswer = (answer: string) => {
    const newAnswers = { ...answers, [currentQuestions[currentQuestion].key]: answer };
    setAnswers(newAnswers);

    if (currentQuestion < currentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetTest = () => {
    setMode('select');
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  const startTest = (selectedMode: 'university' | 'vocational') => {
    setMode(selectedMode);
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  if (showResults) {
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
            <span className="text-xl font-bold">{t.cultureFit.title}</span>
          </div>
          <ThemeToggle/>
        </header>

        <main className="p-6 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4"/>
            <h1 className="text-4xl font-bold text-primary mb-2">{t.cultureFit.results}</h1>
            <p className="text-xl text-muted-foreground">
              {mode === 'university' ? t.cultureFit.universityCompatibility : t.cultureFit.careerCompatibility}
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-center">
              {mode === 'university' ? t.cultureFit.topUniversities : t.cultureFit.topCareers}
            </h2>
            
            {currentResults.map((result, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{result.name}</CardTitle>
                      <CardDescription className="mt-2">{result.reason}</CardDescription>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">{result.match}%</div>
                      <Badge variant="outline">
                        {mode === 'university' ? t.cultureFit.compatibility : t.cultureFit.careerMatch}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}

            <div className="text-center">
              <Button onClick={resetTest} variant="outline">
                {t.cultureFit.retakeTest}
              </Button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (mode === 'select') {
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
            <span className="text-xl font-bold">{t.cultureFit.title}</span>
          </div>
          <ThemeToggle/>
        </header>

        <main className="p-6 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary mb-2">{t.cultureFit.title}</h1>
            <p className="text-xl text-muted-foreground">{t.cultureFit.selectMode}</p>
          </div>

          <div className="grid gap-6 max-w-lg mx-auto">
            <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => startTest('university')}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-primary"/>
                  {t.cultureFit.universityMode}
                </CardTitle>
                <CardDescription>
                  {t.cultureFit.universityModeDesc}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => startTest('vocational')}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-6 w-6 text-primary"/>
                  {t.cultureFit.vocationalMode}
                </CardTitle>
                <CardDescription>
                  {t.cultureFit.vocationalModeDesc}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </main>
      </div>
    );
  }

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
          <span className="text-xl font-bold">
            {mode === 'university' ? t.cultureFit.universityMode : t.cultureFit.vocationalMode}
          </span>
        </div>
        <ThemeToggle/>
      </header>

      <main className="p-6 max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">
            {mode === 'university' ? t.cultureFit.universityMode : t.cultureFit.vocationalMode}
          </h1>
          <p className="text-xl text-muted-foreground">
            {mode === 'university' ? t.cultureFit.universitySubtitle : t.cultureFit.vocationalSubtitle}
          </p>
          <div className="mt-4">
            <div className="text-sm text-muted-foreground">
              Pregunta {currentQuestion + 1} de {currentQuestions.length}
            </div>
            <div className="w-full bg-muted rounded-full h-2 mt-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all"
                style={{ width: `${((currentQuestion + 1) / currentQuestions.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5"/>
              {t.cultureFit[`${mode}Question${currentQuestion + 1}` as keyof typeof t.cultureFit] as string}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {currentQuestions[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full h-auto p-4 text-left justify-start"
                onClick={() => handleAnswer(option)}
              >
                {t.cultureFit[option as keyof typeof t.cultureFit] as string}
              </Button>
            ))}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}