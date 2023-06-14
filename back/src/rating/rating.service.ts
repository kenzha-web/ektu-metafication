import { Injectable } from '@nestjs/common'
import { ModelType } from '@typegoose/typegoose/lib/types'
import { InjectModel } from 'nestjs-typegoose'
import { Types } from 'mongoose'
import { RatingModel } from './rating.model'
import { SetRatingDto } from './dto/set-rating.dto'
import { VideoService } from 'src/video/video.service'

@Injectable()
export class RatingService {
	constructor(
		@InjectModel(RatingModel)
		private readonly RatingModel: ModelType<RatingModel>,
		private readonly videoService: VideoService
	) {}

	async getVideoValueByUser(videoId: Types.ObjectId, userId: Types.ObjectId) {
		return this.RatingModel.findOne({ videoId, userId })
			.select('value')
			.exec()
			.then((data) => (data ? data.value : 0))
	}

	async averageRatingByVideo(videoId: Types.ObjectId | string) {
		const ratingsVideo: RatingModel[] = await this.RatingModel.aggregate()
			.match({ videoId: new Types.ObjectId(videoId) })
			.exec()

		return (
			ratingsVideo.reduce((acc, item) => acc + item.value, 0) /
			ratingsVideo.length
		)
	}

	async setRating(userId: Types.ObjectId, dto: SetRatingDto) {
		const { videoId, value } = dto

		const newRating = await this.RatingModel.findOneAndUpdate(
			{ videoId, userId },
			{
				videoId,
				userId,
				value,
			},
			{ new: true, upsert: true, setDefaultsOnInsert: true }
		).exec()

		const averageRating = await this.averageRatingByVideo(videoId)

		await this.videoService.updateRating(videoId, averageRating)

		return newRating
	}
}
