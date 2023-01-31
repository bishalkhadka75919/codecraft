import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryController} from './controllers/category.controller';
import { LanguageController } from './controllers/language.controller';
import { CategorySchema } from './schemas/category.schema';
import { LanguageSchema } from './schemas/language.schema';
import { CategoryService } from './services/category.service';
import { LanguageService } from './services/language.service';

@Module({
    imports:[MongooseModule.forFeature([
    {name:"Category",schema: CategorySchema},
    {name:"Language",schema:LanguageSchema}
    ]),
],
  controllers: [CategoryController,LanguageController],
  providers: [CategoryService,LanguageService]
})
export class CommonModule {}
