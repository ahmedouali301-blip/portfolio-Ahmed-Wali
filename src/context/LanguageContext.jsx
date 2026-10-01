import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "../data/translations";

const LanguageContext = createContext();

const STORAGE_KEY = "portfolio_lang";

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved === "fr" ? "fr" : "en";
    } catch {
      return "en";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore storage write errors
    }
    document.documentElement.lang = lang;
  }, [lang]);

  const setLanguage = (newLang) => {
    if (newLang === "en" || newLang === "fr") {
      setLangState(newLang);
    }
  };

  const toggleLanguage = () => {
    setLangState((prev) => (prev === "en" ? "fr" : "en"));
  };

  // Utility helper to safely get nested translation strings (e.g. t("hero.title"))
  const t = (path) => {
    const keys = path.split(".");
    let current = translations[lang] || translations.en;
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        // Fallback to English if translation key is missing
        let fallback = translations.en;
        for (const k of keys) {
          fallback = fallback ? fallback[k] : undefined;
        }
        return fallback !== undefined ? fallback : path;
      }
    }
    return current;
  };

  const value = {
    lang,
    setLanguage,
    toggleLanguage,
    t,
    dict: translations[lang] || translations.en,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
