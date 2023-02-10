import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course } from 'src/shared/Course';
import { Question } from 'src/shared/Question';
import { CreateQuestionDto } from '../dtos/create-ques.dto';

@Injectable()
export class QuestionsService {
    constructor(@InjectModel("Question") private questionsModel : Model<Question>){}

    async addQuestion(question: CreateQuestionDto){
        await this.questionsModel.create(question);
    }

    async deleteQuestion(id:string){
        await this.questionsModel
        .findByIdAndDelete(id);
    }
    

    async getQuestion(id:string){
        return await this.questionsModel
        .findById(id);
    }
        


    async updateQuestion(id:string,body:Partial<CreateQuestionDto>){
        this.questionsModel.
            findByIdAndUpdate(
                id,
                body,
                { new: true }
            );
        return ;
    }
    
    async patchQuestion(id:string,toUpdate:string,content){
        return await this.questionsModel
            .findByIdAndUpdate(id, { $push: { [toUpdate]: content } });
    };
    
    async getQuestions(page,limit){
    
        const totalCount = await this.questionsModel.find({}).count();
        page = parseInt(page, 10) > 0 ? parseInt(page, 10) - 1 : 0;
        limit = parseInt(limit, 10) || totalCount;
        const endPage = page + 1 ? Math.ceil(totalCount / limit) : 1;
        const questions = await this.questionsModel
            .find({})
            .skip(page * limit)
            .limit(limit);
        return ({
            totalPages: totalCount,
            endPage,
            questions,
        });
    }
        // return await this.questionsModel.find({}
        //     ,null,
        //     {
        //         skip:pageNumber * pageSize,
        //         limit: pageSize, 
        //         // sort:{

        //         // }
        //     })

    async putQuestion(id){
        
    }
    }
        
        
        
