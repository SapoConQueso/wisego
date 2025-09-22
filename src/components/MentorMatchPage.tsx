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
  specialties: string[];
  availableHours: string;
  bio: string;
  experience: string;
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
    avatar: 'MG',
    specialties: ['Desarrollo Web', 'Machine Learning', 'Bases de Datos'],
    availableHours: 'Lunes a Viernes 2-6 PM',
    bio: 'Desarrolladora Full-Stack con 3 años de experiencia',
    experience: '3 años en tech companies'
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
    avatar: 'CM',
    specialties: ['Marketing Digital', 'Finanzas', 'Emprendimiento'],
    availableHours: 'Sábados y Domingos 10 AM - 2 PM',
    bio: 'Estudiante de último año especializado en marketing',
    experience: 'Prácticas en multinacionales'
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
    avatar: 'AT',
    specialties: ['Estructuras', 'Construcción', 'AutoCAD'],
    availableHours: 'No disponible',
    bio: 'Ingeniera con experiencia en proyectos de infraestructura',
    experience: '2 años en constructoras'
  },
  {
    id: '4',
    name: 'Luis Fernández',
    university: 'Universidad de Lima',
    career: 'Medicina',
    type: 'graduate',
    rating: 4.9,
    sessions: 52,
    points: 280,
    available: true,
    avatar: 'LF',
    specialties: ['Medicina Interna', 'Investigación', 'Residencia'],
    availableHours: 'Martes y Jueves 7-9 PM',
    bio: 'Médico residente especializado en medicina interna',
    experience: 'Residente en Hospital Nacional'
  },
  {
    id: '5',
    name: 'Patricia Vega',
    university: 'Universidad Peruana de Ciencias Aplicadas',
    career: 'Psicología',
    type: 'student',
    rating: 4.6,
    sessions: 15,
    points: 85,
    available: true,
    avatar: 'PV',
    specialties: ['Psicología Clínica', 'Terapia', 'Investigación'],
    availableHours: 'Lunes, Miércoles y Viernes 4-6 PM',
    bio: 'Estudiante de psicología con interés en terapia cognitiva',
    experience: 'Prácticas en centros de salud mental'
  },
  {
    id: '6',
    name: 'Roberto Silva',
    university: 'Universidad Católica Santa María',
    career: 'Derecho',
    type: 'graduate',
    rating: 4.8,
    sessions: 41,
    points: 215,
    available: true,
    avatar: 'RS',
    specialties: ['Derecho Corporativo', 'Contratos', 'Litigios'],
    availableHours: 'Fines de semana 9 AM - 1 PM',
    bio: 'Abogado especializado en derecho empresarial',
    experience: '4 años en estudios jurídicos'
  },
  {
    id: '7',
    name: 'Elena Castro',
    university: 'Universidad Nacional de Trujillo',
    career: 'Arquitectura',
    type: 'student',
    rating: 4.5,
    sessions: 18,
    points: 95,
    available: true,
    avatar: 'EC',
    specialties: ['Diseño Urbano', 'Sostenibilidad', 'BIM'],
    availableHours: 'Tardes de 3-5 PM',
    bio: 'Estudiante apasionada por la arquitectura sostenible',
    experience: 'Proyectos académicos destacados'
  },
  {
    id: '8',
    name: 'Diego Morales',
    university: 'Universidad Nacional de Ingeniería',
    career: 'Ingeniería Industrial',
    type: 'graduate',
    rating: 4.7,
    sessions: 34,
    points: 170,
    available: false,
    avatar: 'DM',
    specialties: ['Procesos', 'Lean Manufacturing', 'Calidad'],
    availableHours: 'No disponible',
    bio: 'Ingeniero con experiencia en optimización de procesos',
    experience: '3 años en industria manufacturera'
  }
];

export function MentorMatchPage({ onNavigate }: MentorMatchPageProps) {
  const { currentLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);
  const [selectedCareer, setSelectedCareer] = useState<string>("all");
  const [selectedUniversity, setSelectedUniversity] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedAvailability, setSelectedAvailability] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMentors = mockMentors.filter(mentor => {
    const matchesCareer = selectedCareer === "all" || !selectedCareer || mentor.career.toLowerCase().includes(selectedCareer.toLowerCase());
    const matchesUniversity = selectedUniversity === "all" || !selectedUniversity || mentor.university.toLowerCase().includes(selectedUniversity.toLowerCase());
    const matchesType = selectedType === "all" || mentor.type === selectedType;
    const matchesAvailability = selectedAvailability === "all" || 
      (selectedAvailability === "available" && mentor.available) ||
      (selectedAvailability === "unavailable" && !mentor.available);
    const matchesSearch = !searchQuery || 
      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.specialties.some(spec => spec.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCareer && matchesUniversity && matchesType && matchesAvailability && matchesSearch;
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
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
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
                    <SelectItem value="psicologia">Psicología</SelectItem>
                    <SelectItem value="arquitectura">Arquitectura</SelectItem>
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
                    <SelectItem value="upc">UPC</SelectItem>
                    <SelectItem value="trujillo">UN Trujillo</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Tipo</label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Tipo de mentor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="student">Estudiantes</SelectItem>
                    <SelectItem value="graduate">Egresados</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Disponibilidad</label>
                <Select value={selectedAvailability} onValueChange={setSelectedAvailability}>
                  <SelectTrigger>
                    <SelectValue placeholder="Disponibilidad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="available">Disponibles</SelectItem>
                    <SelectItem value="unavailable">No disponibles</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Buscar</label>
                <Input 
                  placeholder="Nombre o especialidad..."
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
                       <p className="text-xs text-muted-foreground mb-2">{mentor.bio}</p>
                       <div className="flex flex-wrap gap-1 mb-2">
                         {mentor.specialties.map((specialty, idx) => (
                           <Badge key={idx} variant="secondary" className="text-xs">
                             {specialty}
                           </Badge>
                         ))}
                       </div>
                       <p className="text-xs text-muted-foreground">
                         <strong>Experiencia:</strong> {mentor.experience}
                       </p>
                       <p className="text-xs text-muted-foreground">
                         <strong>Horarios:</strong> {mentor.availableHours}
                       </p>
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