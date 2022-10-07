import { resolveTxt } from "dns";
import { NextFunction, Request, Response } from "express";
import { ObjectId, Types } from "mongoose";
import NotificationSchema, {
  INotificationList,
} from "../../database/Schema/Notifications/Notification.schema";
import UserSchema, { IUser } from "../../database/Schema/User/User.schema";
import {
  ErrorNotificationCreation,
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

  console.log("here");
  const checkByEmail: IErrorMessage | undefined = await checkUserRegistration(
    email
  );
  const checkbyUsername: IErrorMessage | undefined =
    await checkUserRegistration(username);

  if (checkByEmail || checkbyUsername) {
    res.status(409).send(checkByEmail || checkbyUsername);
    return;
  }
  const {
    success: NotificationCreationStatus,
    data: notificationCreationData,
  } = await createNotificationOnDatabase([]);

  if (!NotificationCreationStatus) {
    res.status(500).end(notificationCreationData);
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
    notification: notificationCreationData,
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

const createNotificationOnDatabase = async (lists: Object) => {
  try {
    const notificationSchema = new NotificationSchema({ lists });
    const savedNotification = await notificationSchema.save();
    return { success: true, data: savedNotification._id };
  } catch (error) {
    return { success: false, data: ErrorNotificationCreation(error) };
  }
};

export default RegistrationUser;
