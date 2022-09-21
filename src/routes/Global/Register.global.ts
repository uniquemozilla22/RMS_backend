import { NextFunction, Request, Response } from "express"
import UserSchema from "../../database/Schema/User/User.schema"
import { encryptPassword } from "../../utils/middleware/bycrypt.middleware"



const RegisterRoute = (req:Request ,res:Response)=>{

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


        console.log(password)

    // const user = new UserSchema({
    //     name,
    //     email,
    //     address,
    //     password,
    //     username,
    //     phone,
    //     isAdmin,
    //     isChef,
    //     isReceptionist,
    //     isWaiter
    // })

    // user.save()

    res.send("Registered application"+username)
}


export default  RegisterRoute