import { IsNotEmpty } from "class-validator";

export class CreateProductDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  calories_100g: number;

  @IsNotEmpty()
  proteins_100g: number;

  @IsNotEmpty()
  carbs_100g: number;

  @IsNotEmpty()
  fat_100g: number;
}
