import { IsNotEmpty, MinLength } from 'class-validator'
import { Types } from 'mongoose'

export class CourseIdsDto {
	@IsNotEmpty()
	@MinLength(24, { each: true })
	courseIds: Types.ObjectId[]
}
