import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, Res } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { STATUS_CODES } from 'http';
import { Question } from 'src/shared/Question';
import { CreateQuestionDto } from '../dtos/create-ques.dto';
import { QuestionsService } from '../services/questions.service';

@Controller('question')
@ApiTags('Questions')
export class QuestionsController {
    constructor(private questionService:QuestionsService){}

    @Post()
    @ApiOperation({summary:"Add Question"})
    async createQuestion(@Body() body : CreateQuestionDto, @Res() res){
        await this.questionService.addQuestion(body);
        return(res.status(200).send({message:"Successfully Added Question"}))
    }

    @Get("/:id")
    @ApiOperation({summary:"Get Question By Id"})
    async getQuestionById(@Param("id")id: string){
        return(await this.questionService.getQuestion(id));
    }

    @Get()
    @ApiOperation({summary:"Get Questions by PageNumber and PageSize"})
   async getQuestions(
        @Query("page") page: string,
        @Query("limit") limit: string,
        ){
            return await this.questionService.getQuestions(page,limit);
    }

    @Delete("/:id")
    @ApiOperation({summary:"Delete Question by Id"})
    async deleteQuestion(@Param() id :string){
        await this.questionService.deleteQuestion(id);
    }

    @Put("/:id")
    @ApiOperation({summary:"Update Question by Id"})    
    async updateQuestion(){
        // this.questionService.

    }

    @Patch("/:id")
    @ApiOperation({summary:"Update Question by Id"})
    async updateQuestionPatch(@Param() id : string, @Body() body:CreateQuestionDto, @Query("a") toPatch :string){
        await this.questionService.patchQuestion(id,toPatch,body);
    }


}
