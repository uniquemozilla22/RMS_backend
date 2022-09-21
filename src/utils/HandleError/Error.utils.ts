

export interface IErrorMessage {
    success:boolean;
    status:Number;
    message:string;
}


export const ServerHandleError = (message:string):IErrorMessage=>{
    return {success:false, status: 500, message}
}
