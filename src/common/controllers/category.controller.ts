import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CategoryService } from '../services/category.service';

@Controller('common/categories')
@ApiTags('Common')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getCategories() {
    return await this.categoryService.getCategories();
  }

  @Post()
  async addCategory(@Body() body) {
    return await this.categoryService.addCategory(body);
  }

  @Delete(':id')
  async deleteCategory(@Param('id') id) {
    return await this.categoryService.deleteCategory(id);
  }
}