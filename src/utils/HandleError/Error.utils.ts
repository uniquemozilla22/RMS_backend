

export interface IErrorMessage {
    success:boolean;
    status:Number;
    message:string;
}

export interface IErrorMessageWithData {
    success:boolean;
    status:Number;
    message:string;
    data:any;
}

export interface IErrorMessageWithErrorObject {
    success:boolean;
    status:Number;
    message:string;
    data:Error;
}

export const ServerHandleError = (message:string):IErrorMessage=>{
    return {success:false, status: 500, message}
}

export const UserAlreadyExists = (data:any):IErrorMessageWithData=>({success:false,status:409, message:"User Already Exists", data})
export const NoUserFound = (data:any):IErrorMessageWithData=>({success:false,status:404, message:"User not Found", data})
export const PasswordInCorrect = (data:any):IErrorMessageWithData=>({success:false,status:403, message:"Password is incorrect", data})


export const ErrorObjectPassedError = (err: any) => ({success:false, status: 500, message:err.message, data:err})
