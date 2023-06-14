import { prop, Ref } from '@typegoose/typegoose'
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'
import { AuthorModel } from 'src/author/author.model'
import { CourseModel } from 'src/course/course.model'

export interface VideoModel extends Base {}

export class Parameters {
	@prop()
	year: number

	@prop()
	duration: number

	@prop()
	university: string
}

export class VideoModel extends TimeStamps {
	@prop()
	poster: string

	@prop()
	bigPoster: string

	@prop({ unique: true })
	title: string

	@prop({ unique: true })
	slug: string

	@prop()
	parameters?: Parameters

	@prop({ default: 4.0 })
	rating?: number

	@prop({ unique: true })
	videoUrl: string

	@prop({ default: 0 })
	countOpened?: number

	@prop({ ref: () => CourseModel })
	courses: Ref<CourseModel>[]

	@prop({ ref: () => AuthorModel })
	authors: Ref<AuthorModel>[]

	@prop({ default: false })
	isSendTelegram?: boolean
}
