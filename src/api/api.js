import axios from "axios";

const api = axios.create({
  baseURL: "https://smartlife-tracker-production.up.railway.app", // JSON server URL
});

export default api;