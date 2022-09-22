import { IUser } from "../../database/Schema/User/User.schema";
import jwt from "jsonwebtoken";

export interface ITokenSigner {
  name: string;
  email: string;
  username: string;
  address: string;
  userType: "admin" | "receptionist" | "chef" | "waiter";
  phone?: string;
}

export const createToken = (user: ITokenSigner) => {
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
