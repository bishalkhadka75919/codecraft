import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseController } from './controllers/course.controller';
import { CourseService } from './services/course.service';
import { CourseSchema} from './schemas/course.schema';
import { quizSchema } from './schemas/courseQuiz.schema';
import { RolesGuard } from 'shared/guards/roles.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [MongooseModule.forFeature([
    {name:"Course",schema:CourseSchema},
    {name:"Quiz",schema:quizSchema}
  ])],
  controllers: [CourseController],
  providers: [CourseService]
})
export class CourseModule {}
