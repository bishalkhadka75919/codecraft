import { IsMongoId, IsString } from "class-validator";

export class CourseQuestion{

    // @IsMongoId()
    @IsString()
    solution:string;


    @IsString()
    question:string;



}