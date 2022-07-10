import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';


export type UserDocument  = User & Document;

Schema()
export class User { 
    @Prop()
    email: string;

    @Prop()
    username:  string;

    @Prop()
    password: string 


    @Prop()
    createdAt: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

export const userDTO = {
    email: " ",
    username: " ",
    password: " ",
}
