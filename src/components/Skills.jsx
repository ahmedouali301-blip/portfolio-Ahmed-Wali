import { useState } from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { skillGroups as baseSkillGroups } from "../data/skills";
import { useLanguage } from "../context/LanguageContext";
import "./Skills.css";

export default function Skills() {
  const [focusGroup, setFocusGroup] = useState("all");
  const [hovered, setHovered] = useState(null);
  const { t } = useLanguage();

  const skillGroups = baseSkillGroups.map((g) => ({
    ...g,
    label: t(`skills.groups.${g.id}`) || g.label,
  }));

  const tabs = [{ id: "all", label: t("skills.allTab") }, ...skillGroups.map((g) => ({ id: g.id, label: g.label }))];

  return (
    <section id="skills" className="section skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          id="skills-title"
          title={t("skills.title")}
          intro={t("skills.intro")}
        />

        <div className="skills__layout">
          <Reveal className="skills__side">
            <div className="skills__tabs" role="group" aria-label="Filter by category">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  className={`skills__tab ${focusGroup === tab.id ? "is-active" : ""}`}
                  aria-pressed={focusGroup === tab.id}
                  onClick={() => setFocusGroup(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="readout" aria-live="polite">
              {hovered ? (
                <>
                  <p className="readout__name">{hovered.name}</p>
                  <p className="readout__cat">{hovered.category}</p>
                  {hovered.usedIn && (
                    <p className="readout__used">
                      {t("skills.usedIn")} {hovered.usedIn.join(", ")}
                    </p>
                  )}
                </>
              ) : (
                <p className="readout__idle">{t("skills.idleReadout")}</p>
              )}
            </div>
          </Reveal>

          <div className="skills__map">
            {skillGroups.map((group) => {
              const dim = focusGroup !== "all" && focusGroup !== group.id;
              return (
                <Reveal key={group.id} className={`cluster ${dim ? "is-dim" : ""}`}>
                  <h3 className="cluster__title">{group.label}</h3>
                  <ul className="cluster__items">
                    {group.items.map((item) => (
                      <li
                        key={item.name}
                        tabIndex={0}
                        className="badge"
                        onMouseEnter={() => setHovered({ ...item, category: group.label })}
                        onFocus={() => setHovered({ ...item, category: group.label })}
                        onClick={() => setHovered({ ...item, category: group.label })}
                        onMouseLeave={() => setHovered(null)}
                        onBlur={() => setHovered(null)}
                      >
                        <span>{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
