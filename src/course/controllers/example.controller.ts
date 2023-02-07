import { Controller, Get, Post, Body, Param, Delete, Put } from "@nestjs/common";
import { ExampleService } from "../services/example.service";
import { Example } from "shared/Example";
import { Solution } from "shared/Solution";
import { Course } from "shared/Course";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateExampleDto } from "../dtos/create-example.dto";

@Controller("example")
@ApiTags("Course Example")
export class ExampleController {
    constructor(private exampleService: ExampleService) {}

    @Post(":courseId")
    @ApiOperation({summary:"Add Example by Course Id"})
    async createExample(@Param("courseId") id:string, @Body() body:CreateExampleDto) {
        return await this.exampleService.createExample(id, body);
    }

    @Get(":exampleId")
    @ApiOperation({summary:"Find Example by Example Id"})
    async findExampleById(@Param("id") id:string) : Promise<CreateExampleDto> {
        return await this.exampleService.findExampleById(id);
    }

    @Delete("solution/:id")
    @ApiOperation({summary:"Delete Solution by Solution Id"})
    async deleteSolutionById(@Param("id") id:string) {
        return await this.exampleService.deleteSolutionById(id);
    }

    @Delete(":id")
    @ApiOperation({summary:"Delete Example by Example Id"})
    async deleteExampleById(@Param("id") id:string) {
        return await this.exampleService.deleteExamplebyId(id);
    }

    @Put(":id")
    @ApiOperation({summary:"Update Example by Example Id"})
    async updateExample(@Param("id") id:string, @Body() body:CreateExampleDto) {
        return await this.exampleService.updateExample(id, body);
    }

    @Get()
    @ApiOperation({summary:"Get All Examples"})
    async getAllExamples() {
        return await this.exampleService.getAllExamples();
    }
}