import { Controller, Get, Param, Post, Body, UseGuards, Delete, Put } from '@nestjs/common';
import { QuizService } from '../services/courseQuiz.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateQuizDto } from '../dtos/create-quiz.dto';
import { CreateQuizQuestionDto } from '../dtos/create-quizquestion.dto';

@Controller('course')
@ApiTags('Course Quiz')
export class QuizController {
    constructor(private readonly quizService: QuizService) {}
    
    @Post("/:courseId/lesson/:lessonId/:chapterId/quiz")
    async addQuiz(@Body() body:CreateQuizDto, @Param('lessonId') lessonId: string, @Param('courseId') courseId: string,@Param('chapterId') chapterId: string) {
        return await this.quizService.addQuiz(body, lessonId, courseId,chapterId);
    }
    
    @Post('/:id/lesson/:lessonId/quiz/:quizId/question')
    async addQuizQuestion(@Body() body:CreateQuizQuestionDto, @Param('quizId') quizId: string) {
        return await this.quizService.addQuizQuestion(body, quizId);
    }
    @Put('/:courseId/quiz/:quizId')
    async updateQuiz(@Param('quizId') quizId: string, @Body() body:CreateQuizDto) {
        return this.quizService.updateQuiz(quizId, body);
    }
    @Delete('/:courseId/quiz/:quizId')
    async deleteQuiz(@Param('quizId') quizId: string) {
        return this.quizService.deleteQuiz(quizId);
    }

    @ApiOperation({ summary: 'Get Quiz from a Course' })
    @Get('/:courseId/quiz')
    async getQuizByCourseId(@Param('id') courseId: string) {
        return await this.quizService.getQuizByCourseId(courseId);
    }

    @ApiOperation({ summary: 'Get Quiz from a Lesson' })
    @Get('/:courseId/lesson/:lessonId/quiz')
    async getQuizByLessonId(@Param('lessonId') lessonId: string) {
        return await this.quizService.getQuizByLessonId(lessonId);
    }


    @Get('/:id/lesson/:lessonId/quiz/:quizId/question')
    async getQuizQuestion(@Param('quizId') quizId: string) {
        return await this.quizService.getQuizQuestion(quizId);
    }



    @Put('/quiz/:quizId/question/:questionId')
    async updateQuizQuestion(
        @Param('questionId') questionId: string,
        @Body() body) {
        return this.quizService.updateQuizQuestion(questionId, body);
    }

    @Delete('/quiz/:quizId/question/:questionId')
    async deleteQuizQuestion(@Param('questionId') questionId: string) {
        return this.quizService.deleteQuizQuestion(questionId);
  }

}

