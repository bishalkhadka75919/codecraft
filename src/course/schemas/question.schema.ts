

import mongoose from "mongoose";

export const QuestionSchema = new mongoose.Schema({
    question:{type: String, required:true},
    solution:{ type: String, required:true }
})