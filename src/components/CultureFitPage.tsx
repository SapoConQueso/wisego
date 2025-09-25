import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Brain, Star, CheckCircle, Users, MapPin, Clock, BookOpen, Trophy, Heart } from "lucide-react";
import { WiseGoLogo } from "./WiseGoLogo";
import { ThemeToggle } from "./ThemeToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

interface CultureFitPageProps {
  onNavigate: (view: string) => void;
}

interface University {
  name: string;
  profile: {
    environment: string[];
    studyStyle: string[];
    campusSize: string[];
    activities: string[];
    diversity: string[];
    support: string[];
    innovation: string[];
    social: string[];
    pressure: string[];
    location: string[];
  };
  baseScore: number;
  reasons: string[];
}

interface UniversityResult extends University {
  match: number;
  reason: string;
}

const questions = [
  { 
    key: 'environment', 
    options: ['competitive', 'collaborative', 'balanced'],
    weights: { competitive: 1, collaborative: 1, balanced: 1 }
  },
  { 
    key: 'studyStyle', 
    options: ['groupStudy', 'individualStudy', 'mixedStudy'],
    weights: { groupStudy: 1, individualStudy: 1, mixedStudy: 1 }
  },
  { 
    key: 'campusSize', 
    options: ['largeCampus', 'mediumCampus', 'smallCampus'],
    weights: { largeCampus: 1, mediumCampus: 1, smallCampus: 1 }
  },
  { 
    key: 'activities', 
    options: ['manyActivities', 'fewActivities', 'academicFocus'],
    weights: { manyActivities: 1, fewActivities: 1, academicFocus: 1 }
  },
  { 
    key: 'diversity', 
    options: ['highDiversity', 'culturalTradition', 'localFocus'],
    weights: { highDiversity: 1, culturalTradition: 1, localFocus: 1 }
  },
  { 
    key: 'support', 
    options: ['intensiveSupport', 'independentLearning', 'peerSupport'],
    weights: { intensiveSupport: 1, independentLearning: 1, peerSupport: 1 }
  },
  { 
    key: 'innovation', 
    options: ['cuttingEdge', 'traditional', 'adaptable'],
    weights: { cuttingEdge: 1, traditional: 1, adaptable: 1 }
  },
  { 
    key: 'social', 
    options: ['veryActive', 'moderate', 'studyFocused'],
    weights: { veryActive: 1, moderate: 1, studyFocused: 1 }
  },
  { 
    key: 'pressure', 
    options: ['highPressure', 'relaxed', 'structured'],
    weights: { highPressure: 1, relaxed: 1, structured: 1 }
  },
  { 
    key: 'location', 
    options: ['urbanCenter', 'residential', 'mixed'],
    weights: { urbanCenter: 1, residential: 1, mixed: 1 }
  }
];

