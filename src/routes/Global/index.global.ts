import express from "express";
import {
  comparePassword,
  encryptPassword,
} from "../../utils/middleware/bycrypt.middleware";
import LoginGlobalRoute from "./Login.global";
import RegisterRoute from "./Register.global";

const GlobalRouter = express.Router();

GlobalRouter.post("/login", comparePassword, LoginGlobalRoute);
GlobalRouter.post("/register", encryptPassword, RegisterRoute);

export default GlobalRouter;
