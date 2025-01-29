import { NavLink } from "react-router-dom";
import clsx from "clsx";

import s from "./Footer.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footerImgText}>
        <img
          src="../../../images/Preview.png"
          alt="Фото готелю"
          className={s.imgFooter}
        />
        <p className={s.footerText}>
          © 2025 Славутич-Закарпаття. Усі права захищені.
        </p>
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
    </footer>
  );
};

export default Footer;
