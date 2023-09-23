import axios from "axios";

const headers = {
  Accept: 'application/json', 'Content-type': 'application/json',
  Authorization: 'Bearer ' + import.meta.env.VITE_JWT_TOKEN
}

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}api`,
  headers
})

export default api;