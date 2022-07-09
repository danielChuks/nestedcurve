import { Controller } from '@nestjs/common';
import { Param, Get, Post, Delete } from '@nestjs/common';
import { UsersService} from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService){}
    
    @Get('')
    async getUser() {
        return await this.userService.getUsers();
    }
}
