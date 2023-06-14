import { Injectable, NotFoundException, Type } from '@nestjs/common'
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types'
import { Types } from 'mongoose'
import { InjectModel } from 'nestjs-typegoose'
// import { TelegramService } from 'src/telegram/telegram.service'

import { RoomDto } from './dto/room.dto'
import { RoomModel } from './room.model'

@Injectable()
export class RoomService {
	constructor(
		@InjectModel(RoomModel) private readonly RoomModel: ModelType<RoomModel>
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

		return this.RoomModel.find(options)
			.select('-updatedAt -__v')
			.sort({ createdAt: 'desc' })
			.populate('courses authors')
			.exec()
	}

	async byVideos(
		videoIds: Types.ObjectId[]
	) /*: Promise<DocumentType<VideoModel>[]>*/ {
		// return this.VideoModel.find({ genres: { $in: courseIds } }).exec()
		const docs = await this.RoomModel.find({
			videos: { $in: videoIds },
		}).exec()
		if (!docs) throw new NotFoundException('Videos not found')
		return docs
	}

	/* Admin area */
	async byId(_id: string) /*: Promise<DocumentType<VideoModel>>*/ {
		// return this.VideoModel.findById(_id).exec()
		const doc = await this.RoomModel.findById(_id).exec()
		if (!doc) throw new NotFoundException('Videos not found')
		return doc
	}

	async create() /*: Promise<Types.ObjectId>*/ {
		const defaultValue: RoomDto = {
			title: '',
			videos: [],
			videoUrl: '',
		}
		const room = await this.RoomModel.create(defaultValue)
		return room._id
	}

	async update(
		_id: string,
		dto: RoomDto
	) /*: Promise<DocumentType<VideoModel> | null> */ {
		// return this.VideoModel.findByIdAndUpdate(_id, dto, { new: true }).exec()
		const updateDoc = await this.RoomModel.findByIdAndUpdate(_id, dto, {
			new: true,
		}).exec()
		if (!updateDoc) throw new NotFoundException('Rooms not found')
		return updateDoc
	}

	async delete(id: string) /*: Promise<DocumentType<VideoModel> | null> */ {
		// return this.VideoModel.findByIdAndDelete(id).exec()
		const deleteDoc = await this.RoomModel.findByIdAndDelete(id).exec()
		if (!deleteDoc) throw new NotFoundException('Rooms not found')
		return deleteDoc
	}
}
