import "./Btn.css";

export default function Btn({ title, btnWhite }) {
  return (
    <button className={btnWhite ? "btn btnWhite" : "btn"}>{title}</button>
  );
}
