import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from '../../shared/Category';

@Injectable()
export class CategoryService {
  constructor(@InjectModel('Category') private categoryModel:Model<Category>){}
  async getCategories() {
    return await this.categoryModel.find({});
  }

  async addCategory(body) {
    const { categoryName } = body;
    const savedCategory = new this.categoryModel({ categoryName });
    await savedCategory.save();
    return { message: 'Category added!' };
  }

  async deleteCategory(id) {
    await this.categoryModel.findByIdAndDelete(id);
    return { message: 'Category Deleted!' };
  }
}