import s from "./NotFoundPage.module.css";
import { PiSmileySad } from "react-icons/pi";

const NotFoundPage = () => {
  return (
    <div className={`${s.notCont} ${s.photoCont}`}>
      <p className={s.text}>Помилка: 404</p>
      <h1 className={s.title}>Сторінку не знайдено</h1>
      <PiSmileySad className={s.icon} />
    </div>
  );
};

export default NotFoundPage;
