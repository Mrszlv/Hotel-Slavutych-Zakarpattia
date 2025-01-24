import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rooms: [
    {
      id: 1,
      name: "Luxe: 3 rooms",
      price: 2890,
      description:
        "Люкс трьох-кімнатний з двома санвузлами та усіма зручностями.",
    },
    {
      id: 2,
      name: "Luxe: 2 rooms",
      price: 2590,
      description: "Люкс дво-кімнатний з усіма зручностями.",
    },
    {
      id: 3,
      name: "Suite Room",
      price: 2290,
      description: "Напівлюкс тримісний з усіма зручностями.",
    },
    {
      id: 4,
      name: "Standart",
      price: 2090,
      description: "Стандартний двомісний номер з усіма зручностями.",
    },
    {
      id: 5,
      name: "Economy",
      price: 1790,
      description: "Двомісний номер з усіма зручностями та зменшеною площею.",
    },
  ],
};

const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {},
});

export const selectRooms = (state) => state.rooms.rooms;
export default roomsSlice.reducer;
