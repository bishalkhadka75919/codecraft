import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsString } from "class-validator";

export class CreateDescriptionDto{
    
    @IsString()
    @ApiProperty()
    description:string;

    @IsString()
    @ApiProperty()
    requirement:string;

    @IsArray()
    @ApiProperty()
    skillsGained:[string]

    @IsString()
    @ApiProperty()
    duration:string;

    @IsString()
    @ApiProperty()
    difficulty:string;

    @IsArray()
    @ApiProperty()
    totalLesson:[string]

    @IsString()
    // @ApiProperty()
    courseId:string;
}    