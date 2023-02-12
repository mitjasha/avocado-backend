import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EventActivityEntity } from "src/event-activity/event-activity.entity";
import { Repository } from "typeorm";
import { ActivityEntity } from "./activity.entity";
import { CreateActivityDto } from "./dto/createActivity.dto";

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(EventActivityEntity)
    private eventRepository: Repository<EventActivityEntity>,
    @InjectRepository(ActivityEntity)
    private activityRepository: Repository<ActivityEntity>,
  ) {}

  async createActivity(
    createActivityDto: CreateActivityDto,
  ): Promise<ActivityEntity> {
    const newActivity = new ActivityEntity();
    Object.assign(newActivity, createActivityDto);
    return await this.activityRepository.save(newActivity);
  }

  async findAll(): Promise<ActivityEntity[]> {
    return await this.activityRepository.find();
  }

  async getActivityById(id: string): Promise<ActivityEntity> {
    const found = await this.activityRepository.findOne({ where: { id } });

    if (!found) {
      throw new NotFoundException(`activity with ID "${id}" not found`);
    }
    return found;
  }

  async updateActivity(id: string, updateActivityDto: CreateActivityDto) {
    return await this.activityRepository.update(id, updateActivityDto);
  }

  async deleteActivity(id: string) {
    const result = await this.activityRepository.delete({ id });
    return `Activity ${id} removed`;
  }
}
