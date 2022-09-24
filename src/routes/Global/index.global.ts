import express from "express";
import {
  isAdmin,
  isChef,
  isReceptionist,
  isWaiter,
} from "../../utils/middleware/authentication.moddleware";
import {
  comparePassword,
  encryptPassword,
} from "../../utils/middleware/bycrypt.middleware";
import LoginGlobalRoute from "./Login.global";
import RegisterRoute from "./Register.global";
import validateToken from "./validateToken.global";

const GlobalRouter = express.Router();

GlobalRouter.post("/login", comparePassword, LoginGlobalRoute);
GlobalRouter.post("/register", encryptPassword, RegisterRoute);
GlobalRouter.get("/validatetoken", isWaiter, validateToken);

export default GlobalRouter;
