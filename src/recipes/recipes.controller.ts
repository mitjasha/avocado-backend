import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
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
  ): Promise<RecipesEntity> {
    return await this.recipesService.createRecipe(createRecipeDto);
  }

  @Delete("/:id")
  async deleteRecipe(@Param("id") id: string) {
    return await this.recipesService.deleteRecipe(id);
  }
}
