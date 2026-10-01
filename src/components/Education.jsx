import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { education as baseEducation } from "../data/education";
import { useLanguage } from "../context/LanguageContext";
import "./Education.css";

export default function Education() {
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 70%", "end 70%"] });
  const { t } = useLanguage();

  const educationItems = t("education.items") || baseEducation;

  return (
    <section id="education" className="section education" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading
          id="education-title"
          title={t("education.title")}
          intro={t("education.intro")}
        />

        <motion.ol ref={listRef} className="edu" style={{ "--p": scrollYProgress }}>
          <li className="edu__rail" aria-hidden="true">
            <span className="edu__fill" />
          </li>
          {educationItems.map((item) => (
            <li className={`edu__item ${item.id === "next" ? "is-next" : ""}`} key={item.id}>
              <span className="edu__node" aria-hidden="true" />
              <Reveal className="edu__card">
                <p className="edu__period">{item.period}</p>
                <div>
                  <h3>{item.title}</h3>
                  <p className="edu__place">{item.place}</p>
                  <p className="edu__text">{item.text}</p>
                </div>
                <p className="edu__stage">{item.stage}</p>
              </Reveal>
            </li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
