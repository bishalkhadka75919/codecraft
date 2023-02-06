import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsString, ValidateNested } from "class-validator";
import { ObjectId } from "mongoose";


class SolutionDto {
    @IsString()
    @ApiProperty()
    category:string;

    @IsString()
    @ApiProperty()
    description:string;
}



export class CreateExampleDto {
    @IsString()
    @ApiProperty()
    question:string

    @ApiProperty({
        type:[
            SolutionDto
        ]
    })
    @IsArray()
    // @ValidateNested({ each: true })  
    @Type(() => SolutionDto)
    solutions:SolutionDto[]

}
