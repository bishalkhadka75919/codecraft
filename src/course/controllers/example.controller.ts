import { Controller, Get, Post, Body, Param, Delete, Put } from "@nestjs/common";
import { ExampleService } from "../services/example.service";
import { Example } from "shared/Example";
import { Solution } from "shared/Solution";
import { Course } from "shared/Course";

@Controller("example")
export class ExampleController {
    constructor(private exampleService: ExampleService) {}

    @Post(":id")
    async createExample(@Param("id") id, @Body() body) {
        return await this.exampleService.createExample(id, body);
    }

    @Get(":id")
    async findExampleById(@Param("id") id) {
        return await this.exampleService.findExampleById(id);
    }

    @Delete("solution/:id")
    async deleteSolutionById(@Param("id") id) {
        return await this.exampleService.deleteSolutionById(id);
    }

    @Delete(":id")
    async deleteExampleById(@Param("id") id) {
        return await this.exampleService.deleteExamplebyId(id);
    }

    @Put("solution/:id")
    async updateSolutiuon(@Param("id") id, @Body() body) {
        return await this.exampleService.updateSolutiuon(id, body);
    }

    @Get()
    async getAllExamples() {
        return await this.exampleService.getAllExamples();
    }
}