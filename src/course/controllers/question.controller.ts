import { Controller, Get, Param, Post, Body, Delete, Put } from "@nestjs/common";
import { QuestionService } from "../services/question.service";
import { CourseQuestion } from "src/shared/CourseQuestions";
import { CreateQuestionDto } from "../dtos/create-question.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@Controller('question')
@ApiTags('CourseQuestion')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get(':questionId')
  @ApiOperation({summary:"Get Question by Question Id"})
  async getQuestionById(@Param('questionId') id:string){
    return await this.questionService.findOne(id);
  }

  @Post(':courseId')
  @ApiOperation({summary:"Add Question by Course Id"})
  async addQuestion(@Param('courseId') id:string, @Body() question: CreateQuestionDto) {
    return await this.questionService.addQuestion(id, question);
  }

  @Delete(':questionId')
  @ApiOperation({summary:"Delete Question by QuestionId"})
  async deleteQuestion(@Param('questionId') id) {
    return await this.questionService.deleteQuestion(id);
  }

  @Put(':questionId')
  @ApiOperation({summary:"Update Question by QuestionId"})
  async updateQuestion(@Param('questionId') id, @Body() question: CourseQuestion) {
    return await this.questionService.updateQuestion(id, question);
  }
}