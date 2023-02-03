import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Course } from "shared/Course";
import { Example } from "shared/Example";
import { Solution } from "shared/Solution";

@Injectable()
export class ExampleService {
    constructor(
        @InjectModel("Example") private exampleModel: Model<Example>,
        @InjectModel("Solution") private solutionModel: Model<Solution>,
         @InjectModel('Course') private courseModel:Model<Course>,
        ){}

        // [
        //     {
        //         question:"",
        //         solution:"",
        //         category:"",
        //         courseId:""
        //     }
        // ]

        
    async createExample(id,body){
        const elements= body.solution;
        const ids= await this.createSolutions(elements);

        const example= await this.exampleModel.create({
            question:body.question,
            solutions:ids,
        })

        const course = await this.courseModel.findById(id);
        course.description = example._id.toString();
        await course.save();
        }

    async findExampleById(id){
        return await this.exampleModel.findById(id)
        .populate('solutions');
    }

    async createSolutions(elements, ids=[]){
        elements.forEach(
            async (element)=> {
                const solution= await this.solutionModel.create({category:element.category,description:element.description});
                ids.push(solution._id.toString());
            })
        return ids;
    }

    async deleteSolutionById(id){
        await this.solutionModel.deleteOne({_id:id});
    }

    async deleteExamplebyId(id){
        await this.exampleModel.deleteOne({_id:id});
    }

    async updateSolutiuon(id, body){
        const updatedSolution = await this.solutionModel.findByIdAndUpdate(
            id,
            body,
            { new: true }
        );

        return updatedSolution;
    }

    async getAllExamples(){
        const example= await this.exampleModel.find({})
        .populate('solutions')
    }

}