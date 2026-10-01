import { Award, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Languages from "./Languages";
import { certifications } from "../data/certifications";
import { useLanguage } from "../context/LanguageContext";
import "./Certifications.css";

export default function Certifications() {
  const { t } = useLanguage();

  return (
    <section id="certifications" className="section certs" aria-labelledby="certs-title">
      <div className="container">
        <SectionHeading
          id="certs-title"
          title={t("certifications.title")}
          intro={t("certifications.intro")}
        />

        <Reveal as="ul" className="certs__grid">
          {certifications.map((cert) => (
            <li key={cert.name}>
              <a className="cert" href={cert.href} target="_blank" rel="noopener noreferrer">
                <Award size={18} aria-hidden="true" className="cert__icon" />
                <span className="cert__name">
                  {cert.name}
                  {cert.short && <small>{cert.short}</small>}
                </span>
                <span className="cert__view">
                  {t("certifications.viewCredential")}
                  <ArrowUpRight size={14} aria-hidden="true" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </span>
              </a>
            </li>
          ))}
        </Reveal>

        <Languages />
      </div>
    </section>
  );
}
