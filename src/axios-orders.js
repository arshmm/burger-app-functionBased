import axios from "axios";

const instance = axios.create({
  baseURL: "https://burgerapp-aaee4.firebaseio.com/",
});

export default instance;
