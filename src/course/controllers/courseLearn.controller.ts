import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CourseLearnService } from '../services/courseLearn.service';

@Controller('learn')
@ApiTags('Course Learn')
export class LearnController {
constructor(
private readonly courseLearnService: CourseLearnService) {}

@Get()
async getAllLearn() {
    const learn = await this.courseLearnService.getAll();
    return { success: true, learn };
}

@Post('/:id/lesson')
async addLesson(@Param('id') courseId: string, @Body() lesson) {
    await this.courseLearnService.addLesson( lesson, courseId );
    return { success: true, message: 'Lesson added!' };
}

@Get('/:id/lesson/')
async getLesson(@Param('id') courseId: string, @Param('lessonId') lessonId: string) {
    const lesson = await this.courseLearnService.getLesson(courseId, lessonId);
    return { success: true, lesson };
}

@Post('/:id/lesson/:lessonId/chapter')
async addChapter(@Param('id') courseId: string, @Param('lessonId') lessonId: string, @Body() chapter) {
    const addedChapter = await this.courseLearnService.addChapter(chapter, lessonId );
    // await this.courseLearnService.updateLesson(lessonId, addedChapter._id);
    return { success: true, message: 'Chapter added!' };
}

@Get('/:id/lesson/:lessonId/chapter/:chapterId')
async getChapter(@Param('id') courseId: string, @Param('lessonId') lessonId: string, @Param('chapterId') chapterId: string) {
    const chapter = await this.courseLearnService.getChapter(lessonId, chapterId);
    return { success: true, chapter };
}
}