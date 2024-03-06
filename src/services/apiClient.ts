import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "220c57e563454626850a544ee6755117",
  },
});
