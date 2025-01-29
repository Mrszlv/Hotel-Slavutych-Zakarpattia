import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logoTitle}>
        <img
          src="../../../public/images/Preview.png"
          alt="Logo"
          className={s.imgLogo}
        />
        <h3 className={s.title}>
          Готельний комплекс{" "}
          <span className={s.titleSpan}>Славутич-Закарпаття</span>
        </h3>
      </div>
      <nav className={s.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Головна
        </NavLink>
        <NavLink to="/rooms" className={buildLinkClass}>
          Номери
        </NavLink>
        <NavLink to="/contacts" className={buildLinkClass}>
          Контакти
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
