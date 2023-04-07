import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://agrohub-b2b-backend.vercel.app",
});
