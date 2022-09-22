import { Request, Response } from "express";
import { createToken } from "../../utils/middleware/jwt.middleware";

const LoginGlobalRoute = (req: Request, res: Response) => {
  const { user } = req.body;
  const token = createToken(user);
};

export default LoginGlobalRoute;
