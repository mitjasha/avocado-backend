import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "src/auth/user.entity";
import { ProfileController } from "./profile.controller";
import { ProfileEntity } from "./profile.entity";
import { ProfileService } from "./profile.service";

@Module({
  imports: [TypeOrmModule.forFeature([ProfileEntity, UserEntity])],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
