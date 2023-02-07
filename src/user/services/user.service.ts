import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../../shared/user.entity';

@Injectable()
export class UserService {
    constructor(@InjectModel("User")
    private readonly userModel: Model<User>) {}

    async create(email:string, password:string, roles:[string]){
        const user = await this.userModel.findOne({ email });
        if (user) {
            throw new HttpException('Email already exists', HttpStatus.CONFLICT);
        }
        await this.userModel.create({email,password,roles});
    }
    
    async getUser(user:object){
        return this.userModel.findOne(user);
    }

    async findOrCreateUser(user){
        const existingUser = await this.userModel.findOne({ email: user.email });
        if (existingUser) {
            return existingUser;
        }
        const createdUser = new this.userModel(user);
        return createdUser.save();
    }

}
