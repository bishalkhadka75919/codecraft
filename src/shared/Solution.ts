import { IsString } from "class-validator";

export class Solution{
    @IsString()
    category: string;

    @IsString()
    description:string;
}