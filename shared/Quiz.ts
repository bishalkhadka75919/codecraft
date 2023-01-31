import { IsArray, IsMongoId, IsString } from "class-validator";

export class Quiz{

    @IsString()
    question:string;

    @IsArray()
    options:[string];

    @IsString()
    answer:string
}