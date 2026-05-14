import axios from "axios";

export const api = axios.create({
  baseURL: "https://call-of-worker-backend.onrender.com/",
});
