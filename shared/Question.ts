import { IsString } from "class-validator"

export class Question
{
    @IsString()
    question: string;

    @IsString()
    solutions: [ Solts ];
    
    @IsString()
    algorithm: string;
    
    @IsString()
    flowchart: string;
    
    @IsString()
    category: [string];
    
    @IsString()
    createdOn: string;
}


class Solts{


            @IsString()
            _id: string;

            @IsString()
            language: string;

            @IsString()
            code: string;
            
            @IsString()
            explanation: string;
}