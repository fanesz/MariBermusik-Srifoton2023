import axios from "axios";

const JWTTOKEN = import.meta.env.VITE_JWT_TOKEN

const headers = {
  'Authorization': `Bearer ${JWTTOKEN}`,
  Accept: 'application/json', 'Content-type': 'application/json',
}

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}api`,
  headers
})

export default api;