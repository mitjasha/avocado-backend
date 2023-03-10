import { IsDateString, IsEnum, IsNotEmpty } from "class-validator";
import { EGender } from "../profile-gender.enum";
import { EGoal } from "../profile-goal.enum";

export class CreateProfileDto {
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

  favorites: string | (() => string);

  recentRecipes: string | (() => string);
}
