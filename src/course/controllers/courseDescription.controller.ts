    import { Controller, Get, Param, Body, Post, Put, UseGuards, Delete } from '@nestjs/common';
    import { ApiTags } from '@nestjs/swagger';
    import { Description } from 'shared/Description';
    import { DescriptionService } from '../services/courseDescription.service';
    // import { Description } from '../entities/description.model';
    // import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

    @Controller('description')
    @ApiTags('Course Description')
    export class DescriptionController {
    constructor(private readonly descriptionService: DescriptionService) {}

    // @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getDescription(@Param('id') id: string): Promise<Description> {
        return this.descriptionService.getDescription(id);
    }

    // @UseGuards(JwtAuthGuard)
    @Post(':id')
    async addDescription(@Param('id') courseId: string, @Body() description: Description): Promise<Description> {
        return this.descriptionService.addDescription(courseId, description);
    }

    // @UseGuards(JwtAuthGuard)
    @Put(':descriptionId')
    async updateDescription(@Param('descriptionId') descriptionId: string, @Body() description: Description): Promise<Description> {
        return this.descriptionService.updateDescription(descriptionId, description);
    }

    @Delete(':descriptionId')
    async deleteDescription(@Param('descriptionId') descriptionId: string) {
        return this.descriptionService.deleteDescription(descriptionId);
    }
}

