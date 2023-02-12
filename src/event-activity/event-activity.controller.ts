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
import { CreateEventActivityDto } from "./dto/createEventActivity.dto";
import { UpdateEventActivityDto } from "./dto/updateEventActivity.dto";
import { EventActivityEntity } from "./event-activity.entity";
import { EventActivityService } from "./event-activity.service";

@Controller("event-activity")
export class EventActivityController {
  constructor(private eventService: EventActivityService) {}

  @Post(":userID/addEvent")
  @UseGuards(AuthGuard)
  async createEvent(
    @Param("userID") userID: string,
    @Body()
    createEventDto: CreateEventActivityDto,
  ): Promise<EventActivityEntity> {
    const child = await this.eventService.getUser(userID);
    return this.eventService.createEvent(createEventDto, child);
  }

  @Get(":userID/getAllEvents")
  @UseGuards(AuthGuard)
  async getEvents(@GetUser() user: UserEntity): Promise<EventActivityEntity[]> {
    return this.eventService.getEvents(user);
  }

  @Put("/:id")
  @UseGuards(AuthGuard)
  async updateEvent(
    @Param("id") id: string,
    @Body() updateEventDto: UpdateEventActivityDto,
  ) {
    return this.eventService.updateEvent(id, updateEventDto);
  }

  @Delete("/:id")
  @UseGuards(AuthGuard)
  async deleteEvent(@Param("id") id: string) {
    return this.eventService.deleteEvent(id);
  }
}
