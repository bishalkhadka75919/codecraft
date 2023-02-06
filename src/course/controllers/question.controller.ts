import { Controller, Get, Param, Post, Body, Delete, Put } from "@nestjs/common";
import { QuestionService } from "../services/question.service";
import { CourseQuestion } from "shared/CourseQuestions";
import { CreateQuestionDto } from "../dtos/create-question.dto";
import { ApiTags } from "@nestjs/swagger";

@Controller('question')
@ApiTags('CourseQuestion')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get(':questionId')
  async getQuestionById(@Param('questionId') id:string){
    return await this.questionService.findOne(id);
  }

  @Post(':id')
  async addQuestion(@Param('id') id:string, @Body() question: CreateQuestionDto) {
    return await this.questionService.addQuestion(id, question);
  }

  @Delete(':id')
  async deleteQuestion(@Param('id') id) {
    return await this.questionService.deleteQuestion(id);
  }

  @Put(':id')
  async updateQuestion(@Param('id') id, @Body() question: CourseQuestion) {
    return await this.questionService.updateQuestion(id, question);
  }
}