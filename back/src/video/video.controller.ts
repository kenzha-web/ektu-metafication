import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	NotFoundException,
	Param,
	Post,
	Put,
	Query,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
import { IdValidationPipe } from '../pipes/id.validation.pipe'
import { VideoDto } from './dto/video.dto'
import { VideoService } from './video.service'
import { Auth } from 'src/auth/decorators/Auth.decorator'
import { Types } from 'mongoose'
import { CourseIdsDto } from './dto/courseIds.dto'

@Controller('videos')
export class VideoController {
	constructor(private readonly videoService: VideoService) {}

	@Get('by-slug/:slug')
	async bySlug(@Param('slug') slug: string) {
		return this.videoService.bySlug(slug)
	}

	@Get('by-author/:authorId')
	async byAuthor(
		@Param('authorId', IdValidationPipe) authorId: Types.ObjectId
	) {
		return this.videoService.byAuthor(authorId)
	}

	@UsePipes(new ValidationPipe())
	@Post('by-courses')
	@HttpCode(200)
	async byCourses(
		@Body()
		{ courseIds }: CourseIdsDto
	) {
		return this.videoService.byCourses(courseIds)
	}

	@Get()
	async getAll(@Query('searchTerm') searchTerm?: string) {
		return this.videoService.getAll(searchTerm)
	}

	@Get('/most-popular')
	async getMostPopular() {
		return this.videoService.getMostPopular()
	}

	@Put('/update-count-opened')
	@HttpCode(200)
	async updateCountOpened(@Body('slug') slug: string) {
		return this.videoService.updateCountOpened(slug)
	}

	@Get(':id')
	@Auth('admin')
	async get(@Param('id', IdValidationPipe) id: string) {
		return this.videoService.byId(id)
	}

	@Post()
	@HttpCode(200)
	@Auth('admin')
	async create() {
		return this.videoService.create()
	}

	@UsePipes(new ValidationPipe())
	@Put(':id')
	@HttpCode(200)
	@Auth('admin')
	async update(
		@Param('id', IdValidationPipe) id: string,
		@Body() dto: VideoDto
	) {
		// const updateMovie = await this.videoService.update(id, dto)
		// if (!updateMovie) throw new NotFoundException('Movie not found')
		// return updateMovie
		return this.videoService.update(id, dto)
	}

	@Delete(':id')
	@HttpCode(200)
	@Auth('admin')
	async delete(@Param('id', IdValidationPipe) id: string) {
		// const deletedDoc = await this.videoService.delete(id)
		// if (!deletedDoc) throw new NotFoundException('Movie not found')
		return this.videoService.delete(id)
	}
}
