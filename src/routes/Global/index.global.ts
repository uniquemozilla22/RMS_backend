import express from "express";
import { isChef } from "../../utils/middleware/authentication.moddleware";
import { comparePassword } from "../../utils/middleware/bycrypt.middleware";
import LoginGlobalRoute from "./Login.global";
import validateToken from "./validateToken.global";

const GlobalRouter = express.Router();

GlobalRouter.post("/login", comparePassword, LoginGlobalRoute);
GlobalRouter.get("/validatetoken", isChef, validateToken);

export default GlobalRouter;
