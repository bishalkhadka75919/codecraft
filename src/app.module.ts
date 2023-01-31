import { Module } from '@nestjs/common';
import { CourseModule } from './course/course.module';
import { QuestionsModule } from './questions/questions.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from 'shared/guards/roles.guard';
import { JwtModule } from '@nestjs/jwt';
// import { ControllerController } from './quiz/controller/quiz.controller';
// import { ControllerModule } from './quiz/quiz.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://asd23:iEwFZ3mRy1VX37SR@cluster0.ymkq9k8.mongodb.net/?retryWrites=true&w=majority'),
    CourseModule, QuestionsModule, UserModule, AuthModule, CommonModule,
  JwtModule.register(
    {
      secret:"secretKey",
      signOptions:{expiresIn:'1d'}
    }
  ),
  ],
  // controllers: [AppController, QuestionsController,UserController,CourseController],
  // providers: [AppService, UserService, QuestionsService,CourseService],
   providers: [
      {
        provide: APP_GUARD,
        useClass: RolesGuard,
      },
      
   ],
})

export class AppModule {}
