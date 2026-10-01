import { motion } from "framer-motion";

/** Subtle fade-and-rise used sparingly on headings and key blocks. */
export default function Reveal({ as = "div", delay = 0, y = 14, className, children, ...rest }) {
  const Component = motion[as] ?? motion.div;
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Component>
  );
}
