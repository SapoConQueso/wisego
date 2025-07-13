import { Button } from "@/components/ui/button";
import { WiseGoLogo } from "./WiseGoLogo";
import { ThemeToggle } from "./ThemeToggle";
import { ArrowLeft } from "lucide-react";

interface AboutPageProps {
  onBack: () => void;
}

export function AboutPage({ onBack }: AboutPageProps) {
  const partners = [
    { name: "Ramírez", image: "/api/placeholder/60/60" },
    { name: "SMMUN", image: "/api/placeholder/60/60" },
    { name: "SCORE", image: "/api/placeholder/60/60" },
    { name: "PRIDE", image: "/api/placeholder/60/60" }
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

      {/* Hero Image */}
      <div className="h-48 bg-gradient-to-b from-green-400 to-green-600 relative overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 400 200" className="absolute inset-0">
          <defs>
            <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#87CEEB" />
              <stop offset="100%" stopColor="#98FB98" />
            </linearGradient>
          </defs>
          <rect width="100%" height="60%" fill="url(#skyGradient)" />
          <path d="M0,120 Q100,100 200,120 T400,120 L400,200 L0,200 Z" fill="#9ACD32" />
          <path d="M0,140 Q150,120 300,140 T400,140 L400,200 L0,200 Z" fill="#228B22" />
          <ellipse cx="50" cy="40" rx="20" ry="15" fill="white" opacity="0.8" />
          <ellipse cx="150" cy="30" rx="25" ry="18" fill="white" opacity="0.7" />
          <ellipse cx="300" cy="50" rx="18" ry="12" fill="white" opacity="0.9" />
        </svg>
      </div>

      {/* Content */}
      <main className="p-4 space-y-6">
        {/* ¿Por qué elegir WiseGo? */}
        <section>
          <h2 className="text-lg font-bold mb-3">
            ¿Por qué elegir <span className="text-accent">WiseGo</span>?
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt 
            nostrud amet est dolore exercitation enim irure ad minim. Irure magna veniam 
            minim nulla adipiscing. Lorem aliqua culpa fugiat est elit elit dolor tempor culpa. 
            Aliqua culpa consequat mollit. Irure Lorem occaecat lorem ullamco consectetur velit 
            adipiscing esse nulla aliquip adipiscing aute. Adipiscing culpa consectetur mollit 
            adipiscing esse sint elit aliquip dolore tempor amet aliqua culpa consectetur velit 
            adipiscing elit dolor enim culpa dolor.
          </p>
        </section>

        {/* Nuestra Visión */}
        <section className="bg-primary text-white rounded-xl p-4">
          <h3 className="text-lg font-bold mb-3">NUESTRA VISIÓN</h3>
          <p className="text-sm leading-relaxed">
            Ser Lorem officia aute anim incididunt tempor fugiat commodo anim magna veniam 
            commodo exercitation fugiat mollit elit tempor sunt officia anim irure occaecat 
            lorem ipsum ipsum deserunt labore cupidatat culpa aliquip dolore officia anim culpa.
          </p>
        </section>

        {/* Nuestra Misión */}
        <section className="bg-accent text-accent-foreground rounded-xl p-4">
          <h3 className="text-lg font-bold mb-3">NUESTRA MISIÓN</h3>
          <p className="text-sm leading-relaxed">
            Sit Lorem officia aute anim incididunt tempor fugiat commodo anim magna 
            veniam commodo magna tempor anim ipsum voluptate nulla nulla esse duis culpa 
            tempor amet aliqua culpa cupidatat culpa anim culpa.
          </p>
        </section>

        {/* Nuestros Socios Clave */}
        <section>
          <h3 className="text-lg font-bold mb-4 text-center">
            NUESTROS<br />
            <span className="text-accent">SOCIOS CLAVE</span>
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {partners.map((partner, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-2 flex items-center justify-center">
                  <span className="text-xs font-bold">{partner.name}</span>
                </div>
                <p className="text-xs font-medium">{partner.name}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}