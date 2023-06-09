import axios from "axios";
import jwt from "jsonwebtoken";

// export const baseURRL = "https://hag902.vercel.app";
export const baseURRL = "http://localhost:3000";
export const rootAxios = axios.create({
  baseURL: baseURRL + "/api",
});

export const CreateAccessToken = (user: any) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      admin: user.admin,
    },
    process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY as string,
    { expiresIn: "300s" }
  );
};

export const CreateRefreshToken = (user: any) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      admin: user.admin,
    },
    process.env.NEXT_PUBLIC_REFRESH_TOKEN_KEY as string,
    { expiresIn: "300s" }
  );
};
