import logo from "../../img/logo.svg";
import Btn from "../Btn/Btn";
import "./Nav.css";

export default function Nav() {
  return (
    <>
      <header>
        <nav className="nav">
          <div className="nav__logo">
            <img width={100} src={logo} alt="Логотип" />
            <p className="nav__logo_text ">
              <span className="nav__logo_textRed">POD</span>
              <br />
              OF <br />
              CAST
            </p>
          </div>
          <ul className="nav__list">
            <li className="nav__list_item">Episodes</li>
            <li className="nav__list_item">About</li>
            <li className="nav__list_item">More</li>
          </ul>

          <div style={{ display: "flex", gap: "20px" }}>
            <Btn title="RECENT EPISODES" btnWhite={true} />
            <button></button>
            <Btn title="SUBSCRIBE" />
          </div>
        </nav>
      </header>
    </>
  );
}
