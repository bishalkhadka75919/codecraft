import { Prop, Schema } from "@nestjs/mongoose";
import * as mongoose  from "mongoose";

// @()
// // export class Question extends Document{
// //     @Colum
// //     question:string;
// // }


// @Schema()
// export class Solutions{
//     @Prop()
//     language:string;

//     @Prop()
//     code:string;

//     @Prop()
//     explanation:string

// }

// @Schema()
// export class Question{
//     @Prop()
//     question:string;

//     @Prop()
//     solution: Solutions;

//     @Prop()
//     algorithm: string;

//     @Prop()
//     category : [string];

//     @Prop()
//     createdOn: string;
// }


export const QuestionSchema = new mongoose.Schema({
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

QuestionSchema.set('toJSON', {
    transform: (doc, returnObject) => {
        returnObject.id = returnObject._id.toString();
        delete returnObject._id;
        delete returnObject.__v;
    },
});

// module.exports = mongoose.model('Question', QuestionSchema);