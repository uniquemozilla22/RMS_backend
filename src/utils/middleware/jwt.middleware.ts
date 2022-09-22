import { IUser } from "../../database/Schema/User/User.schema";
import jwt from "jsonwebtoken";

export const createToken = (user: IUser) => {
  const { name, email, username, address, userType, phone } = user;

  const tokenizer: string =
    process.env.TOKENIZER || "RestaurantManagementSystem";
  const token = jwt.sign(
    { name, email, username, address, userType, phone },
    tokenizer,
    {
      expiresIn: "24h",
    }
  );

  return token;
};
