import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/auth/user.entity";
import { Equal, Repository } from "typeorm";
import { CreateProfileDto } from "./dto/createProfile.dto";
import { UpdateProfileDto } from "./dto/updateProfile.dto";
import { ProfileEntity } from "./profile.entity";

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(ProfileEntity)
    private profileRepository: Repository<ProfileEntity>,
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async createProfile(
    createProfileDto: CreateProfileDto,
    user: UserEntity,
  ): Promise<ProfileEntity> {
    const {
      lastName,
      firstName,
      gender,
      birth,
      weight,
      height,
      goal,
      targetWeight,
      photo,
    } = createProfileDto;

    const profile = this.profileRepository.create({
      lastName,
      firstName,
      gender,
      birth,
      weight,
      height,
      goal,
      targetWeight,
      photo,
      user,
    });
    return await this.profileRepository.save(profile);
  }

  async getProfile(user: UserEntity): Promise<ProfileEntity[]> {
    return this.profileRepository.find({
      relations: ["user"],
      where: { user: Equal(user.id) },
    });
  }

  async getProfileById(id: string): Promise<ProfileEntity> {
    const found = await this.profileRepository.findOne({ where: { id } });

    if (!found) {
      throw new NotFoundException(`profile with ID "${id}" not found`);
    }
    return found;
  }

  async updateProfile(id: string, updateProfileDto: UpdateProfileDto) {
    return await this.profileRepository.update(id, updateProfileDto);
  }

  async deleteProfile(id: string) {
    const result = await this.profileRepository.delete({ id });
    return `Profile ${id} removed`;
  }

  async getUser(id: string) {
    return this.usersRepository.findOneBy({ id });
  }
}
