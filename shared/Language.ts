import { IsString } from "class-validator";


export class Language{
    @IsString()
    languageType: string;
}