import { NextFunction, Request, Response } from "express"
import UserSchema, { IUser } from "../../database/Schema/User/User.schema"
import { ErrorObjectPassedError, IErrorMessage, UserAlreadyExists } from "../../utils/HandleError/Error.utils"
import { SuccesMessageWithData } from "../../utils/HandleResponse/HandleResponse.utils"
import { encryptPassword } from "../../utils/middleware/bycrypt.middleware"



const RegisterRoute = async (req:Request ,res:Response)=>{

    const { name,
        email,
        address,
        password,
        username,
        phone,
        isAdmin,
        isChef,
        isReceptionist,
        isWaiter}= req.body



    const user = new UserSchema({
        name,
        email,
        address,
        password,
        username,
        phone,
        isAdmin,
        isChef,
        isReceptionist,
        isWaiter
    })

    try{
        const User:IUser = await user.save();
        res.status(200).send(SuccesMessageWithData(`${name} id registered`,{...User}))
    }
    catch(err){
        res.status(500).send(ErrorObjectPassedError(err))
    }
}


const checkUser = async (data:IUser): Promise<IErrorMessage | undefined> =>{

    const checkByEmail =  await UserSchema.exists({email:data})
    const checkByUsername =  await UserSchema.exists({username:data})
    if(checkByEmail){
        return UserAlreadyExists( {email:data} )
    }
    else if(checkByUsername){
        return UserAlreadyExists( {username:data} )
    }
    else{
        return
    }
}


export default  RegisterRoute