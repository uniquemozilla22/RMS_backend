import { Request, Response } from "express";
import {
  NotValidToken,
  UserNotLoggedIn,
} from "../../utils/HandleError/Error.utils";
import { validateJSONWebToken } from "../../utils/middleware/jwt.middleware";

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
  res.send(validated);
};

export default validateToken;
