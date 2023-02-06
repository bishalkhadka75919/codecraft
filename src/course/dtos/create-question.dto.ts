import { ApiProperty } from "@nestjs/swagger";
import { IsMongoId, IsString } from "class-validator";

export class CreateQuestionDto{

    @ApiProperty()
    @IsString()
    solution:string;

    @ApiProperty()
    @IsString()
    question:string;

}