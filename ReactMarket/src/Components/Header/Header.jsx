import Nav from "../Nav/Nav";
import HeaderMain from "../HeaderMain/HeaderMain";
import "./Header.css";
import Supported from "../Supported/Supported";

export default function Header() {
  return (
    <div className="header">
      <Nav />
      <HeaderMain />
    </div>
  );
}
