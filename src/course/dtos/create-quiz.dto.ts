import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsArray } from "class-validator";

export class CreateQuizDto{

    @ApiProperty()
    @IsString()
    quizTitle:string;


    // @ApiProperty()
    @IsString()
    lessonId:string;


    // @ApiProperty()
    @IsString()
    chapterId:string;


    // @ApiProperty()
    @IsString()
    questions:[string]

}