import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateLanguageDto } from '../dtos/create-lang.dto';
import { LanguageService } from '../services/language.service';

@Controller('languages')
@ApiTags('Common')
export class LanguageController {
  constructor(private readonly languageService: LanguageService) {}

  @Get()
  @ApiOperation({summary:"Get Languages"})
  async getAllLanguages() {
    return await this.languageService.getAllLanguages();
  }

  @Post()
  @ApiOperation({summary:"Add Language"})
  async addNewLanguage(@Body() body:CreateLanguageDto) {
    return await this.languageService.addNewLanguage(body);
  }

  @Delete(':id')
  @ApiOperation({summary:"Delete Language"})
  async deleteLanguage(@Param('id') id) {
    return await this.languageService.deleteLanguage(id);
  }
}
