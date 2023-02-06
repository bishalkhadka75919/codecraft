import mongoose from "mongoose";

export const DescriptionSchema = new mongoose.Schema({
    description: { type: String, required: true },
    requirement: { type: String, required: true },
    skillsGained: [{ type: String }],
    duration: String,
    difficulty: String,
    totalLessons: [{ type: String }],
    courseId: { type: mongoose.Types.ObjectId, ref: 'Course' },
});