import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/auth/user.entity";
import { Equal, Repository } from "typeorm";
import { CreateEventDto } from "./dto/createEvent.dto";
import { UpdateEventDto } from "./dto/updateEvent.dto";
import { EventEntity } from "./event.entity";

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(EventEntity)
    private eventRepository: Repository<EventEntity>,
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async createEvent(
    createEventDto: CreateEventDto,
    user: UserEntity,
  ): Promise<EventEntity> {
    const { name, startTime, description } = createEventDto;

    const events = this.eventRepository.create({
      name,
      startTime,
      description,
      user,
    });
    return await this.eventRepository.save(events);
  }

  async getEvents(user: UserEntity): Promise<EventEntity[]> {
    return this.eventRepository.find({
      relations: ["user"],
      where: { user: Equal(user) },
    });
  }

  async updateEvent(id: string, updateEventDto: UpdateEventDto) {
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
