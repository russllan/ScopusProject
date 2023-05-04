import { Link } from "react-router-dom";
import scss from "./Header.module.scss";

function Header() {
  return (
    <div className={scss.Header}>
      <div className={scss.wrapper}>
        <Link to={"/"} className={scss.link}>
          <h1>Scopus</h1>
        </Link>
        <h4>Bishkek</h4>
        <h4>Kyrgyzstan</h4>
      </div>
    </div>
  );
}

export default Header;