import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { CreateRecipeRUDto } from "./dto/createRecipeRU.dto";
import { UpdateRecipeRUDto } from "./dto/updateRecipeRU.dto";
import { RecipesRUEntity } from "./recipes-ru.entity";
import { RecipesRUService } from "./recipes-ru.service";

@Controller("recipes-ru")
export class RecipesController {
  constructor(private readonly recipesService: RecipesRUService) {}
  @Get()
  async findAll(): Promise<RecipesRUEntity[]> {
    return await this.recipesService.findAll();
  }

  @Get("/:id")
  async getRecipeById(@Param("id") id: string): Promise<RecipesRUEntity> {
    return this.recipesService.getRecipeById(id);
  }

  @Post()
  async createRecipe(
    @Body("recipe") createRecipeDto: CreateRecipeRUDto,
  ): Promise<RecipesRUEntity> {
    return await this.recipesService.createRecipe(createRecipeDto);
  }

  @Put("/:id")
  async updateRecipe(
    @Param("id") id: string,
    @Body() updateRecipeDto: UpdateRecipeRUDto,
  ) {
    return this.recipesService.updateRecipe(id, updateRecipeDto);
  }

  @Delete("/:id")
  async deleteRecipe(@Param("id") id: string) {
    return await this.recipesService.deleteRecipe(id);
  }
}
