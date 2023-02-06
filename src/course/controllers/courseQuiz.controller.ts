import { Controller, Get, Param, Post, Body, UseGuards, Delete, Put } from '@nestjs/common';
import { QuizService } from '../services/courseQuiz.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateQuizDto } from '../dtos/create-quiz.dto';

@Controller('quiz')
@ApiTags('Course Quiz')
    export class QuizController {
    constructor(private readonly quizService: QuizService) {}

    @ApiOperation({ summary: 'Get Quiz from a Course' })
    // @UseGuards(AuthGuard('jwt'))
    @Get('/course/:courseId')
    async getQuizByCourseId(@Param('id') courseId: string) {
        return await this.quizService.getQuizByCourseId(courseId);
    }

    @ApiOperation({ summary: 'Get Quiz from a Lesson' })
    // @UseGuards(AuthGuard('jwt'))
    @Get('/lesson/:lessonId')
    async getQuizByLessonId(@Param('lessonId') lessonId: string) {
        return await this.quizService.getQuizByLessonId(lessonId);
    }

    // @UseGuards(AuthGuard('jwt'))
    
    @Post("/")
    async addQuiz(@Body() body:CreateQuizDto, @Param('lessonId') lessonId: string, @Param('courseId') courseId: string) {
        return await this.quizService.addQuiz(body, lessonId, courseId);
    }

    // @UseGuards(AuthGuard('jwt'))
    @Post('/question')
    async addQuizQuestion(@Body() body, @Param('quizId') quizId: string) {
        return await this.quizService.addQuizQuestion(body, quizId);
    }

    // @UseGuards(AuthGuard('jwt'))
    @Get('/question/:quizId')
    async getQuizQuestion(@Param('quizId') quizId: string) {
        return await this.quizService.getQuizQuestion(quizId);
    }


    @Delete('/:quizId')
    async deleteQuiz(@Param('quizId') quizId: string) {
        return this.quizService.deleteQuiz(quizId);
    }

    @Put('/question/:questionId')
    async updateQuizQuestion(
        @Param('questionId') questionId: string,
        @Body() body) {
        return this.quizService.updateQuizQuestion(questionId, body);
    }

    @Delete('/question/:questionId')
    async deleteQuizQuestion(@Param('questionId') questionId: string) {
        return this.quizService.deleteQuizQuestion(questionId);
  }

    @Put('/:quizId')
    async updateQuiz(@Param('quizId') quizId: string, @Body() body:CreateQuizDto) {
        return this.quizService.updateQuiz(quizId, body);
    }
}

