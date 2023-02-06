import { IsBoolean, IsMongoId, IsNumber, IsString } from "class-validator";
import { Types } from "mongoose";

export class Course  {
    @IsMongoId()
    @IsString()
    _id;

    @IsString()    
    courseName: string;
    
    @IsString()
    tagLine: string;

    @IsNumber()
    price: string;

    @IsBoolean({always:false})    
    hasDiscount: boolean;
    
    @IsNumber()
    discountPrice: number;
    
    @IsString()
    banner: string;
    
    @IsString()
    bannerImageUrl: string;

    @IsBoolean()    
    isFeatured: boolean;

    @IsString()
    @IsMongoId()
    description:string;

    @IsString()
    @IsMongoId()
    quiz: string;
   
    @IsString()
    @IsMongoId()
    learn: string;

    @IsString()
    @IsMongoId()
    example:string;

    @IsString()
    @IsMongoId()
    question:string;
};

