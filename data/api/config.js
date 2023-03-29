import axios from "axios";

export const baseURRL = "http://localhost:3000";
export const rootAxios = axios.create({
  baseURL: baseURRL + "/api",
});
