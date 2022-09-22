import { Schema, model } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  address: string;
  password: string;
  username: string;
  phone?: string;
  userType: "admin" | "receptionist" | "chef" | "waiter";
}

const User = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    required: true,
  },
});

const UserSchema = model<IUser>("users", User);

export default UserSchema;
