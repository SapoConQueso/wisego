import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Edit } from "lucide-react";
import { WiseGoLogo } from "./WiseGoLogo";

interface BirthdateFormProps {
  onComplete: () => void;
  onBack: () => void;
}

export function BirthdateForm({ onComplete, onBack }: BirthdateFormProps) {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const months = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const years = Array.from({ length: 80 }, (_, i) => (2024 - i).toString());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (day && month && year) {
      onComplete();
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="flex flex-col items-center mb-8">
        <WiseGoLogo size="lg" className="mb-4" />
        <h1 className="text-4xl font-bold text-primary">WiseGO!</h1>
      </div>
      
      <div className="bg-primary rounded-xl p-6 space-y-6">
        <div className="text-center text-white mb-4">
          <h2 className="text-lg font-semibold mb-2">Añade tu fecha de nacimiento</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-2">
            <Select value={day} onValueChange={setDay}>
              <SelectTrigger className="bg-white border-0 rounded-lg">
                <SelectValue placeholder="Día" />
              </SelectTrigger>
              <SelectContent>
                {days.map((d) => (
                  <SelectItem key={d} value={d}>{d}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={month} onValueChange={setMonth}>
              <SelectTrigger className="bg-white border-0 rounded-lg">
                <SelectValue placeholder="Mes" />
              </SelectTrigger>
              <SelectContent>
                {months.map((m, index) => (
                  <SelectItem key={m} value={(index + 1).toString()}>{m}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={year} onValueChange={setYear}>
              <SelectTrigger className="bg-white border-0 rounded-lg">
                <SelectValue placeholder="Año" />
              </SelectTrigger>
              <SelectContent>
                {years.map((y) => (
                  <SelectItem key={y} value={y}>{y}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2 text-white/80 text-sm">
            <Calendar className="h-4 w-4 text-accent" />
            <span>Es necesario que indique su fecha de nacimiento</span>
          </div>

          <div className="flex items-center space-x-2 text-white text-sm">
            <span>¿Listo para empezar tu búsqueda?</span>
            <Edit className="h-4 w-4 text-accent" />
          </div>
          
          <Button 
            type="submit"
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full font-semibold"
            disabled={!day || !month || !year}
          >
            Registrarse
          </Button>
        </form>
        
        <Button
          variant="ghost" 
          onClick={onBack}
          className="w-full text-white hover:text-white hover:bg-white/10 rounded-full"
        >
          Iniciar Sesión
        </Button>
      </div>
    </div>
  );
}