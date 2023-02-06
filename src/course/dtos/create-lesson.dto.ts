import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsMongoId, isString, IsString } from "class-validator";

export class CreateLessonDto{

    @ApiProperty()
    @IsString()
    lessonTitle: string;

    // @ApiProperty()
    // @IsArray()
    // chapters:[string]
    
    @ApiProperty()
    @IsString()
    courseId:string
}


