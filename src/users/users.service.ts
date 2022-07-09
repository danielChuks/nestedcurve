import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserDTO, User, UserDocument } from 'src/schema/user.schema';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel('user') private readonly userModel: Model<UserDocument>
    ) {}


    async getUsers(): Promise<User[]> {
        return this.userModel.find({}, "-password").exec();
}

}