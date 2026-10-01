import { ArrowUpRight, Check } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { GithubIcon } from "./icons";
import { visuals } from "./ProjectVisuals";
import { projects as baseProjects } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";
import "./Projects.css";

function ProjectLink({ href, label, soon, icon }) {
  if (!href) {
    return (
      <span className="btn btn--ghost btn--sm is-disabled" aria-disabled="true">
        {icon}
        {soon}
      </span>
    );
  }
  return (
    <a className="btn btn--ghost btn--sm" href={href} target="_blank" rel="noopener noreferrer">
      {icon}
      {label}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export default function Projects() {
  const { t } = useLanguage();

  const projects = baseProjects.map((p) => {
    const item = t(`projects.items.${p.id}`);
    if (!item) return p;
    return {
      ...p,
      name: item.name || p.name,
      kind: item.kind || p.kind,
      description: item.description || p.description,
      problem: item.problem || p.problem,
      features: item.features || p.features,
    };
  });

  return (
    <section id="projects" className="section projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          id="projects-title"
          title={t("projects.title")}
          intro={t("projects.intro")}
        />

        <div className="projects__list">
          {projects.map((project, i) => {
            const Visual = visuals[project.id];
            const tags = project.tech;
            return (
              <Reveal as="article" key={project.id} className={`project ${i % 2 ? "project--flip" : ""}`}>
                <div className="project__body">
                  <p className="project__kind">{project.kind}</p>
                  <h3 className="project__title">{project.name}</h3>
                  <p className="project__desc">{project.description}</p>

                  <div className="project__problem">
                    <h4>{t("projects.problemTitle")}</h4>
                    <p>{project.problem}</p>
                  </div>

                  <ul className="project__features" aria-label="Features">
                    {project.features.map((feature) => (
                      <li key={feature}>
                        <Check size={14} aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {tags.length > 0 && (
                    <ul className="tag-list" aria-label="Technologies">
                      {tags.map((tag) => (
                        <li className="tag" key={tag}>
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="project__links">
                    <ProjectLink
                      href={project.github}
                      label="GitHub"
                      soon={t("projects.githubSoon")}
                      icon={<GithubIcon size={16} />}
                    />
                    {project.demo && (
                      <ProjectLink
                        href={project.demo}
                        label={t("projects.liveDemo")}
                        icon={<ArrowUpRight size={16} aria-hidden="true" />}
                      />
                    )}
                  </div>
                </div>

                <div className="project__visual">
                  <Visual />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
