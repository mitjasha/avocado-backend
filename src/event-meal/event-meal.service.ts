import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/auth/user.entity";
import { ProductEntity } from "src/product/product.entity";
import { Between, Equal, Repository } from "typeorm";
import { CreateEventMealDto } from "./dto/createEventMeal.dto";
import { UpdateEventMealDto } from "./dto/updateEventMeal.dto";
import { EventMealEntity } from "./event-meal.entity";

@Injectable()
export class EventMealService {
  constructor(
    @InjectRepository(EventMealEntity)
    private eventRepository: Repository<EventMealEntity>,
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}

  async createEvent(
    createEventDto: CreateEventMealDto,
    user: UserEntity,
    product: ProductEntity,
  ): Promise<EventMealEntity> {
    const { name, startTime, weight, description } = createEventDto;

    const events = this.eventRepository.create({
      name,
      startTime,
      weight,
      description,
      user,
      product,
    });
    return await this.eventRepository.save(events);
  }

  async getEvents(user: UserEntity): Promise<EventMealEntity[]> {
    return this.eventRepository.find({
      relations: ["user", "product"],
      where: { user: Equal(user.id) },
    });
  }

  async getEventsByDate(
    user: UserEntity,
    curDate: string,
  ): Promise<EventMealEntity[]> {
    const date = new Date(curDate);
    date.setDate(date.getDate() + 1);

    return this.eventRepository.find({
      relations: ["user", "product"],
      where: {
        startTime: Between(new Date(curDate), date),
      },
    });
  }

  async updateEvent(id: string, updateEventDto: UpdateEventMealDto) {
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
