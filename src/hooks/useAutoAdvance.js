import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/**
 * Steps through `count` items while the element is on screen, until the visitor
 * picks one by hand. Never auto-plays when reduced motion is requested.
 */
export default function useAutoAdvance(count, interval = 1800) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-15% 0px -15% 0px" });
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!inView || !auto || reduce) return undefined;
    const timer = setInterval(() => setActive((a) => (a + 1) % count), interval);
    return () => clearInterval(timer);
  }, [inView, auto, reduce, count, interval]);

  const select = (index) => {
    setAuto(false);
    setActive(index);
  };

  return { ref, active, select };
}
