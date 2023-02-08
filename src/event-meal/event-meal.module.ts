import { Module } from "@nestjs/common";
import { EventMealService } from "./event-meal.service";
import { EventMealController } from "./event-meal.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EventMealEntity } from "./event-meal.entity";
import { UserEntity } from "src/auth/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([EventMealEntity, UserEntity])],
  providers: [EventMealService],
  controllers: [EventMealController],
})
export class EventMealModule {}
