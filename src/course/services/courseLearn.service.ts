import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Lesson, Chapter, CourseLearn } from 'shared/CourseLearn';

@Injectable()
export class CourseLearnService {
    constructor(
        @InjectModel("courseLesson") private lessonModel: Model<Lesson>,
        @InjectModel("courseChapter") private chapterModel: Model<Chapter>,
        @InjectModel("courseLearn") private couseLearnModel: Model<CourseLearn>
    ) { }
    // async getAll() {
    //     const learn = await this.couseLearnModel
    //         .find({})
    //         .populate('lessons')
    //         .populate('chapters');
    //     return learn;
    // }

    async addChapter(chapter, lessonId) {
        const addedChapter = await this.chapterModel.create({ ...chapter, lessonId });
        const lesson = await this.lessonModel.findById(lessonId);
        lesson.chapters.push(addedChapter._id.toString());
        await lesson.save();

        return {
            success: true, 
            message: 'chapter added!',
        };
    }

    async getChapter(chapterId, lessonId) {
        let chapter, chapters;
        if (chapterId) {
            chapter = await this.chapterModel.findById(chapterId);
        } else {
            chapters = (await this.lessonModel.findById(lessonId).populate('chapters')).chapters;
        }

        const response = chapter ? { chapter } : { chapters };
        // console.log(await this.lessonModel.find({})," lol");
        return {
            success: true,
            ...response,
        };
    }

    async deleteChapter(chapterId) {
        await this.chapterModel.findByIdAndDelete(chapterId);

    return { message: 'Chapter deleted!' };
    }

    async updateChapter(chapterId, body) {
        const chapterUpdated = await this.chapterModel.findByIdAndUpdate(
        chapterId,
        body,
        {
            new: true,
        },
        );

        return chapterUpdated;
    }

    async addLesson(lesson, courseId) {
        await this.lessonModel.create({ ...lesson, courseId });
        return {
            success: true,
            message: 'lesson added!',
        };
    }

    async getLesson(param) {
        const { lessonId, chapterId } = param;
        let lessons, lesson;

        if (lessonId) {
            console.log("lesson Id found")
            lesson = await this.lessonModel.findById(lessonId);
        } else {
            lessons = await this.lessonModel.find({ chapterId }).populate('chapters');
        }

        const response = { lesson: lessons ? lessons : lesson };
        return {
            success: true,
            ...response,
        };
    }

    async deleteLesson(lessonId) {
    await this.lessonModel.findByIdAndDelete(lessonId);

    return {
      success: true,
      message: 'lesson deleted!',
    };
  }

  async updateLesson(lessonId, body) {
    const updatedLesson = await this.lessonModel.findByIdAndUpdate(lessonId, body, {
      new: true,
    });

    return {
      message: 'Lesson Title Changed',
      updatedLesson,
    };
  }
}