import { useEffect, useState } from "react";
import { navAlias, sectionIds } from "../data/site";

/** Returns the id of the nav item whose section currently crosses the middle of the viewport. */
export default function useActiveSection() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const elements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(navAlias[entry.target.id] ?? entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return active;
}
