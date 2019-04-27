import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 5021da21c5948e8e0b5d5d63a330c92b61b5db4a6f594e515093d4d6cf9da4f6"
  }
});
