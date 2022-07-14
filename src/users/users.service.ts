import { Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {  User, UserDocument } from 'src/schema/user.model';
import { UserDto } from 'src/dtos/users.Dto';


@Injectable()
export class UsersService {
    constructor(
        @InjectModel('user') private userModel: Model<UserDocument>
    ) {}


async getUsers(): Promise<User[]> {
    return this.userModel.find({}, "-password").exec()
}
    
async createUsers(user: UserDto): Promise<UserDocument> {
    const userExist = await this.userModel.findOne({email: user.email}).exec()
        if(userExist) throw new HttpException("User with this email already exsist", HttpStatus.BAD_REQUEST)

    const createUser = new this.userModel({
        ...user,
        createdAt: new Date().toISOString(),
    })
    return await createUser.save()
}

async getUsersById(_id: string ): Promise<User> {
    return this.userModel.findById({_id}, "-password").exec()
}
}
