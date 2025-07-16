import { useState, useCallback } from 'react';

export type Language = 'es' | 'en' | 'qu' | 'ay';

export interface LanguageConfig {
  code: Language;
  name: string;
  nativeName: string;
}

export const languages: LanguageConfig[] = [
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'qu', name: 'Quechua', nativeName: 'Runasimi' },
  { code: 'ay', name: 'Aymara', nativeName: 'Aymar aru' }
];

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('es');

  const changeLanguage = useCallback((lang: Language) => {
    setCurrentLanguage(lang);
    // Store in localStorage for persistence
    localStorage.setItem('wisego-language', lang);
  }, []);

  // Load from localStorage on initialization
  const initializeLanguage = useCallback(() => {
    const stored = localStorage.getItem('wisego-language') as Language;
    if (stored && languages.find(l => l.code === stored)) {
      setCurrentLanguage(stored);
    }
  }, []);

  return {
    currentLanguage,
    changeLanguage,
    initializeLanguage,
    languages
  };
};