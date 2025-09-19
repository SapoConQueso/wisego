import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Video, MessageCircle, Star, GraduationCap, Users, Award } from "lucide-react";
import { WiseGoLogo } from "./WiseGoLogo";
import { ThemeToggle } from "./ThemeToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface MentorMatchPageProps {
  onNavigate: (view: string) => void;
}

interface Mentor {
  id: string;
  name: string;
  university: string;
  career: string;
  type: 'student' | 'graduate';
  rating: number;
  sessions: number;
  points: number;
  available: boolean;
  avatar: string;
}

const mockMentors: Mentor[] = [
  {
    id: '1',
    name: 'María González',
    university: 'Universidad Nacional Mayor de San Marcos',
    career: 'Ingeniería de Sistemas',
    type: 'graduate',
    rating: 4.9,
    sessions: 47,
    points: 240,
    available: true,
    avatar: 'MG'
  },
  {
    id: '2', 
    name: 'Carlos Mendoza',
    university: 'Pontificia Universidad Católica del Perú',
    career: 'Administración de Empresas',
    type: 'student',
    rating: 4.7,
    sessions: 23,
    points: 115,
    available: true,
    avatar: 'CM'
  },
  {
    id: '3',
    name: 'Ana Torres',
    university: 'Universidad Nacional de Ingeniería',
    career: 'Ingeniería Civil',
    type: 'graduate',
    rating: 4.8,
    sessions: 38,
    points: 190,
    available: false,
    avatar: 'AT'
  }
];

export function MentorMatchPage({ onNavigate }: MentorMatchPageProps) {
  const { currentLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);
  const [selectedCareer, setSelectedCareer] = useState<string>("all");
  const [selectedUniversity, setSelectedUniversity] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMentors = mockMentors.filter(mentor => {
    const matchesCareer = selectedCareer === "all" || !selectedCareer || mentor.career.toLowerCase().includes(selectedCareer.toLowerCase());
    const matchesUniversity = selectedUniversity === "all" || !selectedUniversity || mentor.university.toLowerCase().includes(selectedUniversity.toLowerCase());
    const matchesSearch = !searchQuery || mentor.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCareer && matchesUniversity && matchesSearch;
  });

  const handleRequestSession = (mentorId: string, sessionType: 'chat' | 'video') => {
    // Aquí iría la lógica para solicitar sesión
    console.log(`Requesting ${sessionType} session with mentor ${mentorId}`);
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
          <span className="text-xl font-bold">{t.mentorMatch.title}</span>
        </div>
        <ThemeToggle/>
      </header>

      <main className="p-6 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">{t.mentorMatch.title}</h1>
          <p className="text-xl text-muted-foreground">{t.mentorMatch.subtitle}</p>
        </div>

        {/* Filtros */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5"/>
              {t.mentorMatch.findMentor}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">{t.mentorMatch.career}</label>
                <Select value={selectedCareer} onValueChange={setSelectedCareer}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona carrera" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas las carreras</SelectItem>
                    <SelectItem value="ingenieria">Ingeniería</SelectItem>
                    <SelectItem value="administracion">Administración</SelectItem>
                    <SelectItem value="medicina">Medicina</SelectItem>
                    <SelectItem value="derecho">Derecho</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">{t.mentorMatch.university}</label>
                <Select value={selectedUniversity} onValueChange={setSelectedUniversity}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona universidad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas las universidades</SelectItem>
                    <SelectItem value="san marcos">San Marcos</SelectItem>
                    <SelectItem value="catolica">Católica</SelectItem>
                    <SelectItem value="uni">UNI</SelectItem>
                    <SelectItem value="lima">Universidad de Lima</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Buscar por nombre</label>
                <Input 
                  placeholder="Buscar mentor..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lista de mentores */}
        <div className="grid gap-6">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary"/>
            {t.mentorMatch.mentorDirectory}
          </h2>
          
          {filteredMentors.length === 0 ? (
            <Card>
              <CardContent className="text-center py-12">
                <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4"/>
                <p className="text-muted-foreground">{t.mentorMatch.noMentors}</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMentors.map(mentor => (
                <Card key={mentor.id} className={mentor.available ? "border-green-200" : "border-gray-200 opacity-75"}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={`/api/placeholder/48/48`} />
                          <AvatarFallback>{mentor.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{mentor.name}</h3>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-current"/>
                            <span className="text-sm">{mentor.rating}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <Badge variant={mentor.type === 'graduate' ? 'default' : 'secondary'}>
                          {mentor.type === 'graduate' ? 'Egresado' : 'Estudiante'}
                        </Badge>
                        <Badge variant={mentor.available ? 'outline' : 'destructive'} className="text-xs">
                          {mentor.available ? t.mentorMatch.available : 'No disponible'}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <p className="text-sm"><strong>{t.mentorMatch.university}:</strong> {mentor.university}</p>
                      <p className="text-sm"><strong>{t.mentorMatch.career}:</strong> {mentor.career}</p>
                      <p className="text-sm flex items-center gap-2">
                        <Award className="h-4 w-4 text-primary"/>
                        {mentor.points} {t.mentorMatch.points} • {mentor.sessions} sesiones
                      </p>
                    </div>
                    
                    {mentor.available && (
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">{t.mentorMatch.sessionTypes}</h4>
                        <div className="flex gap-2">
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="flex-1 text-xs"
                            onClick={() => handleRequestSession(mentor.id, 'chat')}
                          >
                            <MessageCircle className="h-3 w-3 mr-1"/>
                            {t.mentorMatch.quickChat}
                          </Button>
                          <Button 
                            size="sm" 
                            className="flex-1 text-xs"
                            onClick={() => handleRequestSession(mentor.id, 'video')}
                          >
                            <Video className="h-3 w-3 mr-1"/>
                            {t.mentorMatch.videoSession}
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}