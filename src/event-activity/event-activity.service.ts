import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/auth/user.entity";
import { Equal, Repository } from "typeorm";
import { CreateEventActivityDto } from "./dto/createEventActivity.dto";
import { UpdateEventActivityDto } from "./dto/updateEventActivity.dto";
import { EventActivityEntity } from "./event-activity.entity";

@Injectable()
export class EventActivityService {
  constructor(
    @InjectRepository(EventActivityEntity)
    private eventRepository: Repository<EventActivityEntity>,
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async createEvent(
    createEventDto: CreateEventActivityDto,
    user: UserEntity,
  ): Promise<EventActivityEntity> {
    const { startTime, endTime, description } = createEventDto;

    const events = this.eventRepository.create({
      startTime,
      endTime,
      description,
      user,
    });
    return await this.eventRepository.save(events);
  }
  async getEvents(user: UserEntity): Promise<EventActivityEntity[]> {
    return this.eventRepository.find({
      relations: ["user"],
      where: { user: Equal(user) },
    });
  }

  async updateEvent(id: string, updateEventDto: UpdateEventActivityDto) {
    return await this.eventRepository.update(id, updateEventDto);
  }

  async deleteEvent(id: string) {
    const result = await this.eventRepository.delete({ id });
    return `event ${id} removed`;
  }

  async getUser(id: string) {
    return this.usersRepository.findOneBy({ id });
  }
}
