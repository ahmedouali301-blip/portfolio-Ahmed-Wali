export default function Monogram({ size = 36 }) {
  return (
    <span className="monogram" style={{ "--size": `${size}px` }} aria-hidden="true">
      AW
      <i />
    </span>
  );
}
