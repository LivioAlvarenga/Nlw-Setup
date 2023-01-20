import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.1.18:3000",
});
