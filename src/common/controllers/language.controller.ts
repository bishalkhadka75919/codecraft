import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LanguageService } from '../services/language.service';

@Controller('common/languages')
@ApiTags('Common')
export class LanguageController {
  constructor(private readonly languageService: LanguageService) {}

  @Get()
  async getAllLanguages() {
    return await this.languageService.getAllLanguages();
  }

  @Post()
  async addNewLanguage(@Body() body) {
    return await this.languageService.addNewLanguage(body);
  }

  @Delete(':id')
  async deleteLanguage(@Param('id') id) {
    return await this.languageService.deleteLanguage(id);
  }
}
