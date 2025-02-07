import s from "./Footer.module.css";
import { LiaFacebook } from "react-icons/lia";
import { TbBrandBooking } from "react-icons/tb";

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
      <div className={s.footerLinksCont}>
        <a
          rel="noopener noreferrer"
          target="_blank"
          className={s.footerLink}
          href="https://www.facebook.com/search/top?q=%D1%81%D0%BB%D0%B0%D0%B2%D1%83%D1%82%D0%B8%D1%87-%D0%B7%D0%B0%D0%BA%D0%B0%D1%80%D0%BF%D0%B0%D1%82%D1%82%D1%8F"
        >
          <LiaFacebook className={s.footerIcon} />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          className={s.footerLink}
          href="https://www.booking.com/hotel/ua/slavutych-zakarpattya.ru.html?aid=356980&label=gog235jc-1FCAso6QFCFXNsYXZ1dHljaC16YWthcnBhdHR5YUgpWANo6QGIAQGYASG4ARfIAQzYAQHoAQH4AQyIAgGoAgO4ArXYk70GwAIB0gIkODRmYjVhNjMtOWUwNy00ZDgwLThjOWQtYmIyODFjN2UxZGQy2AIG4AIB&sid=1f2681111bfaea4f9a53423d6dc960f3&dest_id=-1051227&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1738908808&srpvid=db402bc0597d011b&type=total&ucfs=1&"
        >
          <TbBrandBooking className={s.footerIcon} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
