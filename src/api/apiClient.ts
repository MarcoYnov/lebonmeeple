import axios from "axios";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_URL_API,
  maxContentLength: 100 * 1024 * 1024,
  headers: {
    Authorization: "Bearer " + localStorage.getItem("jwtToken"),
  },
});
