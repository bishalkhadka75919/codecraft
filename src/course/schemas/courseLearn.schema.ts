import mongoose, { Schema } from "mongoose";

export const ChapterSchema = new Schema({
    chapterTitle: { type: String, required: true },
    content: { type: String, required: true },
    isFree: { type: Boolean, default: false },
    lessonId: { type: mongoose.Types.ObjectId, ref: 'lesson', required: true },
});

export const LessonSchema = new Schema({
    lessonTitle: { type: String, required: true },
    chapters: [{ type: mongoose.Types.ObjectId, ref: 'chapter' }],
    courseId: { type: mongoose.Types.ObjectId, ref: 'course' },
});

export const CourseLearnSchame = new Schema({
    lessons: [{ type: mongoose.Types.ObjectId, ref: 'lesson' }],
    lessonCount: {
        type: Number,
        set: function () {
            return this.lessons.length;
        },
    },
    courseId: { type: mongoose.Types.ObjectId, ref: 'course' },
});