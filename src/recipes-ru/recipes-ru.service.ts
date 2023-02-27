import { Injectable, NotFoundException } from "@nestjs/common";
import { RecipesRUEntity } from "./recipes-ru.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateRecipeRUDto } from "./dto/createRecipeRU.dto";
import { UpdateRecipeRUDto } from "./dto/updateRecipeRU.dto";

@Injectable()
export class RecipesRUService {
  constructor(
    @InjectRepository(RecipesRUEntity)
    private readonly recipesRepository: Repository<RecipesRUEntity>,
  ) {}

  async findAll(): Promise<RecipesRUEntity[]> {
    return await this.recipesRepository.find();
  }

  async getRecipeById(id: string): Promise<RecipesRUEntity> {
    const found = await this.recipesRepository.findOne({ where: { id } });

    if (!found) {
      throw new NotFoundException(`Recipe with ID "${id}" not found`);
    }
    return found;
  }

  async createRecipe(createRecipeDto: CreateRecipeRUDto): Promise<any> {
    const newRecipe = new RecipesRUEntity();
    Object.assign(newRecipe, createRecipeDto);
    console.log("newRecipe", newRecipe);

    return await this.recipesRepository.save(newRecipe);
  }

  async updateRecipe(id: string, updateRecipeDto: UpdateRecipeRUDto) {
    return await this.recipesRepository.update(id, updateRecipeDto);
  }

  async deleteRecipe(id: string) {
    const result = await this.recipesRepository.delete({ id });
    return `recipe ${id} removed`;
  }
}
