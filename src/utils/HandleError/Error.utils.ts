

export interface IErrorMessage {
    success:boolean;
    status:Number;
    message:string;
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


export const ErrorObjectPassedError = (err: any) => ({success:false, status: 500, message:err.message, data:err})
