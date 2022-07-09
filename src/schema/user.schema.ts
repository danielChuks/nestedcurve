import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import mongoose from "mongoose";


export type UserDocument  = User & mongoose.Document;

Schema()
export class User { 
    @Prop({ required:  true })
    email: string;

    @Prop({ required:  true })
    username:  string;

    @Prop({required: true })
    password: string 


    @Prop({ required: true })
    createdAt: string;
}


export const  UserSchema = SchemaFactory.createForClass(User);


export const UserDTO = {
    email: "",
    username: "",
    password: ""

}