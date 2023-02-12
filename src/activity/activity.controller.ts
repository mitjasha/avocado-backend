import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { ActivityEntity } from "./activity.entity";
import { ActivityService } from "./activity.service";
import { CreateActivityDto } from "./dto/createActivity.dto";
import { UpdateActivityDto } from "./dto/updateActivity.dto";

@Controller("activity")
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Get()
  async findAll(): Promise<ActivityEntity[]> {
    return await this.activityService.findAll();
  }

  @Get("/:id")
  async getActivityById(@Param("id") id: string): Promise<ActivityEntity> {
    return this.activityService.getActivityById(id);
  }

  @Post()
  async createActivity(
    @Body("Activity") createActivityDto: CreateActivityDto,
  ): Promise<ActivityEntity> {
    return await this.activityService.createActivity(createActivityDto);
  }

  @Put("/:id")
  async updateActivity(
    @Param("id") id: string,
    @Body() updateActivityDto: UpdateActivityDto,
  ) {
    return this.activityService.updateActivity(id, updateActivityDto);
  }

  @Delete("/:id")
  async deleteActivity(@Param("id") id: string) {
    return await this.activityService.deleteActivity(id);
  }
}
