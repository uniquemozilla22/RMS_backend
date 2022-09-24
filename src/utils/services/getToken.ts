import { Request } from "express";

export const getTokenRequest = (req: Request) =>
  req.headers.authorization?.split(" ")[1] || "";
