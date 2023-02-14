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
import { CreateEventDto } from "./dto/createEvent.dto";
import { UpdateEventDto } from "./dto/updateEvent.dto";
import { EventEntity } from "./event.entity";
import { EventService } from "./event.service";

@Controller("event")
export class EventController {
  constructor(private eventService: EventService) {}

  @Post("/addEvent")
  @UseGuards(AuthGuard)
  async createEvent(
    @GetUser() user: UserEntity,
    @Body()
    createEventDto: CreateEventDto,
  ): Promise<EventEntity> {
    return this.eventService.createEvent(createEventDto, user);
  }

  @Get("/getAllEvents")
  @UseGuards(AuthGuard)
  async getEvents(@GetUser() user: UserEntity): Promise<EventEntity[]> {
    return this.eventService.getEvents(user);
  }

  @Put("/:id")
  @UseGuards(AuthGuard)
  async updateEvent(
    @Param("id") id: string,
    @Body() updateEventDto: UpdateEventDto,
  ) {
    return this.eventService.updateEvent(id, updateEventDto);
  }

  @Delete("/:id")
  @UseGuards(AuthGuard)
  async deleteEvent(@Param("id") id: string) {
    return this.eventService.deleteEvent(id);
  }
}
