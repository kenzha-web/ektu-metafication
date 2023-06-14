import { Module } from '@nestjs/common'
import { CourseController } from './course.controller'
import { CourseService } from './course.service'
import { TypegooseModule } from 'nestjs-typegoose'
import { CourseModel } from './course.model'
import { VideoModule } from 'src/video/video.module'

@Module({
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: CourseModel,
				schemaOptions: {
					collection: 'Course',
				},
			},
		]),
		VideoModule,
	],
	controllers: [CourseController],
	providers: [CourseService],
})
export class CourseModule {}
