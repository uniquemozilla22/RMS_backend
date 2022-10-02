import { resolveTxt } from "dns";
import { NextFunction, Request, Response } from "express";
import UserSchema, { IUser } from "../../database/Schema/User/User.schema";
import {
  ErrorObjectPassedError,
  IErrorMessage,
  UserAlreadyExists,
} from "../../utils/HandleError/Error.utils";
import { SuccesMessageWithData } from "../../utils/HandleResponse/HandleResponse.utils";

const RegistrationUser = async (req: Request, res: Response) => {
  const {
    name,
    email,
    address,
    password,
    username,
    phone,
    type: userType,
  } = req.body;

  const checkByEmail: IErrorMessage | undefined = await checkUserRegistration(
    email
  );
  const checkbyUsername: IErrorMessage | undefined =
    await checkUserRegistration(username);

  if (checkByEmail || checkbyUsername) {
    res.status(409).send(checkByEmail || checkbyUsername);
    return;
  }
  const user = new UserSchema({
    name,
    email,
    address,
    password,
    username,
    phone,
    userType,
  });

  try {
    const {
      name: userName,
      password: userPassword,
      ...rest
    }: IUser = await user.save();
    res.status(200).send(
      SuccesMessageWithData(`${name} id registered`, {
        ...rest,
        name: userName,
      })
    );
  } catch (err) {
    res.status(500).send(ErrorObjectPassedError(err));
  }
};

const checkUserRegistration = async (
  data: IUser
): Promise<IErrorMessage | undefined> => {
  const checkByEmail = await UserSchema.exists({ email: data });
  const checkByUsername = await UserSchema.exists({ username: data });
  if (checkByEmail) {
    return UserAlreadyExists({ email: data });
  } else if (checkByUsername) {
    return UserAlreadyExists({ username: data });
  } else {
    return;
  }
};

export default RegistrationUser;