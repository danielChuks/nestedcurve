import { IsNotEmpty, IsEmail,  } from "class-validator";

export class UserDto {
 
    @IsEmail()
    email: string;

    @IsNotEmpty()
    username: string ;

    @IsNotEmpty()
    password: string;
}