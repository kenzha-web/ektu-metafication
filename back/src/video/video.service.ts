import { Injectable, NotFoundException, Type } from '@nestjs/common'
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types'
import { Types } from 'mongoose'
import { InjectModel } from 'nestjs-typegoose'
// import { TelegramService } from 'src/telegram/telegram.service'

import { VideoDto } from './dto/video.dto'
import { VideoModel } from './video.model'
import { TelegramService } from 'src/telegram/telegram.service'

@Injectable()
export class VideoService {
	constructor(
		@InjectModel(VideoModel) private readonly VideoModel: ModelType<VideoModel>,
		private readonly telegramService: TelegramService
	) {}

	async getAll(searchTerm?: string) /*: Promise<DocumentType<VideoModel>[]> */ {
		let options = {}

		if (searchTerm) {
			options = {
				$or: [
					{
						title: new RegExp(searchTerm, 'i'),
					},
				],
			}
		}

		return this.VideoModel.find(options)
			.select('-updatedAt -__v')
			.sort({ createdAt: 'desc' })
			.populate('courses authors')
			.exec()
	}

	async bySlug(slug: string) /*: Promise<DocumentType<VideoModel>>*/ {
		// return this.VideoModel.findOne({ slug }).populate('courses authors').exec()
		const doc = await this.VideoModel.findOne({ slug })
			.populate('courses authors')
			.exec()
		if (!doc) throw new NotFoundException('Video not found')
		return doc
	}

	async byAuthor(
		authorId: Types.ObjectId
	) /*: Promise<DocumentType<VideoModel>[]>*/ {
		// return this.VideoModel.find({ authors: authorId }).exec()
		const docs = await this.VideoModel.find({ authors: authorId }).exec()
		if (!docs) throw new NotFoundException('Videos not found')
		return docs
	}

	async byCourses(
		courseIds: Types.ObjectId[]
	) /*: Promise<DocumentType<VideoModel>[]>*/ {
		// return this.VideoModel.find({ genres: { $in: courseIds } }).exec()
		const docs = await this.VideoModel.find({
			courses: { $in: courseIds },
		}).exec()
		if (!docs) throw new NotFoundException('Videos not found')
		return docs
	}

	async getMostPopular() /*: Promise<DocumentType<VideoModel>[]>*/ {
		return this.VideoModel.find({ countOpened: { $gt: 0 } })
			.sort({ countOpened: -1 })
			.populate('courses')
			.exec()
	}

	async updateCountOpened(slug: string) {
		// return this.VideoModel.findOneAndUpdate({ slug },{ $inc: { countOpened: 1 } }).exec()
		const updateDoc = await this.VideoModel.findOneAndUpdate(
			{ slug },
			{ $inc: { countOpened: 1 } },
			{ new: true }
		).exec()
		if (!updateDoc) throw new NotFoundException('Videos not found')
		return updateDoc
	}

	async updateRating(id: Types.ObjectId, newRating: number) {
		return this.VideoModel.findByIdAndUpdate(
			id,
			{ rating: newRating },
			{ new: true }
		).exec()
	}

	/* Admin area */

	async byId(_id: string) /*: Promise<DocumentType<VideoModel>>*/ {
		// return this.VideoModel.findById(_id).exec()
		const doc = await this.VideoModel.findById(_id).exec()
		if (!doc) throw new NotFoundException('Videos not found')
		return doc
	}

	async create() /*: Promise<Types.ObjectId>*/ {
		const defaultValue: VideoDto = {
			bigPoster: '',
			authors: [],
			courses: [],
			poster: '',
			title: '',
			videoUrl: '',
			slug: '',
		}
		const video = await this.VideoModel.create(defaultValue)
		return video._id
	}

	async update(
		_id: string,
		dto: VideoDto
	) /*: Promise<DocumentType<VideoModel> | null> */ {
		// Telegram notification
		if (!dto.isSendTelegram) {
			await this.sendNotifications(dto)
			dto.isSendTelegram = true
		}

		// return this.VideoModel.findByIdAndUpdate(_id, dto, { new: true }).exec()
		const updateDoc = await this.VideoModel.findByIdAndUpdate(_id, dto, {
			new: true,
		}).exec()
		if (!updateDoc) throw new NotFoundException('Videos not found')
		return updateDoc
	}

	async delete(id: string) /*: Promise<DocumentType<VideoModel> | null> */ {
		// return this.VideoModel.findByIdAndDelete(id).exec()
		const deleteDoc = await this.VideoModel.findByIdAndDelete(id).exec()
		if (!deleteDoc) throw new NotFoundException('Videos not found')
		return deleteDoc
	}

	/* Utilites */
	async sendNotifications(dto: VideoDto) {
		// if (process.env.NODE_ENV !== 'development')
		// await this.telegramService.sendPhoto(dto.poster)
		await this.telegramService.sendPhoto(
			'https://www.verdict.co.uk/wp-content/uploads/2022/08/shutterstock_1722481084-scaled.jpg'
		)

		const msg = `<b>${dto.title}</b>`

		await this.telegramService.sendMessage(msg, {
			reply_markup: {
				inline_keyboard: [
					[
						{
							url: 'https://okko.tv/movie/free-guy',
							text: 'Перейти',
						},
					],
				],
			},
		})
	}
}
