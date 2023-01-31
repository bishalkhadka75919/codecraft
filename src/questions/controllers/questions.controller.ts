import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { STATUS_CODES } from 'http';
import { Question } from 'shared/Question';
import { QuestionsService } from '../services/questions.service';

@Controller('questions')
@ApiTags('Questions')
export class QuestionsController {
    constructor(private questionService:QuestionsService){}

    @Post()
    createQuestion(@Body() body : Question, @Res() res){
        this.questionService.addQuestion(body);
        return(res.status(200).send({message:"Successfully Added Question"}))
    }

    @Get("/:id")
    async getQuestionById(@Param("id")id: string){
        return(await this.questionService.getQuestion(id));
    }

    @Get()
   async getQuestions(
        @Query("pageSize") pageSize:number,
        @Query("pageNumber") pageNumber:number,
        ){
            return await this.questionService.getQuestions(pageNumber,pageSize);
    }

    @Delete("/:id")
    deleteQuestion(@Param() id :string){
        this.questionService.deleteQuestion(id);
    }

    @Put("/:id")
    updateQuestion(){
        // this.questionService.

    }

    @Patch("/:id")
    updateQuestionPatch(@Param() id : string, @Body() body, @Query("a") toPatch :string){
        this.questionService.patchQuestion(id,toPatch,body);
    }


}
