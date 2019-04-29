import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Song A", duration: "4:01" },
    { title: "Song B", duration: "5:11" },
    { title: "Song C", duration: "6:00" },
    { title: "Song D", duration: "2:45" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
