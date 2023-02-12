import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "src/auth/user.entity";
import { EventController } from "./event.controller";
import { EventEntity } from "./event.entity";
import { EventService } from "./event.service";

@Module({
  imports: [TypeOrmModule.forFeature([EventEntity, UserEntity])],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
