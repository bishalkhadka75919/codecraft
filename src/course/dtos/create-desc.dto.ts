import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateDescriptionDto{
    
    @IsString()
    @ApiProperty()
    description:string;

    @IsString()
    @ApiProperty()
    requirement:string;

    @IsString()
    @ApiProperty()
    skillsGained:[string]

    @IsString()
    @ApiProperty()
    duration:string;

    @IsString()
    @ApiProperty()
    difficulty:string;

    @IsString()
    @ApiProperty()
    totalLesson:[string]

    @IsString()
    @ApiProperty()
    courseId:string;
}    