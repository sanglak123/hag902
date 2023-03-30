import { AppDispatch } from "@/redux/store";
import { EmptyObject, ThunkDispatch } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { rootAxios } from "./config";
export const UserAuthApi = {
  Login: async (
    userName: string,
    pass: string,
    router: any,
    dispatch: AppDispatch,
    LoginSuccess: any
  ) => {
    await rootAxios({
      method: "POST",
      url: "/login",
      data: {
        userName,
        pass,
      },
    })
      .then((res) => {
        toast.success("Login success!");
        router.replace("/");
        dispatch(LoginSuccess(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  },
  Register: async (userName: string, pass: string, router: any) => {
    await rootAxios({
      method: "POST",
      url: "/register",
      data: {
        userName,
        pass,
      },
    })
      .then((res) => {
        console.log(res.data);
        router.replace("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
