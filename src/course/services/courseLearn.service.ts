import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Lesson, Chapter } from 'shared/CourseLearn';

@Injectable()
export class CourseLearnService {
    constructor(
        @InjectModel("Lesson") private lessonModel: Model<Lesson>,
        @InjectModel("Chapter") private chapterModel: Model<Chapter>
    ) { }
    async getAll() {
        const learn = await this.lessonModel
            .find({})
            .populate('lessons')
            .populate('chapters');
        return {
            success: true,
            learn,
        };
    }

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
        return {
            success: true,
            ...response,
        };
    }

    async addLesson(lesson, courseId) {
        await this.lessonModel.create({ ...lesson, courseId });
        return {
            success: true,
            message: 'lesson added!',
        };
    }

    async getLesson(lessonId, courseId) {
        let lessons, lesson;

        if (lessonId) {
            lesson = await this.lessonModel.findById(lessonId);
        } else {
            lessons = await this.lessonModel.find({ courseId }).populate('chapters');
        }

        const response = { lesson: lessons ? lessons : lesson };
        return {
            success: true,
            ...response,
        };
    }
}