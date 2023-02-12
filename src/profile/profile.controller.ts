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
import { AuthGuard } from "@nestjs/passport";
import { GetUser } from "src/auth/get-user.decorator";
import { UserEntity } from "src/auth/user.entity";
import { CreateProfileDto } from "./dto/createProfile.dto";
import { UpdateProfileDto } from "./dto/updateProfile.dto";
import { ProfileEntity } from "./profile.entity";
import { ProfileService } from "./profile.service";

@Controller("profile")
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @Post(":userID/addProfile")
  @UseGuards(AuthGuard)
  async createProfile(
    @Param("userID") userID: string,
    @Body()
    createProfileDto: CreateProfileDto,
  ): Promise<ProfileEntity> {
    const child = await this.profileService.getUser(userID);
    return this.profileService.createProfile(createProfileDto, child);
  }

  @Get(":userID/getAllProfiles")
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
