import { IUser } from "../../database/Schema/User/User.schema";
import jwt, { JwtPayload } from "jsonwebtoken";
import { getDifferenceInSeconds, getEpochTime } from "../services/GetTime";

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

  const tokenizer: string = process.env.TOKENIZER || "RestaurantManager";
  const token = jwt.sign(
    { name, email, username, address, userType, phone },
    tokenizer,
    {
      expiresIn: "24h",
    }
  );

  return token;
};

export interface IValidatedToken {
  isValidated: boolean;
  timeRemainingInSeconds: number;
  validatedWith: string;
}

export const validateJSONWebToken = (
  token: string
): IValidatedToken | boolean => {
  const validateToken: string | JwtPayload = jwt.verify(
    token,
    process.env.TOKENIZER || "RestaurantManager"
  );
  if (!validateToken || typeof validateToken === "string") {
    console.log("Validation is a string", validateToken);
    return false;
  }
  const timeRemainingInSeconds: number = validateToken.exp
    ? getDifferenceInSeconds(validateToken.exp)
    : 0;
  const isValidated = Math.sign(timeRemainingInSeconds) === 1 ? true : false;
  if (isValidated) {
    return {
      isValidated,
      timeRemainingInSeconds,
      validatedWith: validateToken.userType,
    };
  } else {
    return false;
  }
};
