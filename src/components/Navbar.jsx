import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import Monogram from "./Monogram";
import LanguageSwitcher from "./LanguageSwitcher";
import CvDropdown from "./CvDropdown";
import { navItems } from "../data/site";
import { useLanguage } from "../context/LanguageContext";
import "./Navbar.css";

export default function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile menu: close on Escape / when the viewport becomes wide, lock page scroll while open.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => event.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 900 && setOpen(false);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled || open ? "nav--solid" : ""} ${scrolled ? "nav--compact" : ""}`}>
      <div className="nav__bar container">
        <a href="#home" className="nav__brand" aria-label="Ahmed Wali, back to top" onClick={close}>
          <Monogram />
          <span className="nav__name">Ahmed Wali</span>
        </a>

        <nav className="nav__links" aria-label="Main">
          <ul>
            {navItems.map((item) => {
              const isActive = active === item.id;
              const label = t(`nav.${item.id}`);
              return (
                <li key={item.id}>
                  <a href={`#${item.id}`} className={isActive ? "is-active" : ""} aria-current={isActive ? "true" : undefined}>
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="nav__pill"
                        transition={{ type: "spring", stiffness: 420, damping: 36 }}
                      />
                    )}
                    <span className="nav__label">{label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="nav__controls">
          <LanguageSwitcher className="nav__lang" />
          <CvDropdown className="nav__cv" variant="ghost" size="sm" />
        </div>

        <button
          type="button"
          className={`nav__toggle ${open ? "is-open" : ""}`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? t("nav.menuClose") : t("nav.menuOpen")}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <motion.div className="nav__progress" style={{ scaleX: progress }} aria-hidden="true" />

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="nav__sheet"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="nav__sheet-header">
              <LanguageSwitcher className="nav__sheet-lang" />
            </div>
            <nav aria-label="Mobile">
              <ul>
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.35 }}
                  >
                    <a href={`#${item.id}`} className={active === item.id ? "is-active" : ""} onClick={close}>
                      {t(`nav.${item.id}`)}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <CvDropdown
              className="cv-dropdown--full-width"
              btnClassName="btn--primary"
              variant="primary"
              size="md"
              onSelect={close}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
