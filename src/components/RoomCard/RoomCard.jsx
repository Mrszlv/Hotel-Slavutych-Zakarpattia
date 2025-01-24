import { Link } from "react-router-dom";

const RoomCard = ({ room }) => {
  return (
    <div>
      <h2>{room.name}</h2>
      <p>{room.description}</p>
      <p>Ціна: ${room.price}</p>
      <Link to={`/rooms/${room.id}`}></Link>
    </div>
  );
};

export default RoomCard;
