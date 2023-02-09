import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { ValidationFilter } from './filter/validation.filter';
import { ValidationException } from './filter/Validation.exception';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  const config = new DocumentBuilder()
    .setTitle('Code Craft')
    .setDescription('The Code Craft API description')
    .setVersion('1.0')
    .addTag('CODECRAFT')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalFilters(new ValidationFilter());
  const configService = app.get(ConfigService);

  // const PORT = configService.get<number>('PORT') || 3000;
  // console.log(PORT);
  const PORT = configService.get<string>('config.app.port') || 3000;
  console.log(PORT);

  app.useGlobalPipes(
    new ValidationPipe({
      skipMissingProperties: true,
      // exceptionFactory: ( errors: ValidationError[] )=>{
      //   const messages = errors.map(
      //     error=> `${error.property} has incorrect value ${error.value}
      //     ${ Object.values(error.constraints).join(', ')}`
      //   )
      //     return new ValidationException(messages);
      // }
    }),
  );

  app.enableCors( () =>{
    origin:"*"
  });
  await app.listen(PORT, () => console.log(`listening at ${PORT}`));
}
bootstrap();
