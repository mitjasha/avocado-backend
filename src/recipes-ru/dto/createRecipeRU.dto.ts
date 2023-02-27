import { IsBoolean } from "class-validator";

export class CreateRecipeRUDto {
  readonly name: string;
  readonly calories: string;
  readonly proteins: string;
  readonly carbs: string;
  readonly fats: string;
  readonly author: string;
  readonly ingredients: object[];
  readonly steps: string | (() => string);
  readonly time: number;
  readonly category: string | (() => string);
  readonly kitchen: string;
  @IsBoolean()
  readonly favorite: boolean;
  @IsBoolean()
  readonly vegetarian: boolean;
  readonly imageURL: string;
}
