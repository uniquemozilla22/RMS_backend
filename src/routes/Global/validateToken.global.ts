import { Request, Response } from "express";
import {
  NotValidToken,
  UserNotLoggedIn,
} from "../../utils/HandleError/Error.utils";
import { validateJSONWebToken } from "../../utils/middleware/jwt.middleware";
import { getEpochTime } from "../../utils/services/GetTime";

const validateToken = (req: Request, res: Response) => {
  const token: string | undefined = req.headers.authorization?.split(" ")[1];

  if (!token) {
    res.status(401).send(UserNotLoggedIn());
    return;
  }
  const validated = validateJSONWebToken(token);

  if (!validated) {
    res.status(401).send(NotValidToken());
    return;
  }
  //   const validatedBoolean = validated.exp - getEpochTime();
  res.send(validated);
};

export default validateToken;
