import mongoose from "mongoose";

export const LanguageSchema = new mongoose.Schema({
    languageType: { type: String, required: true },
})
