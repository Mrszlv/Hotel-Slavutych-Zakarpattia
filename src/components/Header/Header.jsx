import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

import clsx from "clsx";
import { useState } from "react";

import { RxDropdownMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={s.header}>
      <div className={s.logoTitle}>
        <img
          src="../../../images/Preview.png"
          alt="Logo"
          className={s.imgLogo}
        />
        <h3 className={s.title}>
          ГK <span className={s.titleSpan}>Славутич-Закарпаття</span>
        </h3>
        <nav className={s.navDextop}>
          <NavLink to={"/"} className={buildLinkClass}>
            Головна
          </NavLink>
          <NavLink to="/rooms" className={buildLinkClass}>
            Номери
          </NavLink>
          <NavLink to="/contacts" className={buildLinkClass}>
            Контакти
          </NavLink>
          <NavLink to="/region" className={buildLinkClass}>
            Цікаве
          </NavLink>
        </nav>
        <button onClick={handleOpenMenu} className={s.menuBtn}>
          <RxDropdownMenu />
        </button>
      </div>
      {menuOpen && (
        <div className={s.modalMenu}>
          <button onClick={handleOpenMenu} className={s.closeBtnMenu}>
            <IoClose />
          </button>
          <nav className={s.navMobile}>
            <NavLink to="/" className={s.linkModal} onClick={handleOpenMenu}>
              Головна
            </NavLink>
            <NavLink
              to="/rooms"
              className={s.linkModal}
              onClick={handleOpenMenu}
            >
              Номери
            </NavLink>
            <NavLink
              to="/contacts"
              className={s.linkModal}
              onClick={handleOpenMenu}
            >
              Контакти
            </NavLink>
            <NavLink
              to="/region"
              className={s.linkModal}
              onClick={handleOpenMenu}
            >
              Цікаве
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
