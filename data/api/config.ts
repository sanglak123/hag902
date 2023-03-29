import axios from "axios";

export const baseURRL = "https://hag902.vercel.app";
export const rootAxios = axios.create({
  baseURL: baseURRL + "/api",
});
