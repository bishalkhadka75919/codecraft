import { BadGatewayException, BadRequestException, Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { Course} from 'shared/Course';
import { Roles } from 'shared/decorators/roles.decorator';
import { Role } from 'shared/enums/role.enum';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { CreateCourseDto } from '../dtos/create-course.dto';
import { CourseService } from '../services/course.service';

@Controller('course')
@ApiTags('Course')
export class CourseController {
    constructor(private courseService:CourseService){}
    // @Roles(Role.Admin)
    // @UseGuards(JwtAuthGuard)
    
    @ApiOperation({summary:"Get All Courses"})
    @Get()
    async getCourses(){
        return await this.courseService.getCourse();
    }

    @Roles(Role.Admin)
    @UseGuards(JwtAuthGuard)
    @ApiOperation({summary:"Add a new Course"})
    @Post()
    async addCourse(@Body() body: CreateCourseDto){
        await this.courseService.createCourse(body);
    }

    @Get(":courseId")
    @ApiOperation({summary:"Get Course by CourseId"})
    async getCourse(@Param("courseId") id:string):Promise<Course>{
        return await this.courseService.getCourseById(id);
    }


    @Roles(Role.Admin)
    @UseGuards(JwtAuthGuard)
    @Put(":courseId")
    @ApiOperation({summary:"Update Course by Course Id"})
    async updateCourse(@Param("courseId") id: string,@Body() body:CreateCourseDto){
        if (body._id){
            throw new BadRequestException("Cannot change ID");
        }
        return await this.courseService.updateCourse(id,body);
    }

    @Delete(":courseId")
    @ApiOperation({summary:"Delete Course by Course Id"})
    async deleteCourse(@Param("courseId") id){
        return await this.courseService.deleteCourse(id);
    }
}
