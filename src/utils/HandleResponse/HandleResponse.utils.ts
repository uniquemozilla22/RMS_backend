export interface ISuccessMessage {
  success: boolean;
  status: number;
  message: string;
  data?: any;
}

export const SuccesMessageWithData = (
  message: string,
  data: any
): ISuccessMessage => ({
  success: true,
  status: 200,
  message,
  data,
});
export const LoginSuccessfull = (
  message: string,
  data: any
): ISuccessMessage => ({
  success: true,
  status: 200,
  message,
  data,
});

export const ValidatedTicket = (data: any) => ({
  success: true,
  status: 200,
  message: "The user is already logged in to the application.",
  data,
});
