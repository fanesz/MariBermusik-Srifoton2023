import axios from "axios";

const secretToken = import.meta.env.VITE_API_KEY;

const headers = {
  Accept: "application/json",
  "Content-type": "application/json",
  "api-key": secretToken,
};

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}api`,
  headers,
});

export default api;
