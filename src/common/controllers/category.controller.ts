import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateCategoryDto } from '../dtos/create-cat.dto';
import { CategoryService } from '../services/category.service';

@Controller('categories')
@ApiTags('Common')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  @ApiOperation({summary:"Get Categories"})
  async getCategories() {
    return(
    {
      categories: await this.categoryService.getCategories()
    });
  }

  @Post()
  @ApiOperation({summary:"Add Category"})
  async addCategory(@Body() body:CreateCategoryDto) {
    return await this.categoryService.addCategory(body);
  }

  @Delete(':id')
  @ApiOperation({summary:"Delete Category"})
  async deleteCategory(@Param('id') id) {
    return await this.categoryService.deleteCategory(id);
  }
}