import { Schema, model, InferSchemaType, Types } from "mongoose";

const User = new Schema({
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
    enum: ["admin", "receptionist", "chef", "waiter"],
    required: true,
  },
  notification: {
    type: Types.ObjectId,
    ref: "notifications",
  },
});

export type IUser = InferSchemaType<typeof User>;

const UserSchema = model<IUser>("users", User);

export default UserSchema;
