import mongoose from "mongoose";

export const questionSchema = new mongoose.Schema({
    question: String,
    solutions: [
        {
            _id: false,
            language: {
                type: String,
                required: true,
            },
            code: {
                type: String,
                required: true,
            },
            explanation: {
                type: String,
                required: true,
            },
        },
    ],
    algorithm: {
        type: String,
        required: true,
    },
    flowchart: {
        type: String,
        required: true,
    },
    category: [{
        type: String,
        required: true,
    }],
    createdOn: String,
});

questionSchema.set('toJSON', {
    transform: (doc, returnObject) => {
        returnObject.id = returnObject._id.toString();
        delete returnObject._id;
        delete returnObject.__v;
    },
});