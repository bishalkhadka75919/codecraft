import mongoose from "mongoose";

export const CourseSchema = new mongoose.Schema(
    {
        courseName: { type: String, required: true },
        tagLine: { type: String, required: true },
        price: { type: String, required: true },
        hasDiscount: { type: Boolean, required: true, default: false },
        discountPrice: String,
        banner: { type: String, required: true },
        bannerImageUrl: String,
        isFeatured: { type: Boolean, required: true, default: false },
        description: {
            type: mongoose.Types.ObjectId,
            ref: 'courseDescription',
        },
        quiz: { type: mongoose.Types.ObjectId, ref: 'courseQuiz' },
        learn: { type: mongoose.Types.ObjectId, ref: 'courseLearn' },
    },
    { timestamps: true }
);

CourseSchema.set('toJSON', {
    transform: (_doc, ret) => {
        ret.id = ret._id.toString();
        delete ret._id;
        delete ret.__v;
    },
});