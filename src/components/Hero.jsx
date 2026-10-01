import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { site } from "../data/site";
import { useLanguage } from "../context/LanguageContext";
import CvDropdown from "./CvDropdown";
import profileImg from "../assets/photo_pro.png";
import "./Hero.css";

/* ---------------------------------------------------------------- content */

function getSnippets(t) {
  return [
    {
      file: "ahmed.js",
      code: `const ahmed = {
  role: "${t("hero.codeSnippetRole")}",
  base: "${t("hero.codeSnippetBase")}",
  builds: ["web", "mobile", "automation"],
  curious: true,
};`,
    },
    {
      file: "extract.py",
      code: `import pandas as pd

df = pd.read_excel("results.xlsx")
for row in df.itertuples():
    xml.append(to_xml(row))
# structured XML, ready to validate`,
    },
    {
      file: "SurveillanceController.java",
      code: `@RestController
@RequestMapping("/api/surveillances")
public class SurveillanceController {
  // teachers, workload, sessions
}`,
    },
    {
      file: "my_prayer.dart",
      code: `class MyPrayer extends StatelessWidget {
  Widget build(BuildContext context) {
    return MaterialApp(home: Qibla());
  }
}`,
    },
  ];
}

const floaters = [
  { text: "useState()", x: "4%", y: "16%", delay: "0s" },
  { text: "pd.read_excel()", x: "70%", y: "8%", delay: "2.2s" },
  { text: "@RestController", x: "80%", y: "58%", delay: "4.4s" },
  { text: "Widget build()", x: "8%", y: "72%", delay: "6.6s" },
  { text: "SELECT * FROM", x: "58%", y: "88%", delay: "1.1s" },
  { text: "<xml />", x: "36%", y: "4%", delay: "5.5s" },
];

const chips = [
  { label: "React", x: "-4%", y: "8%", depth: 46 },
  { label: "Spring Boot", x: "78%", y: "-4%", depth: 58 },
  { label: "Flutter", x: "88%", y: "62%", depth: 36 },
  { label: "Python", x: "-8%", y: "48%", depth: 52 },
  { label: "MySQL", x: "60%", y: "96%", depth: 42 },
];

/* ------------------------------------------------------------ code typing */

const TOKEN =
  /("(?:[^"\\]|\\.)*"|\/\/.*|#.*|\b(?:const|import|from|as|for|in|class|extends|return|public|new|true|false)\b|@\w+|\b\d+\b)/g;

function highlight(text) {
  return text.split(TOKEN).map((part, i) => {
    if (i % 2 === 0) return part;
    let cls = "tok-kw";
    if (part.startsWith('"')) cls = "tok-str";
    else if (part.startsWith("//") || part.startsWith("#")) cls = "tok-com";
    else if (part.startsWith("@")) cls = "tok-ann";
    else if (/^\d/.test(part)) cls = "tok-num";
    return (
      <span key={i} className={cls}>
        {part}
      </span>
    );
  });
}

function useCodeLoop(reduce, snippets) {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (reduce) return undefined;
    const { code } = snippets[index];
    if (count < code.length) {
      const timer = setTimeout(() => setCount(count + 2), 26);
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(() => {
      setIndex((index + 1) % snippets.length);
      setCount(0);
    }, 2800);
    return () => clearTimeout(timer);
  }, [index, count, reduce, snippets]);

  const { file, code } = snippets[index] || snippets[0];
  return { file, text: reduce ? code : code.slice(0, count) };
}

function useTerminal(reduce, terminalLines) {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (reduce) return undefined;
    const timer = setTimeout(
      () => setVisible((v) => (v >= terminalLines.length ? 0 : v + 1)),
      visible >= terminalLines.length ? 3200 : 950
    );
    return () => clearTimeout(timer);
  }, [visible, reduce, terminalLines.length]);

  return reduce ? terminalLines.length : visible;
}

/* ------------------------------------------------------------- the stage */

function Layer({ x, y, depth, className, children }) {
  const tx = useTransform(x, (v) => v * depth);
  const ty = useTransform(y, (v) => v * depth);
  return (
    <motion.div className={className} style={{ x: tx, y: ty }}>
      {children}
    </motion.div>
  );
}

