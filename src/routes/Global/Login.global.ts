import { Request, Response } from "express"



const LoginGlobalRoute = (req:Request ,res:Response)=>{

    const {username , password} = req.body

    console.log(req.body)

    res.send(username)
}


export default  LoginGlobalRoute