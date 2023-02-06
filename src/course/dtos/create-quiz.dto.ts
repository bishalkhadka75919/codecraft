import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsArray } from "class-validator";

export class CreateQuizDto{

    @IsString()
    @ApiProperty()
    question:string;

    @IsArray()
    @ApiProperty()
    options:[string];

    @IsString()
    @ApiProperty()
    answer:string
}