import { prop, Ref } from '@typegoose/typegoose'
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'
import { VideoModel } from 'src/video/video.model'

export interface RoomModel extends Base {}

export class RoomModel extends TimeStamps {
	@prop({ unique: true })
	title: string

	@prop({ unique: true })
	videoUrl: string

	@prop({ ref: () => VideoModel })
	videos: Ref<VideoModel>[]
}
