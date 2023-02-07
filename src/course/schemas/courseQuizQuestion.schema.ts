import mongoose, { Schema } from "mongoose";

export const courseQuizQuestionSchema = new Schema({
  title: String,
  questionType: String,
  options: [String],
  answer: String,
  quizId: { type: mongoose.Types.ObjectId, ref: 'courseQuiz', required: true },
});