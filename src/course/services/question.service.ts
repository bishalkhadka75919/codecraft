import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Course } from "shared/Course";
import { CourseQuestion } from "shared/CourseQuestions";
import { CreateQuestionDto } from "../dtos/create-question.dto";
// import { Question } from "shared/Question";

@Injectable()
export class QuestionService {
  constructor(
            @InjectModel('courseQuestion') private readonly questionModel: Model<CourseQuestion>,
            @InjectModel('Course') private readonly courseModel:Model<Course>
  ) {}

    async findOne(id: string){
      return await this.questionModel.findById(id);
  }

  async addQuestion(id,question:CreateQuestionDto) {
    console.log(question)
    const createdQuestion = new this.questionModel(question);
    await createdQuestion.save();

    const course = await this.courseModel.findById(id);
    console.log(course);  
    
    course.question = createdQuestion._id.toString();
    await course.save();
  }


  async deleteQuestion(id){
    await this.questionModel.deleteOne(id);
  }

  async updateQuestion(id, question ){
    const updatedQuestion = await this.questionModel.findByIdAndUpdate(
            id,
            question,
            { new: true }
        );

    return updatedQuestion;

  }
}