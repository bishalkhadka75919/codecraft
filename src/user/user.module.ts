import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './controllers/user.controller';
import { User } from '../../shared/user.entity';
import { UserSchema } from './schemas/user.schema';
import { UserService } from './services/user.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([
    {name:"User",schema: UserSchema}
  ])],
  controllers: [UserController],
  providers:[UserService],
  exports:[UserService]
})
export class UserModule {}
