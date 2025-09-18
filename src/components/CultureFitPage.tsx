import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Brain, Star, CheckCircle } from "lucide-react";
import { WiseGoLogo } from "./WiseGoLogo";
import { ThemeToggle } from "./ThemeToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

interface CultureFitPageProps {
  onNavigate: (view: string) => void;
}

const questions = [
  { key: 'environment', options: ['competitive', 'collaborative'] },
  { key: 'clubs', options: ['clubs', 'studyOnly'] },
  { key: 'campus', options: ['largeCampus', 'smallCampus'] },
  { key: 'culture', options: ['diversity', 'tradition'] }
];

const universities = [
  { name: 'Universidad Nacional Mayor de San Marcos', match: 85, reason: 'Ambiente diverso y colaborativo, gran variedad de clubs estudiantiles' },
  { name: 'Pontificia Universidad Católica del Perú', match: 78, reason: 'Tradición académica sólida con enfoque en excelencia' },
  { name: 'Universidad de Lima', match: 72, reason: 'Campus moderno con balance entre tradición e innovación' }
];

export function CultureFitPage({ onNavigate }: CultureFitPageProps) {
  const { currentLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer: string) => {
    const newAnswers = { ...answers, [questions[currentQuestion].key]: answer };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetTest = () => {
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
            <p className="text-xl text-muted-foreground">{t.cultureFit.compatibility}</p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-center">{t.cultureFit.topMatches}</h2>
            
            {universities.map((uni, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{uni.name}</CardTitle>
                      <CardDescription className="mt-2">{uni.reason}</CardDescription>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">{uni.match}%</div>
                      <Badge variant="outline">{t.cultureFit.compatibility}</Badge>
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
          <p className="text-xl text-muted-foreground">{t.cultureFit.subtitle}</p>
          <div className="mt-4">
            <div className="text-sm text-muted-foreground">Pregunta {currentQuestion + 1} de {questions.length}</div>
            <div className="w-full bg-muted rounded-full h-2 mt-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5"/>
              {t.cultureFit[`question${currentQuestion + 1}` as keyof typeof t.cultureFit] as string}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
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