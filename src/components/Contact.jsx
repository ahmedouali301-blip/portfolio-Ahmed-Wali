import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import Reveal from "./Reveal";
import { GithubIcon, LinkedinIcon } from "./icons";
import { site } from "../data/site";
import { useLanguage } from "../context/LanguageContext";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const { t } = useLanguage();

  const update = (field) => (event) => setForm((f) => ({ ...f, [field]: event.target.value }));

  const onSubmit = (event) => {
    event.preventDefault();
    const subject = `Portfolio message from ${form.name}`;
    const body = `${form.message}\n\n${form.name}\n${form.email}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("sent");
  };

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <Reveal className="contact__intro">
          <h2 id="contact-title" className="contact__title">
            {t("contact.title")}
          </h2>
          <p className="contact__lead">{t("contact.lead")}</p>
          <p className="contact__status">
            <span className="status-dot" aria-hidden="true" />
            {t("hero.availability")}
          </p>

          <ul className="contact__links">
            <li>
              <a href={`mailto:${site.email}`}>
                <Mail size={18} aria-hidden="true" />
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedinIcon size={18} />
                LinkedIn
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            {site.github && (
              <li>
                <a href={site.github} target="_blank" rel="noopener noreferrer">
                  <GithubIcon size={18} />
                  GitHub
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            )}
            <li>
              <span className="contact__place">
                <MapPin size={18} aria-hidden="true" />
                {site.location}
              </span>
            </li>
          </ul>
        </Reveal>

        <Reveal as="form" className="form" onSubmit={onSubmit} delay={0.08}>
          <div className="field">
            <label htmlFor="c-name">{t("contact.labels.name")}</label>
            <input id="c-name" name="name" type="text" autoComplete="name" required value={form.name} onChange={update("name")} />
          </div>
          <div className="field">
            <label htmlFor="c-email">{t("contact.labels.email")}</label>
            <input id="c-email" name="email" type="email" autoComplete="email" required value={form.email} onChange={update("email")} />
          </div>
          <div className="field">
            <label htmlFor="c-message">{t("contact.labels.message")}</label>
            <textarea id="c-message" name="message" rows={6} required value={form.message} onChange={update("message")} />
          </div>
          <button type="submit" className="btn btn--primary form__submit">
            <Send size={16} aria-hidden="true" />
            {t("contact.submit")}
          </button>
          <p className="form__note" role="status">
            {status === "sent" ? t("contact.noteSent") : t("contact.noteDefault")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
