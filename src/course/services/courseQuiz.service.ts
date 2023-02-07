import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QuizQuestion } from 'src/shared/CourseQuizQuestion';
import { Question } from 'src/shared/Question';
import { Quiz} from 'src/shared/Quiz';

@Injectable()
export class QuizService {
    constructor(
        @InjectModel('courseQuiz') private quizModel:Model<Quiz>,
        @InjectModel('courseQuizQuestion') private questionModel:Model<QuizQuestion>,
        ) {}


    async getQuizByCourseId(courseId: string) {
        const quizes = await this.quizModel.find({ courseId })
        .populate('questions');
        return {
        quizes,
        };
    }

    async getQuizByLessonId(lessonId: string) {
        const quizes = await this.quizModel.find({ lessonId })
        .populate("questions");
        return {
            quizes,
        };
    }

    async addQuiz(body, lessonId: string, courseId: string,chapterId:string) {
        const quiz=await this.quizModel.create({
            ...body,
            lessonId: lessonId,
            courseId:courseId,
            chapterId:chapterId,
        });
        return {
            message: 'quiz added!',
            quizId:quiz._id
        };
    }

    async addQuizQuestion(body, quizId: string) {
        const quizQuestion= await this.questionModel.create({
            ...body,
            quizId,
        });

        const quiz=await this.quizModel.findById(quizId);
        quiz.questions.push(quizQuestion._id.toString());
        await quiz.save()
    }

    async getQuizQuestion(quizId: string) {
        const quizQuestions = await this.quizModel
            .findById(quizId)
            .populate('questions');
        
            return {
                questions: quizQuestions.questions,
            };
        }

      async updateQuizQuestion(questionId, body) {
    const questionUpdated = await this.questionModel.findByIdAndUpdate(
      questionId,
      body,
      {
        new: true,
      },
    );
        return questionUpdated;
    }

    async deleteQuizQuestion(questionId) {
        await this.questionModel.findByIdAndDelete(questionId);
        return { message: 'quiz question deleted!' };
    }
    
    async updateQuiz(quizId, body) {
        const updatedQuiz = await this.quizModel.findByIdAndUpdate(quizId, body, {
        new: true,
        });
        return updatedQuiz;
    }
   
    async deleteQuiz(quizId) {
        await this.quizModel.findByIdAndDelete(quizId);
        return { message: 'quiz deleted!' };
  }


  
}