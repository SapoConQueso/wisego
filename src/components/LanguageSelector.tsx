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
      <SelectTrigger className="w-36 bg-accent/10 border-accent/30 text-foreground hover:bg-accent/20">
        <Languages className="h-4 w-4 mr-2" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="bg-card border border-border">
        {supportedLanguages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            <span className="flex items-center gap-2">
              <span>{lang.flag}</span>
              <span className="font-medium">{lang.nativeName}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}