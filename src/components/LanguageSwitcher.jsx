import { useLanguage } from "../context/LanguageContext";
import "./LanguageSwitcher.css";

export default function LanguageSwitcher({ className = "" }) {
  const { lang, setLanguage } = useLanguage();

  return (
    <div className={`lang-switcher ${className}`} role="group" aria-label="Language selection">
      <button
        type="button"
        className={`lang-switcher__btn ${lang === "en" ? "is-active" : ""}`}
        onClick={() => setLanguage("en")}
        aria-pressed={lang === "en"}
        aria-label="Switch language to English"
      >
        <span className="lang-switcher__flag" aria-hidden="true">🇬🇧</span>
        <span className="lang-switcher__code">EN</span>
      </button>

      <span className="lang-switcher__divider" aria-hidden="true">|</span>

      <button
        type="button"
        className={`lang-switcher__btn ${lang === "fr" ? "is-active" : ""}`}
        onClick={() => setLanguage("fr")}
        aria-pressed={lang === "fr"}
        aria-label="Changer la langue en Français"
      >
        <span className="lang-switcher__flag" aria-hidden="true">🇫🇷</span>
        <span className="lang-switcher__code">FR</span>
      </button>
    </div>
  );
}
