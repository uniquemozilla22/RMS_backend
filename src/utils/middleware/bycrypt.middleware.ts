import { NextFunction, Request, Response } from "express"
import bcrypt from 'bcrypt'
import { ServerHandleError } from "../HandleError/Error.utils"

const encryptPassword= async (req:Request,res:Response, next:NextFunction) =>{
    let {password} = req.body
    if(!password){
        res.status(500).send(ServerHandleError("There is no Password"))
        return;
    }
    
    const salt_rounds:number = parseInt(process.env.SALT_ROUNDS || '10') 
    const salt:string  = await bcrypt.genSalt(salt_rounds);
    password = await bcrypt.hash(password, salt);
   req.body ={
    ...req.body,
    password
   };
   next();
}

const decryptPassword = () =>{
    
}


export {encryptPassword,decryptPassword}