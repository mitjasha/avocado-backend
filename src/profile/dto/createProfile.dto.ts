import { IsDateString, IsEnum, IsNotEmpty } from "class-validator";
import { EGender } from "../profile-gender.enum";
import { EGoal } from "../profile-goal.enum";

export class CreateProfileDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  @IsEnum(EGender)
  gender: EGender;

  @IsNotEmpty()
  @IsDateString()
  birth: string;

  @IsNotEmpty()
  weight: number;

  @IsNotEmpty()
  height: number;

  @IsNotEmpty()
  @IsEnum(EGoal)
  goal: EGoal;

  @IsNotEmpty()
  targetWeight: number;

  photo: string;
}
