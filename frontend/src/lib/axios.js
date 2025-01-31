import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chat-app-eight-tawny-62.vercel.app/" : "/api",
  withCredentials: true,
});