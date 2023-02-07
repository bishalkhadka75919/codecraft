import { IsArray, IsMongoId, IsString } from "class-validator";

export class QuizQuestion{
    @IsString()
    title:string;

    @IsString()
    questionType:string;

    @IsArray()
    options:[string];

    @IsString()
    answer:string;


}