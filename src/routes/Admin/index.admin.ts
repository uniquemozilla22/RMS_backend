import express from "express";
import { isAdmin } from "../../utils/middleware/authentication.moddleware";
import { encryptPassword } from "../../utils/middleware/bycrypt.middleware";
import RegistrationUser from "./Register.admin";

const AdminRouter = express.Router();

AdminRouter.post("/register", isAdmin, encryptPassword, RegistrationUser);

export default AdminRouter;
