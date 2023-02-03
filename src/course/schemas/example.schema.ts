import mongoose from "mongoose";

export const ExampleSchema = new mongoose.Schema({
    question: { type: String, required:true },
    solutions: [
        { type:mongoose.Types.ObjectId, ref:'solutions'},
            ]
})


export const SolutionSchema= new mongoose.Schema({
    category: { type:String, required:true },
    description: { type:String, required:true }
})