import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsString } from "class-validator";

export class CreateChapterDto{


    @ApiProperty()
    @IsString()
    chapterTitle:string;

    @ApiProperty()
    @IsString()
    content:string;

    @ApiProperty()
    @IsBoolean()
    isFree:boolean;


    @IsString()
    lessonId:string;
}

