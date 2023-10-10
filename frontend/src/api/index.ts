import axios from "axios";

const secretToken = import.meta.env.VITE_API_KEY;

const headers = {
  Accept: "application/json",
  "Content-type": "application/json",
  "x-api-key": secretToken, // Include the API key here
};

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}api`,
  headers,
});

export default api;
