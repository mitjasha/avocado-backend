import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ActivityEntity } from "src/activity/activity.entity";
import { UserEntity } from "src/auth/user.entity";
import { Between, Equal, Repository } from "typeorm";
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
    @InjectRepository(ActivityEntity)
    private activityRepository: Repository<ActivityEntity>,
  ) {}

  async createEvent(
    createEventDto: CreateEventActivityDto,
    user: UserEntity,
    activity: ActivityEntity,
  ): Promise<EventActivityEntity> {
    const { startTime, endTime, description } = createEventDto;

    const events = this.eventRepository.create({
      startTime,
      endTime,
      description,
      user,
      activity,
    });
    return await this.eventRepository.save(events);
  }

  async getEvents(user: UserEntity): Promise<EventActivityEntity[]> {
    return this.eventRepository.find({
      relations: ["user", "activity"],
      where: { user: Equal(user.id) },
    });
  }

  async getEventsByDate(
    user: UserEntity,
    curDate: string,
  ): Promise<EventActivityEntity[]> {
    const date = new Date(curDate);
    date.setDate(date.getDate() + 1);

    return this.eventRepository.find({
      relations: ["user", "product"],
      where: {
        startTime: Between(new Date(curDate), date),
      },
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
