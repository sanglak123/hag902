import { rootAxios } from "./config";
export const UserAuthApi = {
  Login: async (userName: string, pass: string, router: any) => {
    await rootAxios({
      method: "POST",
      url: "/login",
      data: {
        userName,
        pass,
      },
    })
      .then((res) => {
        console.log(res.data);
        router.replace("/");
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
