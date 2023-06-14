import { IsArray, IsEmail, IsString } from 'class-validator'

export class RoomDto {
	@IsString()
	title: string

	@IsString()
	videoUrl: string

	@IsArray()
	@IsString({ each: true })
	videos: string[]
}
