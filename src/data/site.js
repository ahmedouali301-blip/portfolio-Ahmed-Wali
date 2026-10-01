// Central place for personal details, links and navigation.
// Edit this file to update contact info without touching any component.

const base = import.meta.env.BASE_URL;

export const cvFiles = {
  en: {
    label: "CV English",
    flag: "🇬🇧",
    filename: "CV-Ahmed-Wali-ang.pdf",
    url: `${base}CV-Ahmed-Wali-ang.pdf`,
  },
  fr: {
    label: "CV Français",
    flag: "🇫🇷",
    filename: "CV-Ahmed-Wali-fr.pdf",
    url: `${base}CV-Ahmed-Wali-fr.pdf`,
  },
};

export const site = {
  name: "Ahmed Wali",
  initials: "AW",
  role: "Computer Engineering Student",
  location: "Sfax, Tunisia",
  email: "ahmedouali301@gmail.com",
  linkedin: "https://www.linkedin.com/in/ahmed-ouali-230065295/",
  github: "",
  cv: cvFiles.en.url,
  cvFileName: cvFiles.en.filename,
  label: "COMPUTER ENGINEERING STUDENT",
  title: "Hi, I'm Ahmed Wali.",
  headline: "Building digital solutions with code, creativity and curiosity.",
  intro:
    "Computer engineering student with a background in Information Management, interested in web development, automation, data and intelligent systems.",
  availability: "Looking for a professional opportunity",
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

// Sections that are not in the navbar highlight the nearest related nav item.
export const navAlias = {
  approach: "skills",
  education: "skills",
  certifications: "skills",
};

export const sectionIds = [
  "home",
  "about",
  "experience",
  "projects",
  "skills",
  "approach",
  "education",
  "certifications",
  "contact",
];
