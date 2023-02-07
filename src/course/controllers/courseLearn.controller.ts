import { Controller, Get, Post, Param, Body, Delete, Put, Req } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { Lesson } from 'src/shared/CourseLearn';
import { CreateChapterDto } from '../dtos/create-chapter.dto';
import { CreateLessonDto } from '../dtos/create-lesson.dto';
import { CourseLearnService } from '../services/courseLearn.service';

@Controller('course')
@ApiTags('Course Learn')
export class LearnController {
constructor(
private readonly courseLearnService: CourseLearnService) {}

    // @ApiOperation({ summary: 'Get All Courses' })
    // @Get()
    // async getAllLearn() {
    //     const learn = await this.courseLearnService.getAll();
    //     return { success: true, learn };
    // }

    @ApiOperation({ summary: 'Add Lesson to a Course' })
    @Post('/:courseId/lesson')
    async addLesson(@Param('courseId') courseId: string, @Body() lesson:CreateLessonDto) {
        await this.courseLearnService.addLesson( lesson, courseId );
        return { success: true, message: 'Lesson added!' };
    }

    @ApiOperation({ summary: 'Get Lesson by CourseId' })
    @Get('/:courseId/lesson/')
    async getLessonByCourseId(@Param('courseId') courseId: string, @Req() req:Request) {
      // req.params
        const lesson = await this.courseLearnService.getLesson( req.params);
        return { success: true, lesson };
    }

    @ApiOperation({summary:'Get Lesson by LessonId'})
    @Get('/lesson/:lessonId')
    async getLessonByLessonId(@Param('lessonId') lessonId: string, @Req() req:Request) {
        const lesson = await this.courseLearnService.getLesson(req.params);
        return { success: true, lesson };
    }

    @ApiOperation({ summary: 'Update a Lesson' })
    @Put('/lesson/:lessonId')
    async updateLesson(@Param('lessonId') lessonId: string, @Body() lesson: any) {
      return await this.courseLearnService.updateLesson(lessonId, lesson);
    }

    @ApiOperation({ summary: 'Delete a Lesson' })
    @Delete('/lesson/:lessonId')
    async deleteLesson(@Param('lessonId') lessonId: string) {
    return await this.courseLearnService.deleteLesson(lessonId);
    }

    @ApiOperation({ summary: 'Add Chapter to a Lesson' })
    @Post('/lesson/:lessonId/chapter')
    async addChapter( @Param('lessonId') lessonId: string, @Body() createChapterDto:CreateChapterDto) {
        const addedChapter = await this.courseLearnService.addChapter(createChapterDto, lessonId );
        // await this.courseLearnService.updateLesson(lessonId, addedChapter._id);
        return { success: true, message: 'Chapter added!' };
    }

    @ApiOperation({ summary: 'Get Chapter from a LessonId' })
    @Get('/lesson/:lessonId/chapter')
    async getChapterByChapter(@Param('lessonId') lessonId: string, @Req() req:Request) {
        const chapter = await this.courseLearnService.getChapter(req.params);
        return { success: true, chapter };
    }

    @ApiOperation({ summary: 'Get Chapter from a LessonId and ChapterId' })
    @Get('/lesson/:lessonId/chapter/:chapterId')
    async getChapterByLessonId(@Param('lessonId') lessonId: string, @Param('chapterId') chapterId: string, @Req() req:Request) {
        const chapter = await this.courseLearnService.getChapter(req.params);
        return { success: true, chapter };
    }

    @ApiOperation({ summary: 'Update a Chapter from a Lesson' })
    @Put('/chapter/:chapterId')
    async updateChapter(
      @Param('chapterId') chapterId: string,
      @Body() chapter: any,
    ) {
      return await this.courseLearnService.updateChapter(chapterId,chapter);
    }

    @ApiOperation({summary:'Delete a chapter from a Lesson'})
    @Delete('/chapter/:chapterId')
    async deleteChapter(
      @Param('chapterId') chapterId: string,
    ) {
      return await this.courseLearnService.deleteChapter(chapterId);
    }
}