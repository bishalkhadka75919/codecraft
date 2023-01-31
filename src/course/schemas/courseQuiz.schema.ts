import mongoose from "mongoose";

export const quizSchema = new mongoose.Schema(
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
