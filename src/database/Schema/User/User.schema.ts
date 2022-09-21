

import {Schema,model} from 'mongoose'

export interface IUser {
    name: StringConstructor;
    email: StringConstructor;
    address: StringConstructor;
    password: StringConstructor;
    username: StringConstructor;
    phone?: StringConstructor;
    isAdmin: BooleanConstructor,
    isChef:BooleanConstructor,
    isReceptionist:BooleanConstructor,
    isWaiter:BooleanConstructor,
}


const User =  new Schema<IUser>({
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
      isAdmin: {
        type: Boolean,
        required: true,
      },
      isChef: {
        type: Boolean,
        required: true,
      },
      isReceptionist: {
        type: Boolean,
        required: true,
      },
      isWaiter: {
        type: Boolean,
        required: true,
      },
})


const UserSchema =  model<IUser>("users",User)

export default UserSchema