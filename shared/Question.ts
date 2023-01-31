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

            _id: boolean;

            language: string;

            code: string;
            
            explanation: string;
}