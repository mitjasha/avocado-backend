import { IsNotEmpty } from "class-validator";

export class CreateActivityDto {
  @IsNotEmpty()
  nameRU: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  calories_per_min: number;

  @IsNotEmpty()
  image: string;
}
