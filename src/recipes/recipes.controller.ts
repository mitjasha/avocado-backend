import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { CreateRecipeDto } from "./dto/createRecipe.dto";
import { UpdateRecipeDto } from "./dto/updateRecipe.dto";
import { RecipesEntity } from "./recipes.entity";
import { RecipesService } from "./recipes.service";

@Controller("recipes")
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}
  @Get()
  async findAll(): Promise<RecipesEntity[]> {
    return await this.recipesService.findAll();
  }

  @Get("/:id")
  async getRecipeById(@Param("id") id: string): Promise<RecipesEntity> {
    return this.recipesService.getRecipeById(id);
  }

  @Post()
  async createRecipe(
    @Body("recipe") createRecipeDto: CreateRecipeDto,
  ): Promise<RecipesEntity> {
    return await this.recipesService.createRecipe(createRecipeDto);
  }

  @Put("/:id")
  async updateRecipe(
    @Param("id") id: string,
    @Body() updateRecipeDto: UpdateRecipeDto,
  ) {
    return this.recipesService.updateRecipe(id, updateRecipeDto);
  }

  @Delete("/:id")
  async deleteRecipe(@Param("id") id: string) {
    return await this.recipesService.deleteRecipe(id);
  }
}
