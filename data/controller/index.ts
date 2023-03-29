import { NextApiRequest, NextApiResponse } from "next";
import bcryptjs from "bcryptjs";
import db from "../db/models";
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
          return res
            .status(200)
            .json({ mess: "Login success!", User: userLogin });
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
};
