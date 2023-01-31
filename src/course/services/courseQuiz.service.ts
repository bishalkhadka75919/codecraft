import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question } from 'shared/Question';
import { Quiz} from 'shared/Quiz';

@Injectable()
export class QuizService {
    constructor(
        @InjectModel('Quiz') private quizModel:Model<Quiz>,
        @InjectModel('Quiz') private questionModel:Model<Question>,
        ) {}
async getQuizByCourseId(courseId: string) {
const quizes = await this.quizModel.find({ courseId });
return {
quizes,
};
}

async getQuizByLessonId(lessonId: string) {
    const quizes = await this.quizModel.find({ lessonId });
    return {
        quizes,
    };
}

async addQuiz(body, lessonId: string, courseId: string) {
    await this.quizModel.create({
        ...body,
        lessonId,
        courseId,
    });
    return {
        message: 'quiz added!',
    };
}

async addQuizQuestion(body, quizId: string) {
    await this.questionModel.create({
        ...body,
        quizId,
    });
}

async getQuizQuestion(quizId: string) {
    const quizQuestions = await this.quizModel
        .findById(quizId)
        .populate('questions');
    
        return {
            questions: quizQuestions.question,
        };
    }
    
}