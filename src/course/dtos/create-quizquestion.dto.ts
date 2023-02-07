import { ApiProduces, ApiProperty } from "@nestjs/swagger";
import { IsArray, IsMongoId, IsString } from "class-validator";

export class CreateQuizQuestionDto{

    @ApiProperty()
    @IsString()
    title:string;

    @ApiProperty()
    @IsString()
    questionType:string;

    @ApiProperty()
    @IsArray()
    options:[string];

    @ApiProperty()
    @IsString()
    answer:string;

    // @ApiProperty()
    @IsString()
    @IsMongoId()
    quizId:string;

}