import { IsArray, IsMongoId, IsString } from "class-validator";

export class Quiz{

    @IsString()
    quizTitle:string;

    @IsString()
    lessonId:string;

    @IsString()
    chapterId:string;

    @IsString()
    questions:[string]


}