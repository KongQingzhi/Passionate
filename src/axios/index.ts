import axios from "axios";
const instance = axios.create({
  baseURL: "/dev-api",
  withCredentials: true,
  timeout: 10 * 1000,
});

export default instance;