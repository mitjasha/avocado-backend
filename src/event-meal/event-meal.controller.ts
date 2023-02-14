import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from "@nestjs/common";
import { GetUser } from "src/auth/get-user.decorator";
import { AuthGuard } from "src/auth/guards/auth.guard";
import { UserEntity } from "src/auth/user.entity";
import { CreateEventMealDto } from "./dto/createEventMeal.dto";
import { UpdateEventMealDto } from "./dto/updateEventMeal.dto";
import { EventMealEntity } from "./event-meal.entity";
import { EventMealService } from "./event-meal.service";

@Controller("event-meal")
export class EventMealController {
  constructor(private eventService: EventMealService) {}

  @Post("/addEvent")
  @UseGuards(AuthGuard)
  async createEvent(
    @GetUser() user: UserEntity,
    @Body()
    createEventDto: CreateEventMealDto,
  ): Promise<EventMealEntity> {
    return this.eventService.createEvent(createEventDto, user);
  }

  @Get("/getAllEvents")
  @UseGuards(AuthGuard)
  async getEvents(@GetUser() user: UserEntity): Promise<EventMealEntity[]> {
    return this.eventService.getEvents(user);
  }

  @Put("/:id")
  @UseGuards(AuthGuard)
  async updateEvent(
    @Param("id") id: string,
    @Body() updateEventDto: UpdateEventMealDto,
  ) {
    return this.eventService.updateEvent(id, updateEventDto);
  }

  @Delete("/:id")
  @UseGuards(AuthGuard)
  async deleteEvent(@Param("id") id: string) {
    return this.eventService.deleteEvent(id);
  }
}
