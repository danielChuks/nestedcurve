import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema, User} from 'src/schema/user.model';

@Module({
//importing the mongoose schema to the user feature.
  imports: [
    MongooseModule.forFeature([
       {name: 'user', schema: UserSchema} 
      ])
  ],

  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
