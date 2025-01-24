import { configureStore } from "@reduxjs/toolkit";
import roomsReducer from "./roomSlice.js";

export const store = configureStore({
  reducer: {
    rooms: roomsReducer,
  },
});
