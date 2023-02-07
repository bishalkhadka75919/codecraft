import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseController } from './controllers/course.controller';
import { CourseService } from './services/course.service';
import { CourseSchema} from './schemas/course.schema';
// import { quizSchema } from './schemas/courseQuiz.schema';
import { RolesGuard } from 'src/shared/guards/roles.guard';
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
import { ExampleSchema, SolutionSchema } from './schemas/example.schema';
import { QuestionService } from './services/question.service';
import { ExampleService } from './services/example.service';
import { QuestionController } from './controllers/question.controller';
import { ExampleController } from './controllers/example.controller';
import { courseQuizQuestionSchema } from './schemas/courseQuizQuestion.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {name:"Course",schema:CourseSchema},
    {name:"Lesson",schema:LessonSchema},
    {name:"Chapter",schema:ChapterSchema},
    {name:"courseQuiz",schema:QuizSchema},
    {name:"courseLearn",schema:CourseLearnSchame},
    {name:"courseChapter",schema:ChapterSchema},
    {name:"courseDescription",schema:DescriptionSchema},
    {name:"courseLesson",schema:LessonSchema},
    {name:"courseQuizQuestion",schema:courseQuizQuestionSchema},
    {name:"courseQuestion",schema:QuestionSchema},
    {name:"Example",schema:ExampleSchema},
    {name:"Solution",schema:SolutionSchema}
  ])],
  controllers: [CourseController,QuizController,DescriptionController,LearnController , QuestionController,ExampleController],
  providers: [CourseService, QuizService,DescriptionService,CourseLearnService, QuestionService,ExampleService]
})
export class CourseModule {}
