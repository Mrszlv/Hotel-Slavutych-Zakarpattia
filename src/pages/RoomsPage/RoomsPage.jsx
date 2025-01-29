import { useSelector } from "react-redux";
import { selectRooms } from "../../redux/roomSlice";
import RoomCard from "../../components/RoomCard/RoomCard";

import s from "./RoomsPage.module.css";

const RoomsPage = () => {
  const rooms = useSelector(selectRooms);

  return (
    <div>
      <h1 className={s.title}>Наші номери:</h1>
      <div>
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default RoomsPage;
