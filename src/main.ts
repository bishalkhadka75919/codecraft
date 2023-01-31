import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { ValidationFilter } from './filter/validation.filter';
import { ValidationException } from './filter/Validation.exception';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule, new FastifyAdapter()
    );


  const config = new DocumentBuilder()
    .setTitle(' example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
 
    const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalFilters(
    new ValidationFilter()
  );

  app.useGlobalPipes(
    new ValidationPipe({
    skipMissingProperties:true,
    // exceptionFactory: ( errors: ValidationError[] )=>{
    //   const messages = errors.map(
    //     error=> `${error.property} has incorrect value ${error.value}
    //     ${ Object.values(error.constraints).join(', ')}`
    //   )
    //     return new ValidationException(messages);
    // }
  }));

  await app.listen(3000);
}
bootstrap();
