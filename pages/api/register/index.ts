import { UserAuthController } from "@/data/controller";
import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";

const apiRoute = nextConnect({
  onError(error: any, req: NextApiRequest, res: NextApiResponse) {
    res.status(501).json({
      error: `Sorry something Happened! ${error.message}`,
    });
  },
  onNoMatch(req: NextApiRequest, res: NextApiResponse) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.get((req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json({ mess: "Register user" });
});

apiRoute.post(UserAuthController.Register);

export default apiRoute;

// export const config = {
//   api: {
//     bodyParser: true,
//   },
// };
