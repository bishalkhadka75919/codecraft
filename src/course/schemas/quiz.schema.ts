import * as mongoose  from "mongoose";
import { Schema } from "mongoose";

export const QuizSchema = new Schema({
    quizTitle: { type: String, required: true },
    questions: [{ type: mongoose.Types.ObjectId, ref: 'courseQuestion' }],
    courseId: { type:mongoose.Types.ObjectId, ref: 'Course' },
    chapterId: { type:mongoose.Types.ObjectId, ref: 'courseChapter' },
    lessonId: { type:mongoose.Types.ObjectId, ref: 'courseLesson', required: true },
  });
