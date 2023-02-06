import mongoose, { Schema } from "mongoose";

export const ChapterSchema = new Schema({
    chapterTitle: { type: String, required: true },
    content: { type: String, required: true },
    isFree: { type: Boolean, default: false },
    lessonId: { type: mongoose.Types.ObjectId, ref: 'courseLesson', required: true },
});

export const LessonSchema = new Schema({
    lessonTitle: { type: String, required: true },
    chapters: [{ type: mongoose.Types.ObjectId, ref: 'courseChapter' }],
    courseId: { type: mongoose.Types.ObjectId, ref: 'Course' },
});
    
export const CourseLearnSchame = new Schema({
    lessons: [{ type: mongoose.Types.ObjectId, ref: 'courseLesson' }],
    lessonCount: {
        type: Number,
        set: function () {
            return this.lessons.length;
        },
    },
    courseId: { type: mongoose.Types.ObjectId, ref: 'Course' },
});