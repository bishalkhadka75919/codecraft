import { IsString } from "class-validator"

export class Category{
    @IsString()
    categoryName:string;
}
