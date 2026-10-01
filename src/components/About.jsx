import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { useLanguage } from "../context/LanguageContext";
import "./About.css";

export default function About() {
  const listRef = useRef(null);
  const [step, setStep] = useState(0);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 68%", "end 58%"] });
  const { t } = useLanguage();

  const storyItems = t("about.story") || [];

  // Light up each stage of the story as the line reaches it.
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const last = storyItems.length - 1;
    if (last <= 0) return;
    const next = storyItems.reduce((acc, _, i) => (v >= i / last - 0.02 ? i : acc), 0);
    setStep((prev) => (prev === next ? prev : next));
  });

  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container about__grid">
        <div className="about__copy">
          <SectionHeading id="about-title" title={t("about.title")} />
          <Reveal className="about__text" delay={0.05}>
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
            <blockquote className="about__quote">{t("about.quote")}</blockquote>
          </Reveal>
        </div>

        <motion.ol ref={listRef} className="story" style={{ "--p": scrollYProgress }} aria-label="Ahmed's path">
          <li className="story__rail" aria-hidden="true">
            <span className="story__fill" />
          </li>
          {storyItems.map((item, i) => (
            <li key={item.title} className={`story__item ${i <= step ? "is-on" : ""}`}>
              <span className="story__node" aria-hidden="true" />
              <h3>{item.title}</h3>
              <p className="story__meta">{item.meta}</p>
              <p className="story__text">{item.text}</p>
            </li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
