import { Link } from "react-router-dom";
import s from "./RoomCard.module.css";

const RoomCard = ({ room }) => {
  return (
    <div className={s.roomCont}>
      <h2>{room.name}</h2>
      <div className={s.imgText}>
        <img src={room.avatar} alt={room.name} className={s.img} />
        <div className={s.textCont}>
          <p>{room.description}</p>
          <p>Ціна: ₴{room.price}</p>
          <Link to={`/rooms/${room.id}`} className={s.link}>
            Деталі
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
