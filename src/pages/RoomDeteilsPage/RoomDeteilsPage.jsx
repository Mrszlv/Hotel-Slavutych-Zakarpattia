import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRooms } from "../../redux/roomSlice";
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";

import s from "./RoomDeteilsPage.module.css";

const RoomDeteilsPage = () => {
  const { id } = useParams();
  const rooms = useSelector(selectRooms);
  const room = rooms.find((room) => room.id === parseInt(id));
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((current) => (current + 1) % room.images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (current) => (current - 1 + room.images.length) % room.images.length
    );
  };

  if (!room) {
    return <p>Номер не знайдено!</p>;
  }

  return (
    <div className={s.roomCont}>
      <h1 className={s.title}>{room.name}</h1>
      <div className={s.imgCont}>
        <button onClick={prevImage} className={s.btnGallery}>
          <GrFormPreviousLink className={s.iconDeteilis} />
        </button>
        <img
          src={room.images[currentImage]}
          alt={`${room.name} - photo ${currentImage + 1}`}
          className={s.img}
        />
        <button onClick={nextImage} className={s.btnGallery}>
          <GrFormNextLink className={s.iconDeteilis} />
        </button>
      </div>
      <div className={s.textContDeteils}>
        <p className={s.textDeteils}>{room.description}</p>
        <p className={s.textPrice}>Ціна за ніч: ₴{room.price}</p>
        <div className={s.linkCont}>
          <Link to={"/rooms"} className={s.linkDeteils}>
            Назад
          </Link>
          <Link to={"/contacts"} className={s.linkDeteils}>
            Бронювати
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomDeteilsPage;
