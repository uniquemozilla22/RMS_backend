import { Request, Response } from "express";
import { IUser } from "../../database/Schema/User/User.schema";
import { LoginSuccessfull } from "../../utils/HandleResponse/HandleResponse.utils";
import { createToken } from "../../utils/middleware/jwt.middleware";

const LoginGlobalRoute = (req: Request, res: Response) => {
  const { username, name, address, phone, userType }: IUser = req.body.user;
  const user = { username, name, address, phone, userType };
  const token: string = createToken(user);

  res
    .status(200)
    .send(LoginSuccessfull("Login Successfull", { ...user, token }));
};

export default LoginGlobalRoute;
