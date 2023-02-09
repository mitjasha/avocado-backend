import { IsEnum, IsNotEmpty } from "class-validator";
import { EEventMeal } from "../event-meal.enum";

export class CreateEventMealDto {
  @IsNotEmpty()
  @IsEnum(EEventMeal)
  name: EEventMeal;

  startTime: Date;

  weight: number;

  description: string;
}
