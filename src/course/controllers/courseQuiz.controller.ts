import { Controller, Get, Param, Post, Body, UseGuards } from '@nestjs/common';
import { QuizService } from '../services/courseQuiz.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';

@Controller('quiz')
@ApiTags('Course Quiz')
    export class QuizController {
    constructor(private readonly quizService: QuizService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get('/course/:id')
    async getQuizByCourseId(@Param('id') courseId: string) {
        return await this.quizService.getQuizByCourseId(courseId);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('/lesson/:lessonId')
    async getQuizByLessonId(@Param('lessonId') lessonId: string) {
        return await this.quizService.getQuizByLessonId(lessonId);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async addQuiz(@Body() body, @Param('lessonId') lessonId: string, @Param('courseId') courseId: string) {
        return await this.quizService.addQuiz(body, lessonId, courseId);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('/question')
    async addQuizQuestion(@Body() body, @Param('quizId') quizId: string) {
        return await this.quizService.addQuizQuestion(body, quizId);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('/question/:quizId')
    async getQuizQuestion(@Param('quizId') quizId: string) {
        return await this.quizService.getQuizQuestion(quizId);
    }
}

