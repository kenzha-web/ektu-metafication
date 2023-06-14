import { Module } from '@nestjs/common'
import { TypegooseModule } from 'nestjs-typegoose'
// import { UserModule } from 'src/user/user.module'
import { RoomController } from './room.controller'
import { RoomModel } from './room.model'
import { RoomService } from './room.service'

@Module({
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: RoomModel,
				schemaOptions: {
					collection: 'Room',
				},
			},
		]),
		// UserModule,
	],
	controllers: [RoomController],
	providers: [RoomService],
	exports: [RoomService],
})
export class RoomModule {}
