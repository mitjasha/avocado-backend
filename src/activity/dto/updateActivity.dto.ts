import { EActivity } from "../activity.enum";

export class UpdateActivityDto {
  name: EActivity;

  calories_per_min: number;
}