// Base de datos expandida de universidades con perfiles detallados
const universitiesDatabase: University[] = [
  {
    name: 'Universidad Nacional Mayor de San Marcos',
    profile: {
      environment: ['collaborative', 'balanced'],
      studyStyle: ['groupStudy', 'mixedStudy'],
      campusSize: ['largeCampus'],
      activities: ['manyActivities'],
      diversity: ['highDiversity'],
      support: ['peerSupport'],
      innovation: ['traditional', 'adaptable'],
      social: ['veryActive'],
      pressure: ['structured'],
      location: ['urbanCenter']
    },
    baseScore: 75,
    reasons: [
      'Ambiente diverso y colaborativo',
      'Gran tradición académica',
      'Amplia oferta de actividades extracurriculares',
      'Fuerte sentido de comunidad estudiantil'
    ]
  },
  {
    name: 'Pontificia Universidad Católica del Perú',
    profile: {
      environment: ['competitive', 'structured'],
      studyStyle: ['individualStudy', 'mixedStudy'],
      campusSize: ['mediumCampus'],
      activities: ['academicFocus', 'fewActivities'],
      diversity: ['culturalTradition'],
      support: ['intensiveSupport'],
      innovation: ['traditional', 'adaptable'],
      social: ['moderate'],
      pressure: ['highPressure', 'structured'],
      location: ['residential']
    },
    baseScore: 80,
    reasons: [
      'Excelencia académica reconocida',
      'Ambiente estructurado y competitivo',
      'Fuerte apoyo institucional',
      'Tradición e innovación balanceadas'
    ]
  },
  {
    name: 'Universidad de Lima',
    profile: {
      environment: ['balanced', 'competitive'],
      studyStyle: ['mixedStudy'],
      campusSize: ['mediumCampus'],
      activities: ['manyActivities'],
      diversity: ['highDiversity'],
      support: ['peerSupport'],
      innovation: ['cuttingEdge', 'adaptable'],
      social: ['veryActive'],
      pressure: ['structured'],
      location: ['mixed']
    },
    baseScore: 78,
    reasons: [
      'Campus moderno y tecnológico',
      'Balance entre tradición e innovación',
      'Vida estudiantil activa',
      'Enfoque internacional'
    ]
  },
  {
    name: 'Universidad Peruana Cayetano Heredia',
    profile: {
      environment: ['competitive'],
      studyStyle: ['individualStudy', 'academicFocus'],
      campusSize: ['smallCampus'],
      activities: ['academicFocus'],
      diversity: ['localFocus'],
      support: ['intensiveSupport'],
      innovation: ['cuttingEdge'],
      social: ['studyFocused'],
      pressure: ['highPressure'],
      location: ['urbanCenter']
    },
    baseScore: 82,
    reasons: [
      'Excelencia en ciencias de la salud',
      'Ambiente académico intensivo',
      'Investigación de vanguardia',
      'Enfoque especializado'
    ]
  },
  {
    name: 'Universidad del Pacífico',
    profile: {
      environment: ['competitive'],
      studyStyle: ['individualStudy', 'mixedStudy'],
      campusSize: ['smallCampus'],
      activities: ['fewActivities'],
      diversity: ['highDiversity'],
      support: ['independentLearning'],
      innovation: ['cuttingEdge'],
      social: ['moderate'],
      pressure: ['highPressure'],
      location: ['urbanCenter']
    },
    baseScore: 79,
    reasons: [
      'Especialización en negocios y economía',
      'Ambiente competitivo y exigente',
      'Conexiones internacionales',
      'Enfoque práctico y empresarial'
    ]
  },
  {
    name: 'Universidad Nacional de Ingeniería',
    profile: {
      environment: ['competitive'],
      studyStyle: ['individualStudy'],
      campusSize: ['mediumCampus'],
      activities: ['academicFocus'],
      diversity: ['localFocus'],
      support: ['peerSupport'],
      innovation: ['cuttingEdge'],
      social: ['studyFocused'],
      pressure: ['highPressure'],
      location: ['urbanCenter']
    },
    baseScore: 77,
    reasons: [
      'Especialización técnica de alto nivel',
      'Tradición en ingeniería',
      'Enfoque en innovación tecnológica',
      'Ambiente desafiante y exigente'
    ]
  },
  {
    name: 'Universidad de Piura',
    profile: {
      environment: ['collaborative', 'structured'],
      studyStyle: ['mixedStudy'],
      campusSize: ['mediumCampus'],
      activities: ['manyActivities'],
      diversity: ['culturalTradition'],
      support: ['intensiveSupport'],
      innovation: ['traditional', 'adaptable'],
      social: ['veryActive'],
      pressure: ['structured'],
      location: ['residential']
    },
    baseScore: 76,
    reasons: [
      'Ambiente familiar y cercano',
      'Formación integral',
      'Fuerte tradición humanística',
      'Vida universitaria activa'
    ]
  },
  {
    name: 'Universidad Peruana de Ciencias Aplicadas',
    profile: {
      environment: ['balanced'],
      studyStyle: ['mixedStudy'],
      campusSize: ['largeCampus'],
      activities: ['manyActivities'],
      diversity: ['highDiversity'],
      support: ['peerSupport'],
      innovation: ['cuttingEdge'],
      social: ['veryActive'],
      pressure: ['relaxed', 'structured'],
      location: ['mixed']
    },
    baseScore: 74,
    reasons: [
      'Enfoque moderno e innovador',
      'Metodología práctica',
      'Ambiente dinámico y juvenil',
      'Amplia oferta académica'
    ]
  },
  {
    name: 'Universidad Nacional Agraria La Molina',
    profile: {
      environment: ['collaborative'],
      studyStyle: ['groupStudy', 'mixedStudy'],
      campusSize: ['largeCampus'],
      activities: ['manyActivities'],
      diversity: ['localFocus'],
      support: ['peerSupport'],
      innovation: ['adaptable'],
      social: ['veryActive'],
      pressure: ['relaxed'],
      location: ['residential']
    },
    baseScore: 73,
    reasons: [
      'Especialización en ciencias agrarias',
      'Campus amplio y verde',
      'Ambiente colaborativo',
      'Tradición en investigación aplicada'
    ]
  },
  {
    name: 'Universidad de San Martín de Porres',
    profile: {
      environment: ['balanced'],
      studyStyle: ['mixedStudy'],
      campusSize: ['mediumCampus', 'largeCampus'],
      activities: ['manyActivities'],
      diversity: ['highDiversity'],
      support: ['peerSupport'],
      innovation: ['adaptable'],
      social: ['veryActive'],
      pressure: ['relaxed'],
      location: ['mixed']
    },
    baseScore: 70,
    reasons: [
      'Ambiente inclusivo y diverso',
      'Amplia oferta de carreras',
      'Vida estudiantil activa',
      'Enfoque práctico y flexible'
    ]
  }
];

