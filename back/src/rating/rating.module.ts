import { Module } from '@nestjs/common'
import { RatingService } from './rating.service'
import { RatingController } from './rating.controller'
import { TypegooseModule } from 'nestjs-typegoose'
import { RatingModel } from './rating.model'
import { VideoModule } from 'src/video/video.module'

@Module({
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: RatingModel,
				schemaOptions: {
					collection: 'Rating',
				},
			},
		]),
		VideoModule,
	],
	controllers: [RatingController],
	providers: [RatingService],
	exports: [RatingService],
})
export class RatingModule {}
