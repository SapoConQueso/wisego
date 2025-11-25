import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

export function LanguageSelector() {
  const { currentLanguage, changeLanguage, supportedLanguages } = useLanguage();
  const t = getTranslation(currentLanguage);

  return (
    <Select value={currentLanguage} onValueChange={changeLanguage}>
      <SelectTrigger className="w-40 bg-card border-border hover:border-primary hover:bg-accent transition-all">
        <div className="flex items-center gap-2 text-foreground">
          <Languages className="h-4 w-4 text-primary" />
          <SelectValue className="text-foreground" />
        </div>
      </SelectTrigger>
      <SelectContent className="bg-card border border-border">
        {supportedLanguages.map((lang) => (
          <SelectItem 
            key={lang.code} 
            value={lang.code}
            className="hover:bg-accent cursor-pointer transition-colors text-foreground"
          >
            <span className="flex items-center gap-2">
              <span className="text-xl">{lang.flag}</span>
              <span className="font-medium">{lang.nativeName}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}