import logo from "../../img/logo.svg";
// import "./Header.css";

export default function Header() {
  return (
    <>
      <header>
        <nav className="flex justify-between ">
          <div className="relative">
            <img width={100} src={logo} alt="Логотип" />
            <p className="absolute top-8 left-15 font-extrabold">
              <span style={{ color: "red" }}>POD</span>
              <br />
              OF <br />
              CAST
            </p>
          </div>
          <ul className="flex items-center gap-20 ">
            <li className="text-2xl font-extrabold">Episodes</li>
            <li className="text-2xl font-extrabold">About</li>
            <li className="text-2xl font-extrabold">More</li>
          </ul>

          <div className="flex gap-5">
            <button className='border rounded-lg'>RECENT EPISODES</button>
            <button>SUBSCRIBE</button>
          </div>
        </nav>
      </header>
    </>
  );
}
