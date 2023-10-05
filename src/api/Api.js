import axios from "axios";

const Api = axios.create({
  baseURL: `https://192.168.68.108:8800`,
});

Api.defaults.withCredentials = true;

export default Api;
