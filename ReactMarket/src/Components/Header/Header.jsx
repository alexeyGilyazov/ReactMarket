import Nav from "../Nav/Nav";
import HeaderMain from "../HeaderMain/HeaderMain";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <Nav />
        <HeaderMain />
      </div>
    </div>
  );
}
