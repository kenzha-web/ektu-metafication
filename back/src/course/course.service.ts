import { Injectable, NotFoundException } from '@nestjs/common'
import { ModelType } from '@typegoose/typegoose/lib/types'
import { InjectModel } from 'nestjs-typegoose'
import { VideoService } from 'src/video/video.service'
import { ICollection } from './course.interface'
import { CourseModel } from './course.model'
import { CreateCourseDto } from './dto/create-course.dto'

@Injectable()
export class CourseService {
	constructor(
		@InjectModel(CourseModel)
		private readonly CourseModel: ModelType<CourseModel>,
		private readonly videoService: VideoService
	) {}

	async bySlug(slug: string) {
		// return this.CourseModel.findOne({ slug }).exec()
		const doc = await this.CourseModel.findOne({ slug }).exec()
		if (!doc) throw new NotFoundException('Course not found')
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
					{
						description: new RegExp(searchTerm, 'i'),
					},
				],
			}
		}

		return this.CourseModel.find(options)
			.select('-password -updatedAt -__v')
			.sort({ createdAt: 'desc' })
			.exec()
	}

	async getCollections() {
		const courses = await this.getAll()
		// const collections = courses
		const collections = await Promise.all(
			courses.map(async (course) => {
				const videosByCourse = await this.videoService.byCourses([course._id])

				const result: ICollection = {
					_id: String(course._id),
					image: videosByCourse[0].bigPoster,
					slug: course.slug,
					title: course.name,
				}

				return result
			})
		)

		return collections
	}

	/* Admin place */
	async byId(_id: string) {
		const course = await this.CourseModel.findById(_id)
		if (!course) throw new NotFoundException('User not found')

		return course
	}

	async create() {
		const defaultValue: CreateCourseDto = {
			name: '',
			slug: '',
			description: '',
			icon: '',
		}
		const course = await this.CourseModel.create(defaultValue)
		return course._id
	}

	async update(_id: string, dto: CreateCourseDto) {
		return this.CourseModel.findByIdAndUpdate(_id, dto, { new: true }).exec()

		// const updateCourse = await this.CourseModel.findByIdAndUpdate(_id, dto, {
		// 	new: true,
		// }).exec()

		// if (!updateCourse) throw new NotFoundException('Course not found')

		// return updateCourse
	}

	async delete(id: string) {
		return this.CourseModel.findByIdAndDelete(id).exec()

		// const deleteDoc = this.CourseModel.findByIdAndDelete(id).exec()
		// if (!deleteDoc) throw new NotFoundException('Course not found')

		// return deleteDoc
	}
}
