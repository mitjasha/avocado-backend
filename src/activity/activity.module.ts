import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EventActivityEntity } from "src/event-activity/event-activity.entity";
import { ActivityController } from "./activity.controller";
import { ActivityEntity } from "./activity.entity";
import { ActivityService } from "./activity.service";

@Module({
  imports: [TypeOrmModule.forFeature([EventActivityEntity, ActivityEntity])],
  controllers: [ActivityController],
  providers: [ActivityService],
})
export class ActivityModule {}
