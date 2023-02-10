import mongoose from "mongoose";

export const CheatSheetSchema = new mongoose.Schema(
    {
        cheatsheetTitle:{
            type:String,
            required:true
        },

        cheats:[{ 
                type: mongoose.Types.ObjectId,
                 ref: 'cheat' 
            }]
    },
);


export const CheatScehma = new mongoose.Schema({
        title:{
            type:String,
            required:true
        },
        cheats:[{
            type:mongoose.Types.ObjectId,
            ref:'cheatItems'
        }]
    })

export const CheatItemsSchema = new mongoose.Schema({
        cheatTitle:{
            type:String,
            required:true
        },
        cheatDescription:{
            tyoe:String,
            required:true,
        }
    })
