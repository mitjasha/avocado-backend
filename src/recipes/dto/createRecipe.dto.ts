export class CreateRecipeDto {
  readonly id: number;
  readonly name: string;
  readonly category: string;
  readonly calories: string;
  readonly proteins: string;
  readonly carbs: string;
  readonly fats: string;
  readonly author: string;
  readonly kitchen: string;
  readonly ingredients: { quantity: string; name: string; type: string }[];
  readonly steps: string[];
  readonly time: number;
  readonly imageURL: string;
}
