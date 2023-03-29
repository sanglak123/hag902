import { NextApiRequest, NextApiResponse } from "next";
import { getCookies, getCookie, setCookie, deleteCookie } from "cookies-next";
import bcryptjs from "bcryptjs";
import db from "../db/models";
import { CreateAccessToken, CreateRefreshToken } from "../api/config";

const DB: any = db;
const { Users } = DB;
export const UserAuthController = {
  Login: async (req: NextApiRequest, res: NextApiResponse) => {
    const { userName, pass } = req.body;
    try {
      const userLogin = await Users.findOne({
        where: {
          userName: userName,
        },
      });
      if (userLogin) {
        if (bcryptjs.compareSync(pass, userLogin.pass)) {
          const newAcessToken = CreateAccessToken(userLogin);
          const newRefreshToken = CreateRefreshToken(userLogin);
          setCookie("refreshToken", newRefreshToken, {
            req,
            res,
            httpOnly: true,
            secure: true,
            path: "/",
            sameSite: "strict",
            maxAge: 60 * 1000 * 60 * 24,
          });

          return res.status(200).json({
            User: userLogin,
            accessToken: newAcessToken,
          });
        } else {
          return res.status(400).json({ error: "Password wrong!" });
        }
      } else {
        return res.status(404).json({ error: "User not found!" });
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  Register: async (req: NextApiRequest, res: NextApiResponse) => {
    const { userName, pass } = req.body;
    try {
      const [user, create] = await Users.findOrCreate({
        where: {
          userName: userName,
        },
      });
      if (!create) {
        return res.status(400).json({ error: "User already exits!" });
      } else {
        const salt = bcryptjs.genSaltSync(10);
        const newPass = bcryptjs.hashSync(pass, salt);
        user.set({
          userName: userName,
          pass: newPass,
        });
        await user.save().then((newUser: any) => {
          newUser.pass = null;
          return res
            .status(201)
            .json({ mess: "Register success!", User: newUser });
        });
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};
