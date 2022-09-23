import { Application } from "express";
import AdminRouter from "./Admin/index.admin";
import ChefRouter from "./Chef/index.chef";
import GlobalRouter from "./Global/index.global";
import ReceptionistRouter from "./Receptionist/Receptionist.index";
import WaiterRouter from "./Waiter/Waiter.index";

const routes = (app: Application) => {
  app.use("/" + process.env.base, GlobalRouter);
  app.use("/admin/" + process.env.base, AdminRouter);
  app.use("/chef/" + process.env.base, ChefRouter);
  app.use("/receptionist/" + process.env.base, ReceptionistRouter);
  app.use("/waiter/" + process.env.base, WaiterRouter);
};

export default routes;
