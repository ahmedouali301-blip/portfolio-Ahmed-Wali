import Reveal from "./Reveal";

export default function SectionHeading({ id, title, intro }) {
  return (
    <Reveal className="section-head">
      <h2 id={id}>{title}</h2>
      {intro && <p>{intro}</p>}
    </Reveal>
  );
}
