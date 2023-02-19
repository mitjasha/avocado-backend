import { EProduct } from "../product.enum";

export class UpdateProductDto {
  name: string;

  calories_100g: number;

  proteins_100g: number;

  carbs_100g: number;

  fat_100g: number;

  category: EProduct;
}
