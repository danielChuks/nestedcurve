import { Controller, UsePipes, ValidationPipe, Body, Post, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService} from './users.service';
import { UserDto } from 'src/dtos/users.Dto'; 


@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService){}
    
    @Get('')
    async getUser() {
        return await this.userService.getUsers();
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    createUser(@Body() userDto: UserDto){
        return this.userService.createUsers(userDto);
    } 

    @Get('id/:id')
    getUserById(@Param('id') id: string) {
        return this.userService.getUsersById(id)
    }
}
