// No skill percentages on purpose: they would be invented numbers.
// `usedIn` only references projects that appear in projects.js.
export const skillGroups = [
  {
    id: "frontend",
    label: "Frontend",
    items: [
      { name: "HTML5" },
      { name: "CSS" },
      { name: "JavaScript", usedIn: ["Gestion des surveillances"] },
      { name: "React.js", usedIn: ["Gestion des surveillances"] },
      { name: "Bootstrap" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      { name: "PHP" },
      { name: "Laravel" },
      { name: "Node.js" },
      { name: "Java" },
      { name: "Spring Boot", usedIn: ["Gestion des surveillances"] },
      { name: "C#" },
    ],
  },
  {
    id: "data",
    label: "Data",
    items: [
      { name: "MySQL", usedIn: ["Gestion des surveillances"] },
      { name: "Python", usedIn: ["KPIT XML Automation"] },
      { name: "Prisma" },
      { name: "Power BI" },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    items: [{ name: "Flutter", usedIn: ["My Prayer"] }],
  },
];

export const workingStyle = [
  "Problem solving",
  "Teamwork",
  "Time management",
  "Quick learning",
  "Leadership and communication",
  "Brainstorming",
];
