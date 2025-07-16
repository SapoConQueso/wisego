import { Button } from "@/components/ui/button";
import { WiseGoLogo } from "./WiseGoLogo";
import { ThemeToggle } from "./ThemeToggle";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

interface AboutPageProps {
  onBack: () => void;
}

export function AboutPage({ onBack }: AboutPageProps) {
  const { currentLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);
  const partners = [
    { name: "Karina Candia" },
    { name: "Ramírez Gastón" },
    { name: "Gonzalo Begazo" },
    { name: "Score" },
    { name: "SMMUN" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onBack}
            className="text-white hover:bg-white/10 p-2"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <WiseGoLogo size="sm" />
          <span className="text-xl font-bold">WiseGO!</span>
        </div>
        
        <ThemeToggle />
      </header>


      {/* Content */}
      <main className="p-4 space-y-6">
        {/* ¿Por qué elegir WiseGo? */}
        <section>
          <h2 className="text-lg font-bold mb-3">
            {t.about.whyChoose.replace('WiseGo', '')} <span className="text-accent">WiseGo</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {t.about.whyChooseText}
          </p>
        </section>

        {/* Nuestra Visión */}
        <section className="bg-primary text-white rounded-xl p-4">
          <h3 className="text-lg font-bold mb-3">NUESTRA VISIÓN</h3>
          <p className="text-sm leading-relaxed">
            Ser la plataforma líder en orientación educativa impulsada por inteligencia artificial, 
            revolucionando la forma en que los estudiantes descubren su potencial y toman decisiones 
            sobre su futuro académico y profesional. Aspiramos a crear un mundo donde cada persona 
            pueda encontrar su camino ideal hacia el éxito, eliminando las barreras de información 
            y facilitando el acceso a oportunidades educativas de calidad.
          </p>
        </section>

        {/* Nuestra Misión */}
        <section className="bg-accent text-accent-foreground rounded-xl p-4">
          <h3 className="text-lg font-bold mb-3">NUESTRA MISIÓN</h3>
          <p className="text-sm leading-relaxed">
            Empoderar a los estudiantes con herramientas inteligentes y personalizadas que les 
            permitan tomar decisiones informadas sobre su educación superior. Utilizamos la 
            inteligencia artificial de manera ética y responsable para analizar aptitudes, 
            intereses y objetivos, ofreciendo recomendaciones precisas y actualizadas sobre 
            carreras y universidades que se alineen con el perfil único de cada usuario.
          </p>
        </section>

        {/* Nuestros Socios Clave */}
        <section>
          <h3 className="text-lg font-bold mb-4 text-center">
            NUESTROS<br />
            <span className="text-accent">SOCIOS CLAVE</span>
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {partners.map((partner, index) => (
              <div key={index} className="text-center bg-muted rounded-lg p-3">
                <p className="text-sm font-medium">{partner.name}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}