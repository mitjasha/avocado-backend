import { IsEnum, IsNotEmpty } from "class-validator";
import { EActivity } from "../activity.enum";

export class CreateActivityDto {
  @IsNotEmpty()
  @IsEnum(EActivity)
  name: EActivity;

  @IsNotEmpty()
  calories_per_min: number;
}
