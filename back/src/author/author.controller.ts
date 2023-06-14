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
import { Auth } from 'src/auth/decorators/Auth.decorator'
import { IdValidationPipe } from 'src/pipes/id.validation.pipe'
import { AuthorService } from './author.service'
import { AuthorDto } from './author.dto'

@Controller('authors')
export class AuthorController {
	constructor(private readonly authorService: AuthorService) {}

	@Get()
	async getAll(@Query('searchTerm') searchTerm?: string) {
		return this.authorService.getAll(searchTerm)
	}

	@Get('by-slug/:slug')
	async bySlug(@Param('slug') slug: string) {
		return this.authorService.bySlug(slug)
	}

	@UsePipes(new ValidationPipe())
	@Post()
	@HttpCode(200)
	@Auth('admin')
	async create() {
		return this.authorService.create()
	}

	@Get(':id')
	@Auth('admin')
	async get(@Param('id', IdValidationPipe) id: string) {
		return this.authorService.byId(id)
	}

	@UsePipes(new ValidationPipe())
	@Put(':id')
	@HttpCode(200)
	@Auth('admin')
	async update(
		@Param('id', IdValidationPipe) id: string,
		@Body() dto: AuthorDto
	) {
		const updateAuthor = await this.authorService.update(id, dto)
		if (!updateAuthor) throw new NotFoundException('Author not found')
		return updateAuthor
	}

	@Delete(':id')
	@Auth('admin')
	async delete(@Param('id', IdValidationPipe) id: string) {
		const deletedDoc = await this.authorService.delete(id)
		if (!deletedDoc) throw new NotFoundException('Author not found')
	}
}
