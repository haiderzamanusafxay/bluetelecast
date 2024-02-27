import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  artist: "",
  album: "",
  trackURL: "",
  albumArt: "",
  duration: "",
  currentTrack: 0,
  isLoaded: false,
  isPlaying: false,
  volume: 1,
};

export const counterSlice = createSlice({
  name: "changeSong",
  initialState,
  reducers: {
    changeSong: (state, action) => {
      state.currentTrack = action.payload;
      state.artist = action.payload.artist;
      state.album = action.payload.album;
      state.albumArt = action.payload.albumArt;
      state.duration = action.payload.duration;
      state.title = action.payload.title;
      state.isLoaded = true;
      state.isPlaying = true;
      state.trackURL = action.payload.trackURL;
      state.volume = action.payload.volume;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeSong } = counterSlice.actions;

export default counterSlice.reducer;
