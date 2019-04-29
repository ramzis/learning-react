import axios from "axios";

const KEY = "AIzaSyDD4VJpOX_-0OTydWVmu3DDtP8QAkMFHJw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
