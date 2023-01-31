import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionsController } from './controllers/questions.controller';
import { QuestionsService } from './services/questions.service';
import { QuestionSchema } from './schemas/question.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: "Question", schema: QuestionSchema }])],
    controllers:[QuestionsController],
    providers:[QuestionsService]
})
export class QuestionsModule {}
