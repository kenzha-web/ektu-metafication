import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypegooseModule } from 'nestjs-typegoose'
import { getMongoConfig } from './config/mongo.config'
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { CourseModule } from './course/course.module';
import { FileModule } from './file/file.module';
import { AuthorModule } from './author/author.module';
import { VideoModule } from './video/video.module';
import { RatingModule } from './rating/rating.module';
import { TelegramModule } from './telegram/telegram.module';
import { RoomModule } from './room/room.module';

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypegooseModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getMongoConfig,
		}),
		AuthModule,
		UserModule,
		CourseModule,
		FileModule,
		AuthorModule,
		VideoModule,
		RatingModule,
		TelegramModule,
		RoomModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
