import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Solution } from 'shared/Solution';
import {Course} from "../../../shared/Course"
import { CreateCourseDto } from '../dtos/create-course.dto';
import { SolutionSchema } from '../schemas/example.schema';

@Injectable()
export class CourseService {
    constructor(@InjectModel("Course") private courseModel:Model<Course> ){

    }

    async getCourse(){
        return await this.courseModel
        .find({})
        .populate('description')
        .populate('learn')
        .populate('quiz')
        .populate('question')
          .populate({ 
                path: 'example',
                    populate: {
                    path: 'solutions'
            } 
        })
        // .populate('example')
        // .populate({
        //     path: 'example.solutions',
        //     model: 'Solution'
        // })

    }

    async getCourseById(id:string){
        console.log(id);
        return this.courseModel
        .findById(id)
        .populate('description', [
            'info',
            'requirement',
            'description',
            'skillGained',
        ])
        .populate('learn')
        // .populate('quiz')

    }

    async createCourse(body: CreateCourseDto){
        return this.courseModel.create(body);

        // const newCourse = this.courseModel(body);
        // await newCourse.Save();
        // return newCourse.toObject({})

    }

    
    async updateCourse(id:string,body:Partial<Course>){
        return this.courseModel
        .findByIdAndUpdate(id, body, { new: true });
        
    }
    
    async deleteCourse(id:string){
        return await this.courseModel.findByIdAndDelete(id);
        
    }
    addCourseContent(id:string,toPost:string,body){
    //    return  
    }
}
