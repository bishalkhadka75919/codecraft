import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Course } from "shared/Course";
import { Example } from "shared/Example";
import { Solution } from "shared/Solution";
import { CreateExampleDto } from "../dtos/create-example.dto";

@Injectable()
export class ExampleService {
    constructor(
        @InjectModel("Example") private exampleModel: Model<Example>,
        @InjectModel("Solution") private solutionModel: Model<Solution>,
        @InjectModel('Course') private courseModel:Model<Course>,
        ){}
        
    async createExample(id,body:CreateExampleDto){
        const createdSolutions = await Promise.all(body.solutions.map(async solution => {
            const createdSolution = new this.solutionModel( solution );
            console.log(solution);
            await createdSolution.save();
            return createdSolution._id.toString();
        }));
        console.log(createdSolutions)
        const createdExample = new this.exampleModel({
            question:body.question,
            solutions:createdSolutions
        });
        createdExample.save();

        console.log(createdExample);

        // const elements= body.solution;
        // const ids= await this.createSolutions(elements);

        // const example= await this.exampleModel.create({
        //     question:body.question,
        //     solutions:ids,
        // })

        const course = await this.courseModel.findById(id);
        course.example = createdExample._id.toString();
        await course.save();
        }

    async findExampleById(id): Promise<CreateExampleDto>{
        return await this.exampleModel.findById((await this.courseModel.findById(id)).example)
        .populate('solutions');
    }

    // async createSolutions(elements, ids=[]){

    //     // elements.forEach(
    //     //     async (element)=> {
    //     //         const solution= await this.solutionModel.create({category:element.category,description:element.description});
    //     //         ids.push(solution._id.toString());
    //     //     })
    //     // return ids;
    // }

    async deleteSolutionById(id){
        await this.solutionModel.deleteOne({_id:id});
    }

    async deleteExamplebyId(id){
        // await this.exampleModel.deleteOne({_id:id});
        return await this.exampleModel.findByIdAndDelete(id).populate('solutions');
    }

    async updateExample(id, body){
        const updatedSolutions = await Promise.all(body.solutions.map(async solution => {
            const updatedSolution = await this.solutionModel.findByIdAndUpdate(solution._id, { solution }, { new: true }).exec();
            return updatedSolution._id;
        }));
        body.solutions = updatedSolutions;
    return await this.exampleModel.findByIdAndUpdate(id, body, { new: true }).populate('solutions');
        // const updatedSolution = await this.solutionModel.findByIdAndUpdate(
        //     id,
        //     body,
        //     { new: true }
        // );

        // return updatedSolution;
    }

    async getAllExamples(){
        return await this.exampleModel.find({})
        .populate('solutions')
    }

}