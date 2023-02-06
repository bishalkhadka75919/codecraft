import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsMongoId, IsNumber, IsString } from "class-validator";

export class CreateCourseDto{
    @IsMongoId()
    @IsString()
    _id;

    @IsString()
    @ApiProperty()    
    readonly courseName: string;
    
    @IsString()
    @ApiProperty()
    readonly tagLine: string;

    @IsNumber()
    @ApiProperty()
    readonly price: string;

    @ApiProperty()
    @IsBoolean({always:false})    
    readonly hasDiscount: boolean;
    
    @ApiProperty()
    @IsNumber()
    readonly discountPrice: number;
    
    @ApiProperty()
    @IsString()
    readonly banner: string;
    
    @ApiProperty()
    @IsString()
    readonly bannerImageUrl: string;

    @ApiProperty()
    @IsBoolean()    
    readonly isFeatured: boolean;
}