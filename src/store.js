import { configureStore } from "@reduxjs/toolkit";
import TrackSlice from "./Features/TrackSlice";

export const store = configureStore({
  reducer: {
    TrackSlice: TrackSlice,
  },
});
