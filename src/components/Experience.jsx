import { useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import {
  BarChart3,
  Bell,
  Braces,
  CalendarDays,
  FileCode2,
  FileSpreadsheet,
  KanbanSquare,
  ShieldCheck,
  Users,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import useAutoAdvance from "../hooks/useAutoAdvance";
import { experiences as baseExperiences } from "../data/experience";
import { useLanguage } from "../context/LanguageContext";
import "./mock.css";
import "./Experience.css";

/* ---------------------------------------------------------- KPIT pipeline */

const pipeIcons = {
  excel: FileSpreadsheet,
  python: FileCode2,
  analysis: BarChart3,
  xml: Braces,
  validation: ShieldCheck,
};

function Pipeline({ steps }) {
  const { ref, active, select } = useAutoAdvance(steps.length, 1800);

  return (
    <div className="pipe" ref={ref}>
      <ol className="pipe__steps">
        {steps.map((step, i) => {
          const Icon = pipeIcons[step.key];
          const state = i === active ? "is-active" : i < active ? "is-done" : "";
          return (
            <li key={step.key} className={`pipe__step ${state}`}>
              <button
                type="button"
                className="pipe__btn"
                aria-pressed={i === active}
                onClick={() => select(i)}
              >
                <span className="pipe__icon">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <span className="pipe__label">{step.label}</span>
              </button>
            </li>
          );
        })}
      </ol>
      <p className="pipe__detail" aria-live="polite">
        {steps[active].detail}
      </p>
    </div>
  );
}

/* ------------------------------------------------------ Clinisys product */

const moduleIcons = { users: Users, agile: KanbanSquare, planning: CalendarDays, notifications: Bell };

function UsersPane() {
  const { lang } = useLanguage();
  const headers = lang === "fr" ? ["Utilisateur", "Rôle", "Statut"] : ["User", "Role", "Status"];

  return (
    <div className="ui-table">
      <div className="ui-row ui-row--head">
        <span>{headers[0]}</span>
        <span>{headers[1]}</span>
        <span>{headers[2]}</span>
      </div>
      {[62, 48, 70, 54, 40].map((w, i) => (
        <div className="ui-row" key={i}>
          <span className="ui-user">
            <i className="ui-avatar" />
            <b className="ui-skel" style={{ width: `${w}%` }} />
          </span>
          <span>
            <em className="ui-pill" />
          </span>
          <span>
            <i className={`ui-dot ${i === 3 ? "ui-dot--off" : ""}`} />
          </span>
        </div>
      ))}
    </div>
  );
}

function AgilePane() {
  const { lang } = useLanguage();
  const columns = lang === "fr"
    ? [{ name: "À faire", cards: 3 }, { name: "En cours", cards: 2 }, { name: "Terminé", cards: 3 }]
    : [{ name: "To do", cards: 3 }, { name: "In progress", cards: 2 }, { name: "Done", cards: 3 }];

  return (
    <div className="board">
      {columns.map((col) => (
        <div className="board__col" key={col.name}>
          <p>{col.name}</p>
          {Array.from({ length: col.cards }).map((_, i) => (
            <div className="board__card" key={i}>
              <span className="ui-skel" style={{ width: `${85 - i * 18}%` }} />
              <span className="ui-skel ui-skel--dim" style={{ width: "55%" }} />
              <i className="ui-avatar" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function PlanningPane() {
  const bars = [
    { left: 4, width: 38 },
    { left: 22, width: 46 },
    { left: 40, width: 30 },
    { left: 12, width: 52 },
    { left: 58, width: 34 },
  ];
  return (
    <div className="plan">
      <div className="plan__scale">
        {["W1", "W2", "W3", "W4", "W5"].map((w) => (
          <span key={w}>{w}</span>
        ))}
      </div>
      {bars.map((b, i) => (
        <div className="plan__row" key={i}>
          <span className="ui-skel ui-skel--dim" style={{ width: 54 }} />
          <div className="plan__track">
            <span className="plan__bar" style={{ left: `${b.left}%`, width: `${b.width}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function NotificationsPane() {
  return (
    <div className="notes">
      {[74, 58, 66, 44].map((w, i) => (
        <div className="notes__row" key={i}>
          <i className={`ui-dot ${i > 1 ? "ui-dot--off" : ""}`} />
          <div className="notes__lines">
            <span className="ui-skel" style={{ width: `${w}%` }} />
            <span className="ui-skel ui-skel--dim" style={{ width: `${w - 22}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

const panes = { users: UsersPane, agile: AgilePane, planning: PlanningPane, notifications: NotificationsPane };

function ProductWindow({ modules }) {
  const [current, setCurrent] = useState(0);
  const tabRefs = useRef([]);
  const Pane = panes[modules[current].key];
  const { lang } = useLanguage();

  const onKeyDown = (event) => {
    const last = modules.length - 1;
    let next = current;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") next = current === last ? 0 : current + 1;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = current === 0 ? last : current - 1;
    else return;
    event.preventDefault();
    setCurrent(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="product">
      <div className="win product__win">
        <div className="win__bar">
          <i />
          <i />
          <i />
          <span className="win__title">clinisys / workspace</span>
        </div>
        <div className="product__body">
          <div className="product__side" role="tablist" aria-label="Clinisys modules" onKeyDown={onKeyDown}>
            {modules.map((m, i) => {
              const Icon = moduleIcons[m.key];
              return (
                <button
                  key={m.key}
                  ref={(el) => (tabRefs.current[i] = el)}
                  type="button"
                  role="tab"
                  id={`tab-${m.key}`}
                  aria-selected={i === current}
                  aria-controls="clinisys-panel"
                  tabIndex={i === current ? 0 : -1}
                  className={`product__tab ${i === current ? "is-active" : ""}`}
                  onClick={() => setCurrent(i)}
                >
                  <Icon size={16} aria-hidden="true" />
                  <span>{m.label}</span>
                </button>
              );
            })}
          </div>
          <div className="product__main" role="tabpanel" id="clinisys-panel" aria-labelledby={`tab-${modules[current].key}`}>
            <Pane />
          </div>
        </div>
      </div>
      <p className="product__text" aria-live="polite">
        {modules[current].text}
      </p>
      <p className="mock-caption">
        {lang === "fr" ? "Illustration de l'interface, pas une capture d'écran." : "Interface illustration, not a screenshot."}
      </p>
    </div>
  );
}

/* ---------------------------------------------------------------- section */

export default function Experience() {
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 70%", "end 75%"] });
  const { t } = useLanguage();

  const experiences = baseExperiences.map((base) => {
    const localized = t(`experience.${base.id}`);
    if (!localized) return base;
    return {
      ...base,
      role: localized.role || base.role,
      period: localized.period || base.period,
      location: localized.location || base.location,
      project: localized.project || base.project,
      responsibilities: localized.responsibilities || base.responsibilities,
      pipeline: localized.pipeline || base.pipeline,
      modules: localized.modules || base.modules,
    };
  });

  return (
    <section id="experience" className="section experience" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading
          id="experience-title"
          title={t("experience.title")}
          intro={t("experience.intro")}
        />

        <motion.ol ref={listRef} className="xp" style={{ "--p": scrollYProgress }}>
          <li className="xp__rail" aria-hidden="true">
            <span className="xp__fill" />
          </li>

          {experiences.map((xp) => (
            <li className="xp__item" key={xp.id}>
              <span className="xp__node" aria-hidden="true" />
              <Reveal as="article" className="xp__card">
                <header className="xp__head">
                  <div>
                    <h3>{xp.company}</h3>
                    <p className="xp__role">{xp.role}</p>
                  </div>
                  <p className="xp__when">
                    <time>{xp.period}</time>
                    <span>{xp.location}</span>
                  </p>
                </header>

                <p className="xp__project">{xp.project}</p>

                {xp.pipeline && (
                  <div className="xp__split">
                    <div className="xp__info">
                      <ul className="xp__list">
                        {xp.responsibilities.map((r) => (
                          <li key={r}>{r}</li>
                        ))}
                      </ul>
                      <ul className="tag-list" aria-label="Technologies and concepts">
                        {xp.tech.map((t) => (
                          <li className="tag" key={t}>
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Pipeline steps={xp.pipeline} />
                  </div>
                )}

                {xp.modules && <ProductWindow modules={xp.modules} />}
              </Reveal>
            </li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
