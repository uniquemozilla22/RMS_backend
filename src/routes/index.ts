import { Application } from "express"
import GlobalRouter from "./Global/index.global"



const routes = (app:Application)=>{
    app.use("/"+process.env.base,GlobalRouter)
}


export default routes