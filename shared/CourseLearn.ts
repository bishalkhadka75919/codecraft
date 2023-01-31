import { IsArray, IsMongoId, IsNumber, IsString } from "class-validator";

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
    chapterTitle:string;

    content:string;

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