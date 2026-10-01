import { RefreshCw } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import useAutoAdvance from "../hooks/useAutoAdvance";
import { steps as baseSteps } from "../data/process";
import { useLanguage } from "../context/LanguageContext";
import "./Process.css";

export default function Process() {
  const { t } = useLanguage();
  const steps = t("process.steps") || baseSteps;
  const workingStyle = t("process.workingStyle") || [];
  const { ref, active, select } = useAutoAdvance(steps.length, 2600);

  const activeStep = steps[active] || steps[0];

  return (
    <section id="approach" className="section process" aria-labelledby="approach-title">
      <div className="container">
        <SectionHeading
          id="approach-title"
          title={t("process.title")}
          intro={t("process.intro")}
        />

        <div className="process__wrap" ref={ref}>
          <ol className="process__steps">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className={`process__step ${i === active ? "is-active" : ""} ${i < active ? "is-past" : ""}`}
              >
                <button type="button" aria-pressed={i === active} onClick={() => select(i)}>
                  <span className="process__num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="process__name">{step.title}</span>
                </button>
              </li>
            ))}
          </ol>

          <div className="process__panel" aria-live="polite">
            <p className="process__big">
              <span>{String(active + 1).padStart(2, "0")}</span>
              {activeStep.title}
            </p>
            <p className="process__text">{activeStep.text}</p>
            <p className="process__loop">
              <RefreshCw size={15} aria-hidden="true" />
              {active === steps.length - 1 ? t("process.loopFinal") : t("process.loopNext")}
            </p>
          </div>
        </div>

        <Reveal className="process__style">
          <h3>{t("process.workingStyleTitle")}</h3>
          <ul className="tag-list">
            {workingStyle.map((item) => (
              <li className="tag" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
