    import { Controller, Get, Param, Body, Post, Put, UseGuards, Delete } from '@nestjs/common';
    import { ApiOperation, ApiTags } from '@nestjs/swagger';
    import { Description } from 'shared/Description';
import { CreateDescriptionDto } from '../dtos/create-desc.dto';
    import { DescriptionService } from '../services/courseDescription.service';
    // import { Description } from '../entities/description.model';
    // import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

    @Controller('description')
    @ApiTags('Course Description')
    export class DescriptionController {
    constructor(private readonly descriptionService: DescriptionService) {}

    // @UseGuards(JwtAuthGuard)
    @Get(':descriptionId')
    @ApiOperation({summary:"Get Description By descriptionId"})
    async getDescription(@Param('courseId') id: string): Promise<Description> {
        return this.descriptionService.getDescription(id);
    }

    // @UseGuards(JwtAuthGuard)
    @Post(':courseId')
    @ApiOperation({summary:"Add Description By CourseId"})
    async addDescription(@Param('courseId') courseId: string, @Body() description: CreateDescriptionDto): Promise<Description> {
        return this.descriptionService.addDescription(courseId, description);
    }

    // @UseGuards(JwtAuthGuard)
    @Put(':descriptionId')
    @ApiOperation({summary:"Update Description by DescriptionId"})
    async updateDescription(@Param('descriptionId') descriptionId: string, @Body() description: CreateDescriptionDto): Promise<Description> {
        return this.descriptionService.updateDescription(descriptionId, description);
    }

    @Delete(':descriptionId')
    @ApiOperation({summary:"Delete Description by DescriptionId"})
    async deleteDescription(@Param('descriptionId') descriptionId: string) {
        return this.descriptionService.deleteDescription(descriptionId);
    }
}

