import { NextFunction, Request, Response } from "express";
import {
  notAdminToken,
  notChefToken,
  notReceptionistToken,
  NotValidToken,
  notWaiterToken,
} from "../HandleError/Error.utils";
import { getTokenRequest } from "../services/getToken";
import { validateJSONWebToken } from "./jwt.middleware";

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  const token = getTokenRequest(req);
  const validated = validateJSONWebToken(token);

  if (validated === false) {
    res.status(401).send(NotValidToken());
    return;
  }
  if (typeof validated !== "boolean" && validated.validatedWith !== "admin") {
    res.status(401).send(notAdminToken());
    return;
  }
  next();
};

export const isWaiter = (req: Request, res: Response, next: NextFunction) => {
  const token = getTokenRequest(req);
  const validated = validateJSONWebToken(token);

  if (validated === false) {
    res.status(401).send(NotValidToken());
    return;
  }
  if (typeof validated !== "boolean" && validated.validatedWith !== "waiter") {
    res.status(401).send(notWaiterToken());
    return;
  }
  next();
};

export const isReceptionist = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = getTokenRequest(req);
  const validated = validateJSONWebToken(token);

  if (validated === false) {
    res.status(401).send(NotValidToken());
    return;
  }
  if (
    typeof validated !== "boolean" &&
    validated.validatedWith !== "receptionist"
  ) {
    res.status(401).send(notReceptionistToken());
    return;
  }
  next();
};

export const isChef = (req: Request, res: Response, next: NextFunction) => {
  const token = getTokenRequest(req);
  const validated = validateJSONWebToken(token);

  if (validated === false) {
    res.status(401).send(NotValidToken());
    return;
  }
  if (typeof validated !== "boolean" && validated.validatedWith !== "chef") {
    res.status(401).send(notChefToken());
    return;
  }
  next();
};
