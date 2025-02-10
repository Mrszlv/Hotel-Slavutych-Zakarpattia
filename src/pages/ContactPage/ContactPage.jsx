import s from "./ContactPage.module.css";
import { PiMapPinFill } from "react-icons/pi";

const ContactPage = () => {
  return (
    <div className={`${s.contactsCont} ${s.photoCont}`}>
      <h1 className={s.contactsTitle}>Наші контакти:</h1>
      <address className={s.contactsAddress}>
        <ul className={s.contactsList}>
          <li className={s.contactsItem}>
            <p className={s.contactsText}>Замовлення номерів:</p>
            <a href="tel:+380951379410" className={s.addText}>
              <span className={s.span}>Vodafone:</span> +380 (95) 137-94-10
            </a>
          </li>
          <li className={s.contactsItem}>
            <a href="tel:+380680660303" className={s.addText}>
              <span className={s.span}>Kyivstar:</span> +380 (68) 066-03-03
            </a>
          </li>
          <li className={s.contactsItem}>
            <a
              href="mailto:slavutych.zakarpattia@gmail.com"
              className={s.addText}
            >
              <span className={s.span}>Email:</span>{" "}
              slavutych.zakarpattia@gmail.com
            </a>
          </li>
          <li className={s.contactsItem}>
            <p className={s.contactsText}>Директор:</p>
            <a href="tel:+380951379410" className={s.addText}>
              <span className={s.span}>Vodafone:</span> +380 (50) 681-54-36
            </a>
          </li>
          <li className={s.contactsItem}>
            <a href="tel:+380680660303" className={s.addText}>
              <span className={s.span}>Kyivstar:</span> +380 (97) 338-58-94
            </a>
          </li>
        </ul>
      </address>
      <div className={s.textCont}>
        <h2 className={s.title}>Як доїхати до Поляни</h2>
        <h3 className={s.title}>Автомобілем:</h3>
        <p className={s.text}>
          Трасою Київ — Львів — Чоп (Е-50/М-06) Здійснюючи переїзд зі Львова,
          рухайтесь по трасі Київ-Чоп до м. Свалява. Зі Сваляви ідете у напрямку
          села Поляна.
        </p>
        <h3 className={s.title}>Автобусом:</h3>
        <p className={s.text}>
          зі Львова, Мукачева, Ужгорода, Івано-Франківська автобусом або
          маршрутним таксі.
        </p>
        <h3 className={s.title}>Потягом:</h3>
        <p className={s.text}>
          Будь-яким поїздом ужгородського напрямку до з/с Сваляви, далі —
          автобусом до Поляни
        </p>
        <h3 className={s.title}>Наша адреса:</h3>
        <p className={s.text}>
          вул.Курортна-Бічна 1, с.Поляна, Мукачівський р-н, Закарпатська обл.
        </p>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://maps.app.goo.gl/nSNpHwuNArrThXgw9"
          className={s.link}
        >
          Карта <PiMapPinFill className={s.icon} />
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
