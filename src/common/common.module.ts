import { Module } from '@nestjs/common';
import { CategoryController} from './controllers/category.controller';
import { LanguageController } from './controllers/language.controller';
import { ServicesService } from './services/services.service';

@Module({
  controllers: [CategoryController,LanguageController],
  providers: [ServicesService]
})
export class CommonModule {}
