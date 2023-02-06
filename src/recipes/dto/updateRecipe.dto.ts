export class UpdateRecipeDto {
  readonly name?: string;
  readonly category?: string;
  readonly calories?: string;
  readonly proteins?: string;
  readonly carbs?: string;
  readonly fats?: string;
  readonly author?: string;
  readonly kitchen?: string;
  readonly ingredients?: object[];
  readonly steps?: string | (() => string);
  readonly time?: number;
  readonly imageURL?: string;
}
