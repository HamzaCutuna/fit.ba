'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'bs' | 'en';

interface Translations {
  [key: string]: any;
}

interface LanguageContextType {
  language: Language;
  translations: Translations;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('bs');
  const [translations, setTranslations] = useState<Translations>({});
  const [isLoading, setIsLoading] = useState(true);

  // Load translations from JSON files
  const loadTranslations = async (lang: Language) => {
    try {
      setIsLoading(true);
      const response = await fetch(`/locales/${lang}.json`);
      if (!response.ok) {
        throw new Error(`Failed to load translations for ${lang}`);
      }
      const data = await response.json();
      setTranslations(data);
    } catch (error) {
      console.error('Error loading translations:', error);
      // Fallback to empty object if loading fails
      setTranslations({});
    } finally {
      setIsLoading(false);
    }
  };

  // Initialize language from localStorage or default to 'bs'
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    const initialLanguage = savedLanguage && ['bs', 'en'].includes(savedLanguage) ? savedLanguage : 'bs';
    setLanguageState(initialLanguage);
    loadTranslations(initialLanguage);
  }, []);

  // Set language and persist to localStorage
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    loadTranslations(lang);
  };

  // Translation function with nested key support (e.g., 'common.home')
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Return the key itself if translation is not found
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  const value: LanguageContextType = {
    language,
    translations,
    setLanguage,
    t,
    isLoading,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Convenience hook for just translations
export const useTranslation = () => {
  const { t, isLoading } = useLanguage();
  return { t, isLoading };
}; 