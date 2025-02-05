import s from "./Footer.module.css";

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
    </footer>
  );
};

export default Footer;
