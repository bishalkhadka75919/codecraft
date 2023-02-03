import { IsArray, IsString } from "class-validator";

export class Example{
    @IsString()
    question:string;

    @IsArray()
    solutions:[string];

}