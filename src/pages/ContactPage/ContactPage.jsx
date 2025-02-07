import s from "./ContactPage.module.css";

const ContactPage = () => {
  return (
    <div className={`${s.contactsCont} ${s.photoCont}`}>
      <h1 className={s.contactsTitle}>Наші контакти:</h1>
      <address className={s.contactsAddress}>
        <ul className={s.contactsList}>
          <li className={s.contactsItem}>
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
        </ul>
      </address>
    </div>
  );
};

export default ContactPage;
