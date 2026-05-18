import { motion } from "framer-motion";
import logo from "../../img/logo.svg";
import Btn from "../Btn/Btn";
import "./Nav.css";

export default function Nav() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.7 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -150, y: -70 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <header>
      <nav className="nav">
        <div className="nav__logo">
          <motion.img
            transition={{ default: { duration: 0.3 }, hover: { delay: 0.2 } }}
            className="nav__logo_cicle"
            width={74}
            src={logo}
            alt="Логотип"
          />
          <p className="nav__logo_text">
            <span className="nav__logo_textRed">POD</span>
            <br />
            OF <br />
            CAST
          </p>
        </div>
        <motion.ul
          className="nav__list"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.li className="nav__list_item" variants={itemVariants}>
            <a href="#">Episodes</a>
          </motion.li>
          <motion.li className="nav__list_item" variants={itemVariants}>
            <a href="#">About</a>
          </motion.li>
          <motion.li className="nav__list_item" variants={itemVariants}>
            <a href="#">More</a>
          </motion.li>
        </motion.ul>

        <div style={{ display: "flex", gap: "20px" }}>
          <Btn title="RECENT EPISODES" btnWhite={true} />
          <Btn title="SUBSCRIBE" />
        </div>
      </nav>
    </header>
  );
}
