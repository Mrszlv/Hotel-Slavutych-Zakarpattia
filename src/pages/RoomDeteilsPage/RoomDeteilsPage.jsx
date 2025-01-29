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
        <button onClick={prevImage} className={s.btnDeteils}>
          <GrFormPreviousLink className={s.iconDeteilis} />
        </button>
        <img
          src={room.images[currentImage]}
          alt={`${room.name} - photo ${currentImage + 1}`}
          className={s.img}
        />
        <button onClick={nextImage} className={s.btnDeteils}>
          <GrFormNextLink className={s.iconDeteilis} />
        </button>
      </div>
      <div className={s.textContDeteils}>
        <p>{room.description}</p>
        <p>Ціна: ₴{room.price}</p>
        <Link to={"/rooms"}>Номери</Link>
      </div>
    </div>
  );
};

export default RoomDeteilsPage;
