import mongoose from "mongoose";


export const CategorySchema = new mongoose.Schema({
    categoryName: { type: String, required: true }
})

