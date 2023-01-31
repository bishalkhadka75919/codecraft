import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import {Course} from "../../../shared/Course"

@Injectable()
export class CourseService {
    constructor(@InjectModel("Course") private courseModel:Model<Course> ){

    }

    async getCourse(){
        return await this.courseModel
        .find({})
        .populate('description')
        .populate('learn')
        .populate('quiz');

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
        .populate('quiz')

    }

    async createCourse(body: Course){
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
    addCourseContext(){

    }
}
