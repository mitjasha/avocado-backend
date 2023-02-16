export class UpdateRecipeDto {
  readonly name?: string;
  readonly calories?: string;
  readonly proteins?: string;
  readonly carbs?: string;
  readonly fats?: string;
  readonly author?: string;
  readonly ingredients?: object[];
  readonly steps?: string | (() => string);
  readonly time?: number;
  readonly category?: string;
  readonly kitchen?: string;
  readonly favorite?: boolean;
  readonly vegetarian?: boolean;
  readonly imageURL?: string;
}
