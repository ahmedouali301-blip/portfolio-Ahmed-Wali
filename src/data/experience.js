export const experiences = [
  {
    id: "kpit",
    company: "KPIT",
    role: "Summer internship",
    period: "Jul – Aug 2025",
    location: "Tunis / Sfax",
    project: "Automation plugin for XML file generation for E2E_Protection analysis",
    responsibilities: [
      "Extract and analyze test results from Excel files",
      "Automatically insert analysis data into structured XML files",
      "Validate and test the plugin on automotive communication protocols",
    ],
    tech: ["Python", "Pandas", "Excel", "XML", "LIN", "CAN", "FlexRay"],
    pipeline: [
      { key: "excel", label: "Excel", detail: "Test results are stored in Excel files." },
      { key: "python", label: "Python", detail: "A Python plugin, built with Pandas, reads and extracts the results." },
      { key: "analysis", label: "Data analysis", detail: "The results are analyzed to produce the data the E2E_Protection analysis needs." },
      { key: "xml", label: "XML", detail: "Analysis data is inserted automatically into a structured XML file." },
      { key: "validation", label: "Validation", detail: "The plugin is validated and tested on the LIN, CAN and FlexRay protocols." },
    ],
  },
  {
    id: "clinisys",
    company: "Clinisys",
    role: "Final year project (PFE)",
    period: "Feb – Jun 2026",
    location: "Tunis / Sfax",
    project: "Collaborative web platform for dynamic internship management and tracking",
    modules: [
      { key: "users", label: "Users & roles", text: "User management with roles that shape what each person can see and do." },
      { key: "agile", label: "Agile tracking", text: "Agile follow-up of projects and their tasks." },
      { key: "planning", label: "Planning", text: "Collaboration and planning between the people involved in an internship." },
      { key: "notifications", label: "Workflow & notifications", text: "An administrative workflow with notifications." },
    ],
  },
];
