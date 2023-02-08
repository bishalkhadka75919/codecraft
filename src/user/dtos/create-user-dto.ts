import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class createUserDto{

    @IsEmail()
    @IsNotEmpty()
    @ApiProperty()
    email:string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    password:string;

    @IsArray()
    @IsNotEmpty()
    @ApiProperty()
    roles:[string];
}