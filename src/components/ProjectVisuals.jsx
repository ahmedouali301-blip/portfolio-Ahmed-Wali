import {
  ArrowUpDown,
  Bell,
  Braces,
  Compass,
  FileCode2,
  FileSpreadsheet,
  FolderKanban,
  Hash,
  KeyRound,
  Languages,
  ListChecks,
  RefreshCw,
  Settings,
  ShieldCheck,
  Users,
} from "lucide-react";
import "./mock.css";
import "./ProjectVisuals.css";

/* ------------------------------------------------ 01 · Gestion des surveillances */

export function SurveillanceVisual() {
  const workload = [72, 54, 88, 41, 65];
  const days = Array.from({ length: 35 }, (_, i) => i);
  const marked = new Set([3, 8, 9, 15, 22, 23, 29]);
  const layers = [
    { name: "Frontend", sub: "React" },
    { name: "REST API" },
    { name: "Spring Boot" },
    { name: "MySQL" },
  ];

  return (
    <div className="vis vis--surv">
      <div className="win vis__win">
        <div className="win__bar">
          <i />
          <i />
          <i />
          <span className="win__title">surveillances / dashboard</span>
        </div>
        <div className="dash">
          <div>
            <p className="dash__label">Workload</p>
            <div className="dash__bars">
              {workload.map((w, i) => (
                <div className="dash__bar" key={i}>
                  <span className="ui-skel ui-skel--dim" />
                  <b>
                    <u style={{ width: `${w}%` }} />
                  </b>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="dash__label">Sessions</p>
            <div className="cal">
              {days.map((d) => (
                <i key={d} className={marked.has(d) ? "is-on" : ""} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <ol className="stack" aria-label="Architecture: frontend, REST API, Spring Boot, MySQL">
        {layers.map((layer, i) => (
          <li key={layer.name}>
            <div className="stack__layer">
              <b>{layer.name}</b>
              {layer.sub && <span>{layer.sub}</span>}
            </div>
            {i < layers.length - 1 && (
              <div className="stack__link" aria-hidden="true">
                <ArrowUpDown size={14} />
              </div>
            )}
          </li>
        ))}
      </ol>
      <p className="mock-caption vis__caption">Interface illustration, not a screenshot.</p>
    </div>
  );
}

/* --------------------------------------------------------------- 02 · Clinisys */

export function ClinisysVisual() {
  const chain = [
    { Icon: Users, name: "Users" },
    { Icon: KeyRound, name: "Roles" },
    { Icon: FolderKanban, name: "Projects" },
    { Icon: ListChecks, name: "Tasks" },
    { Icon: RefreshCw, name: "Agile workflow" },
    { Icon: Bell, name: "Notifications" },
  ];

  return (
    <div className="vis vis--saas">
      <div className="win vis__win">
        <div className="win__bar">
          <i />
          <i />
          <i />
          <span className="win__title">clinisys</span>
        </div>
        <ol className="flow" aria-label="Users, roles, projects, tasks, agile workflow, notifications">
          {chain.map(({ Icon, name }, i) => (
            <li className="flow__item" key={name} style={{ "--i": i }}>
              <span className="flow__icon">
                <Icon size={17} aria-hidden="true" />
              </span>
              <span className="flow__name">{name}</span>
              <span className="ui-skel ui-skel--dim flow__skel" style={{ width: `${34 + ((i * 17) % 30)}%` }} />
            </li>
          ))}
        </ol>
      </div>
      <p className="mock-caption vis__caption">Interface illustration, not a screenshot.</p>
    </div>
  );
}

/* ---------------------------------------------------------------- 03 · My Prayer */

function Compass360() {
  const ticks = Array.from({ length: 36 }, (_, i) => i);
  return (
    <svg className="compass" viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="54" className="compass__ring" />
      {ticks.map((t) => (
        <line
          key={t}
          x1="60"
          y1="10"
          x2="60"
          y2={t % 9 === 0 ? 20 : 15}
          className={t % 9 === 0 ? "compass__tick compass__tick--major" : "compass__tick"}
          transform={`rotate(${t * 10} 60 60)`}
        />
      ))}
      <g className="compass__needle">
        <path d="M60 24 L67 62 L60 58 L53 62 Z" className="compass__north" />
        <path d="M60 96 L67 62 L60 66 L53 62 Z" className="compass__south" />
      </g>
      <circle cx="60" cy="60" r="3" className="compass__pin" />
    </svg>
  );
}

export function PrayerVisual() {
  const tabs = [Compass, Hash, Settings, Languages];
  return (
    <div className="vis vis--mobile">
      <div className="phone phone--main">
        <div className="phone__notch" />
        <div className="phone__screen">
          <p className="phone__title">Qibla</p>
          <Compass360 />
          <div className="counter">
            <p>Counter</p>
            <b>33</b>
            <div className="counter__btns">
              <span />
              <span className="is-primary" />
            </div>
          </div>
          <div className="phone__tabs">
            {tabs.map((Icon, i) => (
              <Icon key={i} size={16} className={i === 0 ? "is-on" : ""} aria-hidden="true" />
            ))}
          </div>
        </div>
      </div>

      <div className="phone phone--side">
        <div className="phone__notch" />
        <div className="phone__screen">
          <p className="phone__title">Settings</p>
          <div className="settings">
            <div className="settings__row is-focus">
              <span>Language</span>
              <Languages size={14} aria-hidden="true" />
            </div>
            {[70, 52, 64].map((w, i) => (
              <div className="settings__row" key={i}>
                <span className="ui-skel" style={{ width: `${w}%` }} />
                <i className={`switch ${i === 1 ? "is-on" : ""}`} />
              </div>
            ))}
          </div>
          <div className="phone__tabs">
            {tabs.map((Icon, i) => (
              <Icon key={i} size={16} className={i === 3 ? "is-on" : ""} aria-hidden="true" />
            ))}
          </div>
        </div>
      </div>
      <p className="mock-caption vis__caption">Interface illustration, not a screenshot.</p>
    </div>
  );
}

/* ------------------------------------------------------------ 04 · KPIT automation */

const lanes = [
  { name: "LIN", path: "M0 18 H40 V6 H110 V18 H170 V6 H210 V18 H300" },
  { name: "CAN", path: "M0 18 H20 V6 H36 V18 H60 V6 H96 V18 H130 V6 H150 V18 H190 V6 H222 V18 H260 V6 H274 V18 H300" },
  { name: "FlexRay", path: "M0 6 H30 V18 H62 V6 H94 V18 H120 V6 H160 V18 H200 V6 H228 V18 H270 V6 H300" },
];

export function KpitVisual() {
  return (
    <div className="vis vis--kpit">
      <div className="kpit__flow">
        <div className="kpit__node">
          <FileSpreadsheet size={20} aria-hidden="true" />
          <b>results.xlsx</b>
          <span>Excel</span>
        </div>
        <span className="kpit__wire" aria-hidden="true" />
        <div className="kpit__node">
          <FileCode2 size={20} aria-hidden="true" />
          <b>plugin.py</b>
          <span>Python · Pandas</span>
        </div>
        <span className="kpit__wire" aria-hidden="true" />
        <div className="kpit__node">
          <Braces size={20} aria-hidden="true" />
          <b>analysis.xml</b>
          <span>Structured XML</span>
        </div>
      </div>

      <pre className="kpit__xml" aria-hidden="true">
        <code>
          {`<E2E_Protection>
  <analysis protocol="…">
    …
  </analysis>
</E2E_Protection>`}
        </code>
      </pre>

      <ul className="kpit__bus" aria-label="Validated on LIN, CAN and FlexRay">
        {lanes.map((lane, i) => (
          <li className="lane" key={lane.name}>
            <span className="lane__name">{lane.name}</span>
            <svg className="lane__wave" viewBox="0 0 300 24" preserveAspectRatio="none" aria-hidden="true">
              <path d={lane.path} style={{ animationDuration: `${5 + i * 1.5}s` }} />
            </svg>
            <span className="lane__ok">
              <ShieldCheck size={15} aria-hidden="true" />
              validated
            </span>
          </li>
        ))}
      </ul>
      <p className="mock-caption vis__caption">Illustration of the workflow.</p>
    </div>
  );
}

export const visuals = {
  surveillances: SurveillanceVisual,
  clinisys: ClinisysVisual,
  prayer: PrayerVisual,
  kpit: KpitVisual,
};
