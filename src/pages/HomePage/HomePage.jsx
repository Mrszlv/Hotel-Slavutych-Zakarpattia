import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.homeCont}>
      <img
        src="https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249381/%D1%82%D0%B5%D1%80%D0%B8%D1%82%D0%BE%D1%80%D1%96%D1%8F-3_yzcbm0.jpg"
        alt="Фото готелю"
        className={s.img}
      />
      <div className={s.homeTitleCont}>
        <h1 className={s.title}>Ласкаво просимо до нашого готелю!</h1>
        <p className={s.text}>
          ГК «Славутич Закарпаття» знаходиться на території санаторію «Сонячне
          Закарпаття» 80 м від водолікарні поміж мальовничих карпатських гір в
          оточенні старих лісів з найчистішим фітонцидним повітрям. Працює
          заклад починаючи з 2003 року, за цей час сотні тисяч гостей залишилися
          вдячними за результативне оздоровлення, відпочинок в горах за
          доступними цінами. Зараз комплекс являє собою 3 великі корпуси з
          сучасним ремонтом та всіма необхідними зручностями (холодильник,
          телевізор, посуд, чайник, кондиціонер, фен в с/н). Є своя
          автостоянка(платна(50₴/доба)) та відкритий літній басейн (травень -
          вересень) за окрему плату. Wi-Fi, 4G LTE, кабельне телебачення. На
          території санаторію є салони краси, магазини сувенірів, продовольчих
          та промислових товарів, кінотеатром, сауни, більярд, спортивні
          майданчики з необхідним обладнанням, озеро, два речові ринки.{" "}
        </p>
        <p className={s.textNext}>
          Відчуйте комфорт та затишок відпочинку в горах!
        </p>
        <div className={s.imgCont}>
          <img
            src="https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249381/%D1%82%D0%B5%D1%80%D0%B8%D1%82%D0%BE%D1%80%D1%96%D1%8F-4_sirg77.jpg"
            alt="Фото готелю"
            className={s.imgNext}
          />
          <img
            src="https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249381/%D1%82%D0%B5%D1%80%D0%B8%D1%82%D0%BE%D1%80%D1%96%D1%8F-2_fqrmyc.jpg"
            alt="Фото готелю"
            className={s.imgNext}
          />
          <img
            src="https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249379/%D1%82%D0%B5%D1%80%D0%B8%D1%82%D0%BE%D1%80%D1%96%D1%8F-1_t5bkc1.jpg"
            alt="Фото готелю"
            className={s.imgNext}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
