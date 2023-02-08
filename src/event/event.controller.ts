import { Body, Controller, Param, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/auth/guards/auth.guard";
import { CreateEventDto } from "./dto/createEvent.dto";
import { EventEntity } from "./event.entity";
import { EventService } from "./event.service";

@Controller("event")
export class EventController {
  constructor(private eventService: EventService) {}

  @Post(":userID/add")
  @UseGuards(AuthGuard)
  async createEvent(
    @Param("userID") userID: string,
    @Body()
    createEventDto: CreateEventDto,
  ): Promise<EventEntity> {
    const child = await this.eventService.getUser(userID);
    return this.eventService.createEvent(createEventDto, child);
  }
}
