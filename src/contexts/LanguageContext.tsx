import React, { createContext, useContext, useEffect, useState } from 'react';

export type Language = 'es' | 'en' | 'qu' | 'ay';

export interface LanguageConfig {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
}

// Made it easier to add/remove languages - just modify this array
export const supportedLanguages: LanguageConfig[] = [
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'qu', name: 'Quechua', nativeName: 'Runasimi', flag: '🏔️' },
  { code: 'ay', name: 'Aymara', nativeName: 'Aymar aru', flag: '⛰️' }
];

interface LanguageContextType {
  currentLanguage: Language;
  changeLanguage: (lang: Language) => void;
  supportedLanguages: LanguageConfig[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('es');

  // Initialize language from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('wisego-language') as Language;
    if (savedLanguage && supportedLanguages.find(l => l.code === savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    } else {
      // Try to detect browser language
      const browserLang = navigator.language.split('-')[0] as Language;
      if (supportedLanguages.find(l => l.code === browserLang)) {
        setCurrentLanguage(browserLang);
      } else {
        setCurrentLanguage('es'); // Default fallback
      }
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    if (supportedLanguages.find(l => l.code === lang)) {
      setCurrentLanguage(lang);
      localStorage.setItem('wisego-language', lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ 
      currentLanguage, 
      changeLanguage, 
      supportedLanguages 
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}