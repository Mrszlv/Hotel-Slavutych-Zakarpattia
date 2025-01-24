import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRooms } from "../../redux/roomSlice";

const RoomDeteilsPage = () => {
  const { id } = useParams();
  const rooms = useSelector(selectRooms);

  const room = rooms.find((room) => room.id === id);

  if (!room) {
    return <p>Номер не знайдено!</p>;
  }

  return (
    <div>
      <h1>{room.name}</h1>
      <p>{room.description}</p>
      <p>Ціна: ${room.price}</p>
    </div>
  );
};

export default RoomDeteilsPage;
