// Leave `github` / `demo` empty until the links exist: the UI shows a clean "soon" state.
export const projects = [
  {
    id: "surveillances",
    name: "Gestion des surveillances",
    kind: "Full-stack web application",
    description:
      "A platform designed to manage examination surveillance preferences, teacher workload and session planning.",
    problem:
      "Planning exam surveillance means balancing teachers' preferences, their workload and the exam sessions. This application brings all three into one place.",
    features: [
      "Authentication",
      "Teacher management",
      "Subject management",
      "Workload calculation",
      "Surveillance preferences",
      "Validation rules",
      "Dynamic dashboard",
      "Calendar visualization",
    ],
    tech: ["React", "Spring Boot", "MySQL", "JavaScript", "REST API"],
    github: "",
    demo: "",
  },
  {
    id: "clinisys",
    name: "Gestion des stages",
    kind: "Collaborative platform · Final year project",
    description:
      "A collaborative platform for internship management and project tracking, built as a real software product.",
    problem:
      "Internships involve many people, tasks and administrative steps. Clinisys lets them be managed and followed dynamically in a single workspace.",
    features: [
      "User management",
      "Roles",
      "Agile project tracking",
      "Collaboration",
      "Planning",
      "Administrative workflow",
      "Notifications",
    ],
    tech: [],
    github: "",
    demo: "",
  },
  {
    id: "prayer",
    name: "My Prayer",
    kind: "Mobile application",
    description: "A Flutter mobile application designed as a modern, focused mobile product.",
    problem:
      "Everyday prayer essentials, such as direction, counting, preferences and language, live in one simple app.",
    features: ["Prayer experience", "Qibla", "Counter", "Settings", "Language"],
    tech: ["Flutter"],
    github: "",
    demo: "",
  },
  {
    id: "kpit",
    name: "KPIT XML Automation",
    kind: "Engineering automation · Internship project",
    description:
      "An automation plugin that turns test results into structured XML for the E2E_Protection analysis.",
    problem:
      "Test results lived in Excel files and had to end up in structured XML files. The plugin does that work automatically, then gets validated on automotive protocols.",
    features: [
      "Extracts and analyzes results from Excel",
      "Inserts analysis data into structured XML",
      "Validated on LIN, CAN and FlexRay",
    ],
    tech: ["Python", "Pandas", "Excel", "XML", "LIN", "CAN", "FlexRay"],
    github: "",
    demo: "",
  },
];
