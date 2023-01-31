import * as mongoose  from "mongoose";

export const QuizSchema = new mongoose.Schema(
    {
        question: {
            type: String,
            required: true,
        },
        options: {
            type: Array,
            required: true,
        },
        answer: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);