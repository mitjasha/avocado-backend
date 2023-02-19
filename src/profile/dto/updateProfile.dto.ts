import { IsDateString, IsEnum } from "class-validator";
import { EGender } from "../profile-gender.enum";
import { EGoal } from "../profile-goal.enum";

export class UpdateProfileDto {
  firstName: string;

  lastName: string;

  @IsEnum(EGender)
  gender: EGender;

  @IsDateString()
  birth: string;

  weight: number;

  height: number;

  @IsEnum(EGoal)
  goal: EGoal;

  targetWeight: number;

  photo: string;
}
