import { IsNotEmpty, MinLength } from 'class-validator'
import { Types } from 'mongoose'

export class VideoIdsDto {
	@IsNotEmpty()
	@MinLength(24, { each: true })
	videoIds: Types.ObjectId[]
}
