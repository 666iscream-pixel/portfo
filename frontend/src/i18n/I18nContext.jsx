import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { translations, LANGS } from "./translations";

const I18nContext = createContext(null);
const STORAGE_KEY = "iz_lang";

const detectInitial = () => {
  if (typeof window === "undefined") return "en";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved && translations[saved]) return saved;
  const nav = (window.navigator.language || "en").slice(0, 2).toLowerCase();
  if (translations[nav]) return nav;
  return "en";
};

export const I18nProvider = ({ children }) => {
  const [lang, setLangState] = useState(detectInitial);

  const setLang = useCallback((next) => {
    if (!translations[next]) return;
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore storage errors */
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = translations[lang].meta.htmlLang;
    }
  }, [lang]);

  const value = useMemo(
    () => ({ lang, setLang, t: translations[lang], langs: LANGS }),
    [lang, setLang]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
};

export const useT = () => useI18n().t;
