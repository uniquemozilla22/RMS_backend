import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import {
  NoUserFound,
  PasswordInCorrect,
  ServerHandleError,
} from "../HandleError/Error.utils";
import UserSchema, { IUser } from "../../database/Schema/User/User.schema";

const encryptPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { password } = req.body;
  if (!password) {
    res.status(500).send(ServerHandleError("There is no Password"));
    return;
  }

  const salt_rounds: number = parseInt(process.env.SALT_ROUNDS || "10");
  const salt: string = await bcrypt.genSalt(salt_rounds);
  password = await bcrypt.hash(password, salt);
  req.body = {
    ...req.body,
    password,
  };
  next();
};

export interface UserExtendedRequest extends Request {
  user?: IUser;
}

const comparePassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, password } = req.body;
  if (!password || !username) {
    res.status(500).send(ServerHandleError("Registration Failed"));
    return;
  }
  const User: IUser | null = await UserSchema.findOne({ username });
  if (!User) {
    res.status(404).send(NoUserFound({ username }));
    return;
  }

  const { password: userPassword, ...rest } = User;
  const comparePasswords: boolean = await bcrypt.compare(
    password,
    userPassword.toString()
  );
  if (!comparePasswords) {
    res.status(404).send(PasswordInCorrect({ password }));
    return;
  }
  req.body = {
    ...req.body,
    user: User,
  };
  next();
};

export { encryptPassword, comparePassword };
