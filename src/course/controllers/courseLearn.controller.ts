import { Controller, Get, Post, Param, Body, Delete, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CourseLearnService } from '../services/courseLearn.service';

@Controller('learn')
@ApiTags('Course Learn')
export class LearnController {
constructor(
private readonly courseLearnService: CourseLearnService) {}

    @ApiOperation({ summary: 'Get All Courses' })
    @Get()
    async getAllLearn() {
        const learn = await this.courseLearnService.getAll();
        return { success: true, learn };
    }

    @ApiOperation({ summary: 'Add Lesson to a Course' })
    @Post('/:id/lesson')
    async addLesson(@Param('id') courseId: string, @Body() lesson) {
        await this.courseLearnService.addLesson( lesson, courseId );
        return { success: true, message: 'Lesson added!' };
    }

    @ApiOperation({ summary: 'Get Lesson from Course' })
    @Get('/:id/lesson/')
    async getLesson(@Param('id') courseId: string, @Param('lessonId') lessonId: string) {
        const lesson = await this.courseLearnService.getLesson(courseId, lessonId);
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
    @Post('/:id/lesson/:lessonId/chapter')
    async addChapter(@Param('id') courseId: string, @Param('lessonId') lessonId: string, @Body() chapter) {
        const addedChapter = await this.courseLearnService.addChapter(chapter, lessonId );
        // await this.courseLearnService.updateLesson(lessonId, addedChapter._id);
        return { success: true, message: 'Chapter added!' };
    }

    @ApiOperation({ summary: 'Get Chapter from a Lesson' })
    @Get('/:id/lesson/:lessonId/chapter/:chapterId')
    async getChapter(@Param('id') courseId: string, @Param('lessonId') lessonId: string, @Param('chapterId') chapterId: string) {
        const chapter = await this.courseLearnService.getChapter(lessonId, chapterId);
        return { success: true, chapter };
    }

    @ApiOperation({ summary: 'Update a Chapter from a Lesson' })
    @Put('/lesson/:lessonId/chapter/:chapterId')
    async updateChapter(
      @Param('chapterId') chapterId: string,
      @Body() chapter: any,
    ) {
      return await this.courseLearnService.updateChapter(chapterId,chapter);
    }

    @ApiOperation({summary:'Delete a chapter from a Lesson'})
    @Delete('/lesson/:lessonId/chapter/:chapterId')
    async deleteChapter(
      @Param('chapterId') chapterId: string,
    ) {
      return await this.courseLearnService.deleteChapter(chapterId);
    }
}