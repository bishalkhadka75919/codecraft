import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course } from 'shared/Course';
import { Description } from 'shared/Description';

@Injectable()
export class DescriptionService {

    constructor( 
        @InjectModel('Course') private courseModel:Model<Course>,
        @InjectModel('courseDescription') private descriptionModel:Model<Description>

    ) { }
    async getDescription(id: string): Promise<Description> {
        try {
        const description = await this.descriptionModel.findOne({
        courseId: { $eq: id },
        });
                return description;
            } catch (err) {
                throw new Error(err);
            }
    }

async addDescription(courseId: string, description: Description): Promise<Description> {
    try {
        const newDescription = await this.descriptionModel.create({
            ...description,
            courseId,
        });

        const course = await this.courseModel.findById(courseId);
        course.description = newDescription._id.toString();
        await course.save();

        return newDescription;
    } catch (err) {
        throw new Error(err);
    }
}

async updateDescription(descriptionId: string, description: Description): Promise<Description> {
    try {
        const descriptionAdded = await this.descriptionModel.findByIdAndUpdate(
            descriptionId,
            description,
            { new: true }
        );

        return descriptionAdded;
    } catch (err) {
        throw new Error(err);
    }
}
}