// Función para calcular compatibilidad con variación aleatoria
const calculateCompatibility = (answers: Record<string, string>): UniversityResult[] => {
  return universitiesDatabase.map(university => {
    let score = university.baseScore;
    let matchedCriteria = 0;
    
    // Calcular puntuación basada en respuestas
    Object.entries(answers).forEach(([questionKey, answer]) => {
      if (university.profile[questionKey as keyof typeof university.profile]?.includes(answer)) {
        score += Math.random() * 15 + 5; // Variación entre 5-20 puntos
        matchedCriteria++;
      } else {
        score -= Math.random() * 10; // Penalización variable hasta 10 puntos
      }
    });
    
    // Bonus por múltiples coincidencias
    score += matchedCriteria * 2;
    
    // Añadir variación aleatoria para evitar resultados idénticos
    score += (Math.random() - 0.5) * 10; // ±5 puntos aleatorios
    
    // Limitar entre 0 y 100
    score = Math.max(0, Math.min(100, Math.round(score)));
    
    // Seleccionar razón aleatoria
    const randomReason = university.reasons[Math.floor(Math.random() * university.reasons.length)];
    
    return {
      ...university,
      match: score,
      reason: randomReason
    };
  }).sort((a, b) => b.match - a.match);
};

export function CultureFitPage({ onNavigate }: CultureFitPageProps) {
  const { currentLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [universities, setUniversities] = useState<UniversityResult[]>([]);

  const handleAnswer = (answer: string) => {
    const newAnswers = { ...answers, [questions[currentQuestion].key]: answer };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calcular resultados cuando termine el test
      const results = calculateCompatibility(newAnswers);
      setUniversities(results.slice(0, 5)); // Top 5 universidades
      setShowResults(true);
    }
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setUniversities([]);
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
              {currentQuestion === 0 && <Users className="h-5 w-5"/>}
              {currentQuestion === 1 && <BookOpen className="h-5 w-5"/>}
              {currentQuestion === 2 && <MapPin className="h-5 w-5"/>}
              {currentQuestion === 3 && <Star className="h-5 w-5"/>}
              {currentQuestion === 4 && <Heart className="h-5 w-5"/>}
              {currentQuestion === 5 && <Brain className="h-5 w-5"/>}
              {currentQuestion === 6 && <Trophy className="h-5 w-5"/>}
              {currentQuestion === 7 && <Users className="h-5 w-5"/>}
              {currentQuestion === 8 && <Clock className="h-5 w-5"/>}
              {currentQuestion === 9 && <MapPin className="h-5 w-5"/>}
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