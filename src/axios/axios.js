import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://agrohub.vercel.app",
});
