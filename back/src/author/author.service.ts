import { Injectable, NotFoundException } from '@nestjs/common'
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types'
import { Types } from 'mongoose'
import { InjectModel } from 'nestjs-typegoose'
import { AuthorModel } from './author.model'
import { AuthorDto } from './author.dto'

@Injectable()
export class AuthorService {
	constructor(
		@InjectModel(AuthorModel)
		private readonly AuthorModel: ModelType<AuthorModel>
	) {}

	async bySlug(slug: string) {
		// return this.AuthorModel.findOne({ slug }).exec()
		const doc = await this.AuthorModel.findOne({ slug }).exec()
		if (!doc) throw new NotFoundException('Author not found')
		return doc
	}

	async getAll(searchTerm?: string) {
		let options = {}

		if (searchTerm) {
			options = {
				$or: [
					{
						name: new RegExp(searchTerm, 'i'),
					},
					{
						slug: new RegExp(searchTerm, 'i'),
					},
				],
			}
		}

		// return (
		// 	this.AuthorModel.aggregate()
		// 		.match(options)
		// 		.lookup({
		// 			from: 'Movie',
		// 			localField: '_id',
		// 			foreignField: 'actors',
		// 			as: 'movies',
		// 		})
		/* .lookup({
				from: 'Movie',
				let: { id: '$_id' },
				pipeline: [
					{
						$match: { $expr: { $in: ['$$id', '$actors'] } },
					},
				],
				as: 'movies',
			}) */
		// 		.addFields({
		// 			countMovies: { $size: '$movies' },
		// 		})
		// 		.project({ __v: 0, updatedAt: 0, movies: 0 })
		// 		.sort({ createdAt: -1 })
		// 		.exec()
		// )

		// Remove some field
		// why count movies only 1

		return this.AuthorModel.aggregate()
			.match(options)
			.lookup({
				from: 'Video',
				foreignField: 'authors',
				localField: '_id',
				as: 'videos',
			})
			.addFields({
				countVideos: { $size: '$videos' },
			})
			.project({ __v: 0, updatedAt: 0, videos: 0 })
			.sort({ createdAt: -1 })
			.exec()
	}

	/* Admin place */
	async byId(_id: string) /*: Promise<DocumentType<AuthorModel>>*/ {
		// return this.AuthorModel.findById(id).exec()
		const author = await this.AuthorModel.findById(_id)
		if (!author) throw new NotFoundException('Author not found')

		return author
	}

	async create() /*: Promise<Types.ObjectId>*/ {
		const defaultValue: AuthorDto = {
			name: '',
			photo: '',
			slug: '',
		}
		const author = await this.AuthorModel.create(defaultValue)
		return author._id
	}

	async update(
		_id: string,
		dto: AuthorDto
	) /*: Promise<DocumentType<AuthorModel> | null>*/ {
		// return this.AuthorModel.findByIdAndUpdate(_id, dto, { new: true }).exec()

		const updateDoc = await this.AuthorModel.findByIdAndUpdate(_id, dto, {
			new: true,
		}).exec()

		if (!updateDoc) throw new NotFoundException('Author not found')

		return updateDoc
	}

	async delete(id: string) /*: Promise<DocumentType<AuthorModel> | null>*/ {
		// return this.AuthorModel.findByIdAndDelete(id).exec()
		const deleteDoc = this.AuthorModel.findByIdAndDelete(id).exec()

		if (!deleteDoc) throw new NotFoundException('Author not found')

		return deleteDoc
	}
}
