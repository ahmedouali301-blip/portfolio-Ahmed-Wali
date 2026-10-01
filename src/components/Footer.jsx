import { ArrowUp } from "lucide-react";
import Monogram from "./Monogram";
import { site } from "../data/site";
import { useLanguage } from "../context/LanguageContext";
import "./Footer.css";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Monogram size={32} />
          <p>
            © {new Date().getFullYear()} {site.name}. {t("footer.copyright")}
          </p>
        </div>
        <a className="footer__top" href="#home">
          {t("footer.backToTop")}
          <ArrowUp size={16} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
