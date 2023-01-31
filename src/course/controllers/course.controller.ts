import { BadGatewayException, BadRequestException, Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { stdout } from 'process';
import { Course } from 'shared/Course';
import { Roles } from 'shared/decorators/roles.decorator';
import { Role } from 'shared/enums/role.enum';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { CourseService } from '../services/course.service';

@Controller('course')
@ApiTags('Course')
export class CourseController {
    constructor(private courseService:CourseService){}
    // @Roles(Role.Admin)
    // @UseGuards(JwtAuthGuard)
    @Get()
    async getCourses(){
        return await this.courseService.getCourse();
    }

    @Roles(Role.Admin)
    @UseGuards(JwtAuthGuard)
    @Post()
    async addCourse(@Body() body: Course){
        await this.courseService.createCourse(body);
    }

    @Get(":id")
    async getCourse(@Param("id") id:string){
        return await this.courseService.getCourseById(id);
    }

    @Post(":id")
    addCourseDesc(@Param("id") id:string, @Body() body: Course){

    }


    @Roles(Role.Admin)
    @UseGuards(JwtAuthGuard)
    @Put(":id")
    async updateCourse(@Param("id") id: string,@Body() body:Course){
        if (body._id){
            throw new BadRequestException("Cannot change ID");
        }
        return await this.courseService.updateCourse(id,body);
    }

    @Delete("id")
    deleteCourse(){

    }
}
