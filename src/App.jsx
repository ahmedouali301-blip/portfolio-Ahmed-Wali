import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Process from "./components/Process";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useActiveSection from "./hooks/useActiveSection";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";

function MainContent() {
  const active = useActiveSection();
  const { t } = useLanguage();

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        {t("nav.skipLink")}
      </a>
      <Navbar active={active} />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Process />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}
