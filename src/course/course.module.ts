import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseController } from './controllers/course.controller';
import { CourseService } from './services/course.service';
import { CourseSchema} from './schemas/course.schema';
// import { quizSchema } from './schemas/courseQuiz.schema';
import { RolesGuard } from 'shared/guards/roles.guard';
import { APP_GUARD } from '@nestjs/core';
import { QuizService } from './services/courseQuiz.service';
import { DescriptionService } from './services/courseDescription.service';
import { CourseLearnService } from './services/courseLearn.service';
import { QuizController } from './controllers/courseQuiz.controller';
import { DescriptionController } from './controllers/courseDescription.controller';
import { LearnController } from './controllers/courseLearn.controller';
import { QuizSchema } from './schemas/quiz.schema';
import { ChapterSchema, CourseLearnSchame, LessonSchema } from './schemas/courseLearn.schema';
import { DescriptionSchema } from './schemas/courseDescription.schema';
import { QuestionSchema } from './schemas/question.schema';
import { ExampleSchema } from './schemas/example.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {name:"Course",schema:CourseSchema},
    {name:"Lesson",schema:LessonSchema},
    {name:"Chapter",schema:ChapterSchema},
    {name:"Quiz",schema:QuizSchema},
    {name:"courseLearn",schema:CourseLearnSchame},
    {name:"courseDescription",schema:DescriptionSchema},
    {name:"Question",schema:QuestionSchema},
    {name:"Example",schema:ExampleSchema}

  ])],
  controllers: [CourseController,QuizController,DescriptionController,LearnController ],
  providers: [CourseService, QuizService,DescriptionService,CourseLearnService]
})
export class CourseModule {}
