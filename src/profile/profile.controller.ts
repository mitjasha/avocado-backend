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
import { AuthGuard } from "src/auth/guards/auth.guard";
import { GetUser } from "src/auth/get-user.decorator";
import { UserEntity } from "src/auth/user.entity";
import { CreateProfileDto } from "./dto/createProfile.dto";
import { UpdateProfileDto } from "./dto/updateProfile.dto";
import { ProfileEntity } from "./profile.entity";
import { ProfileService } from "./profile.service";

@Controller("profile")
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @Post("/addProfile")
  @UseGuards(AuthGuard)
  async createProfile(
    @GetUser() user: UserEntity,
    @Body()
    createProfileDto: CreateProfileDto,
  ): Promise<ProfileEntity> {
    return this.profileService.createProfile(createProfileDto, user);
  }

  @Get("/getAllProfiles")
  @UseGuards(AuthGuard)
  async getProfiles(@GetUser() user: UserEntity): Promise<ProfileEntity[]> {
    return this.profileService.getProfile(user);
  }

  @Put("/:id")
  @UseGuards(AuthGuard)
  async updateProfile(
    @Param("id") id: string,
    @Body() updateProfileDto: UpdateProfileDto,
  ) {
    return this.profileService.updateProfile(id, updateProfileDto);
  }

  @Delete("/:id")
  @UseGuards(AuthGuard)
  async deleteProfile(@Param("id") id: string) {
    return this.profileService.deleteProfile(id);
  }
}
