import axios from "axios";
// const BASE_URL = `https://192.168.68.107:8800`;
const BASE_URL = "https://192.168.254.185:8800";

const api = axios.create({
  baseURL: BASE_URL,
});

const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

api.defaults.withCredentials = true;

export { api, axiosPrivate, BASE_URL };