function Stage({ x, y, reduce }) {
  const { t } = useLanguage();
  const snippets = getSnippets(t);
  const terminalLines = t("hero.terminalOutputs")
    ? [t("hero.terminalCommand"), ...t("hero.terminalOutputs")]
    : [
        "$ python build_xml.py",
        "✓ Excel results read",
        "✓ XML generated",
        "✓ LIN · CAN · FlexRay validated",
      ];

  const { file, text } = useCodeLoop(reduce, snippets);
  const shown = useTerminal(reduce, terminalLines);

  return (
    <div className="stage" aria-hidden="true">
      <Layer x={x} y={y} depth={22} className="stage__layer stage__editor-wrap">
        <div className="win stage__editor">
          <div className="win__bar">
            <i />
            <i />
            <i />
            <span className="win__title">{file}</span>
          </div>
          <pre className="code">
            <code>{highlight(text)}</code>
            <span className="code__caret" />
          </pre>
        </div>
      </Layer>

      <Layer x={x} y={y} depth={-30} className="stage__layer stage__term-wrap">
        <div className="win stage__term">
          <div className="win__bar">
            <i />
            <i />
            <i />
            <span className="win__title">terminal</span>
          </div>
          <ul className="term">
            {terminalLines.map((line, i) => (
              <li key={line} className={i < shown ? "is-on" : ""}>
                {line}
              </li>
            ))}
          </ul>
        </div>
      </Layer>

      {chips.map((chip) => (
        <Layer
          key={chip.label}
          x={x}
          y={y}
          depth={chip.depth}
          className="stage__layer stage__chip-wrap"
        >
          <span className="chip" style={{ left: chip.x, top: chip.y }}>
            {chip.label}
          </span>
        </Layer>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ hero */

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const rise = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const wordRise = {
  hidden: { y: "105%" },
  show: { y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const reduce = !!useReducedMotion();
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 70, damping: 18, mass: 0.6 });
  const y = useSpring(my, { stiffness: 70, damping: 18, mass: 0.6 });
  const { t } = useLanguage();

  // Cursor interaction: spotlight + parallax. Updates CSS variables directly, no React re-render.
  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return undefined;
    let raf = 0;
    const onMove = (event) => {
      if (event.pointerType === "touch") return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width;
        const py = (event.clientY - rect.top) / rect.height;
        el.style.setProperty("--mx", `${(px * 100).toFixed(1)}%`);
        el.style.setProperty("--my", `${(py * 100).toFixed(1)}%`);
        mx.set(px - 0.5);
        my.set(py - 0.5);
      });
    };
    el.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      el.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [reduce, mx, my]);

  const headlineText = t("hero.headline");
  const words = headlineText.split(" ");

  return (
    <section id="home" className="hero" ref={ref} aria-labelledby="hero-title">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__grid hero__grid--lit" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__spot" aria-hidden="true" />

      <div className="hero__floaters" aria-hidden="true">
        {floaters.map((f) => (
          <span key={f.text} style={{ left: f.x, top: f.y, animationDelay: f.delay }}>
            {f.text}
          </span>
        ))}
      </div>

      <div className="container hero__inner">
        <motion.div className="hero__copy" variants={container} initial="hidden" animate="show">
          <motion.p className="hero__label" variants={rise}>
            {t("hero.label")}
          </motion.p>

          <div className="hero__header-layout">
            <div className="hero__header-text">
              <motion.h1 id="hero-title" className="hero__title" variants={rise}>
                {t("hero.title")}
              </motion.h1>

              <p className="hero__headline">
                {words.map((word, i) => (
                  <span key={`${word}-${i}`}>
                    <span className="word-mask">
                      <motion.span variants={wordRise} className="word">
                        {word}
                      </motion.span>
                    </span>{" "}
                  </span>
                ))}
              </p>

              <motion.p className="hero__intro" variants={rise}>
                {t("hero.intro")}
              </motion.p>
            </div>

            <motion.div className="hero__portrait-wrap" variants={rise}>
              <div className="hero__portrait-card">
                <img
                  src={profileImg}
                  alt="Ahmed Wali - Computer Engineering Student"
                  className="hero__portrait-img"
                  loading="eager"
                />
                <div className="hero__portrait-border" aria-hidden="true" />
                <div className="hero__portrait-glow" aria-hidden="true" />
              </div>
            </motion.div>
          </div>

          <motion.div className="hero__cta" variants={rise}>
            <a className="btn btn--primary" href="#projects">
              {t("hero.exploreWork")}
            </a>
            <CvDropdown variant="ghost" size="md" />
          </motion.div>

          <motion.div className="hero__foot" variants={rise}>
            <ul className="hero__social" aria-label="Social links">
              {site.github && (
                <li>
                  <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)">
                    <GithubIcon size={19} />
                  </a>
                </li>
              )}
              <li>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)">
                  <LinkedinIcon size={19} />
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} aria-label={`Email ${site.email}`}>
                  <Mail size={19} aria-hidden="true" />
                </a>
              </li>
            </ul>
            <p className="hero__status">
              <span className="status-dot" aria-hidden="true" />
              {t("hero.availability")}
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__stage"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Stage x={x} y={y} reduce={reduce} />
        </motion.div>
      </div>
    </section>
  );
}
