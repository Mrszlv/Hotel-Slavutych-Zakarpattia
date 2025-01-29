import { Link } from "react-router-dom";
import s from "./RoomCard.module.css";

const RoomCard = ({ room }) => {
  return (
    <div className={s.roomCont}>
      <h2 className={s.titleRoom}>{room.name}</h2>
      <div className={s.imgText}>
        <img src={room.avatar} alt={room.name} className={s.img} />
        <div className={s.textCont}>
          <p className={s.texstDesc}>{room.description}</p>
          <p className={s.textPrice}>Ціна за ніч: ₴{room.price}</p>
          <Link to={`/rooms/${room.id}`} className={s.linkCard}>
            Деталі
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
