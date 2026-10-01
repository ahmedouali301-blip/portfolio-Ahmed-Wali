import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Download, FileText } from "lucide-react";
import { cvFiles } from "../data/site";
import { useLanguage } from "../context/LanguageContext";
import "./CvDropdown.css";

export default function CvDropdown({ className = "", btnClassName = "", variant = "ghost", size = "sm", onSelect }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const { t } = useLanguage();

  // Close menu on outside click or Escape key press
  useEffect(() => {
    if (!open) return undefined;

    const onPointerDown = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const handleDownload = (fileInfo) => {
    const link = document.createElement("a");
    link.href = fileInfo.url;
    link.download = fileInfo.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setOpen(false);
    if (onSelect) onSelect();
  };

  const btnClasses = `btn btn--${variant} ${size === "sm" ? "btn--sm" : ""} cv-dropdown__trigger ${btnClassName} ${open ? "is-open" : ""}`;

  return (
    <div className={`cv-dropdown ${className}`} ref={containerRef}>
      <button
        type="button"
        className={btnClasses}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={t("nav.downloadCv")}
      >
        <Download size={15} aria-hidden="true" />
        <span>{t("nav.downloadCv")}</span>
        <ChevronDown size={14} className={`cv-dropdown__chevron ${open ? "is-rotated" : ""}`} aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="cv-dropdown__menu"
            role="menu"
            aria-label="Download CV language"
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="cv-dropdown__header">
              <FileText size={14} aria-hidden="true" />
              <span>{t("nav.downloadCv")}</span>
            </div>

            <button
              type="button"
              className="cv-dropdown__item"
              role="menuitem"
              onClick={() => handleDownload(cvFiles.en)}
            >
              <span className="cv-dropdown__flag" aria-hidden="true">🇬🇧</span>
              <span className="cv-dropdown__label">CV English</span>
              <Download size={14} className="cv-dropdown__icon" aria-hidden="true" />
            </button>

            <button
              type="button"
              className="cv-dropdown__item"
              role="menuitem"
              onClick={() => handleDownload(cvFiles.fr)}
            >
              <span className="cv-dropdown__flag" aria-hidden="true">🇫🇷</span>
              <span className="cv-dropdown__label">CV Français</span>
              <Download size={14} className="cv-dropdown__icon" aria-hidden="true" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
