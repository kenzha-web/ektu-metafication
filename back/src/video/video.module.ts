import { Module } from '@nestjs/common'
import { TypegooseModule } from 'nestjs-typegoose'
// import { UserModule } from 'src/user/user.module'
import { VideoController } from './video.controller'
import { VideoModel } from './video.model'
import { VideoService } from './video.service'
import { TelegramModule } from 'src/telegram/telegram.module'

@Module({
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: VideoModel,
				schemaOptions: {
					collection: 'Video',
				},
			},
		]),
		TelegramModule,
		// UserModule,
	],
	controllers: [VideoController],
	providers: [VideoService],
	exports: [VideoService],
})
export class VideoModule {}
