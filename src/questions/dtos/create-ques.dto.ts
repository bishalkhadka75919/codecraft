import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsString } from "class-validator"

export class CreateQuestionDto
{
    @ApiProperty()
    @IsString()
    question: string;

    @ApiProperty()
    @IsString()
    @Type(()=>Solts)
    solutions: [ Solts ];
 
    @ApiProperty()
    @IsString()
    algorithm: string;

    @ApiProperty()
    @IsString()
    flowchart: string;
 
    @ApiProperty()
    @IsString()
    category: [string];

    @ApiProperty()
    @IsString()
    createdOn: string;
}


class Solts{


            // @ApiProperty()
            @IsString()
            _id: string;

            @ApiProperty()
            @IsString()
            language: string;

            @ApiProperty()
            @IsString()
            code: string;
 
            @ApiProperty()
            @IsString()
            explanation: string;
}