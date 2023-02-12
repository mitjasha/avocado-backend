import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ActivityEntity } from "src/activity/activity.entity";
import { UserEntity } from "src/auth/user.entity";
import { EventActivityController } from "./event-activity.controller";
import { EventActivityEntity } from "./event-activity.entity";
import { EventActivityService } from "./event-activity.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([EventActivityEntity, UserEntity, ActivityEntity]),
  ],
  controllers: [EventActivityController],
  providers: [EventActivityService],
})
export class EventActivityModule {}
