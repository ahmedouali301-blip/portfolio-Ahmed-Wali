import Reveal from "./Reveal";
import { languages as baseLanguages } from "../data/education";
import { useLanguage } from "../context/LanguageContext";
import "./Languages.css";

export default function Languages() {
  const { t } = useLanguage();
  const languagesList = t("certifications.languages") || baseLanguages;

  return (
    <Reveal className="languages">
      <h3 className="languages__title">{t("certifications.languagesTitle")}</h3>
      <ul className="languages__list">
        {languagesList.map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
    </Reveal>
  );
}
