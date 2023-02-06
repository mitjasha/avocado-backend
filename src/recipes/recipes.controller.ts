import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateRecipeDto } from "./dto/createRecipe.dto";
import { RecipesEntity } from "./recipes.entity";
import { RecipesService } from "./recipes.service";

@Controller("recipes")
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}
  @Get()
  async findAll(): Promise<RecipesEntity[]> {
    return await this.recipesService.findAll();
  }

  @Post()
  async createRecipe(
    @Body("recipe") createRecipeDto: CreateRecipeDto,
  ): Promise<any> {
    console.log("createRecipe", createRecipeDto);

    return await this.recipesService.createRecipe(createRecipeDto);
  }
}
