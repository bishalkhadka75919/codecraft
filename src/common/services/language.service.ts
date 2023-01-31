import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Language } from '../../../shared/Language';

@Injectable()
export class LanguageService {
  constructor(@InjectModel('Language') private languageModel : Model<Language> ) {}
  async getAllLanguages() {
    return await this.languageModel.find({});
  }

  async addNewLanguage(body) {
    const { languageType } = body;
    const savedLanguage = new this.languageModel({ languageType });
    await savedLanguage.save();
    return { message: 'New language added!' };
  }

  async deleteLanguage(id) {
    await this.languageModel.findByIdAndDelete(id);
    return { message: 'Language Deleted!' };
  }
}