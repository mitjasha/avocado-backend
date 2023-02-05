import { Controller, Get } from "@nestjs/common";
import { RecipesEntity } from "./recipes.entity";
import { RecipesService } from "./recipes.service";

@Controller("recipes")
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}
  @Get()
  async findAll(): Promise<RecipesEntity[]> {
    return await this.recipesService.findAll();
  }
}
