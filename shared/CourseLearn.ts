import { IsArray, IsBoolean, IsMongoId, IsNumber, IsString } from "class-validator";

export class Lesson {
    @IsString()
    lessonTitle :string;

    @IsArray()
    chapters:[string];

    @IsMongoId()
    @IsString()
    courseId:string;
}

export class Chapter {
    
    @IsString()
    chapterTitle:string;

    @IsString()
    content:string;

    @IsBoolean()
    isFree:boolean;

    @IsMongoId()
    lessonId:string;
}

export class CourseLearn {
    @IsMongoId()
    lessons:[string];

    @IsNumber()
    lessonCount:number;

    @IsString()
    courseId:string;
}