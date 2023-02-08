import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "src/auth/user.entity";
import { EventActivityController } from "./event-activity.controller";
import { EventActivityEntity } from "./event-activity.entity";
import { EventActivityService } from "./event-activity.service";

@Module({
  imports: [TypeOrmModule.forFeature([EventActivityEntity, UserEntity])],
  controllers: [EventActivityController],
  providers: [EventActivityService],
})
export class EventActivityModule {}
