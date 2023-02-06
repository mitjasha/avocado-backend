import { Injectable, NotFoundException } from "@nestjs/common";
import { RecipesEntity } from "./recipes.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateRecipeDto } from "./dto/createRecipe.dto";
import { UpdateRecipeDto } from "./dto/updateRecipe.dto";

@Injectable()
export class RecipesService {
  constructor(
    @InjectRepository(RecipesEntity)
    private readonly recipesRepository: Repository<RecipesEntity>,
  ) {}

  async findAll(): Promise<RecipesEntity[]> {
    return await this.recipesRepository.find();
  }

  async getRecipeById(id: string): Promise<RecipesEntity> {
    const found = await this.recipesRepository.findOne({ where: { id } });

    if (!found) {
      throw new NotFoundException(`Recipe with ID "${id}" not found`);
    }
    return found;
  }

  async createRecipe(createRecipeDto: CreateRecipeDto): Promise<any> {
    const newRecipe = new RecipesEntity();
    Object.assign(newRecipe, createRecipeDto);
    console.log("newRecipe", newRecipe);

    return await this.recipesRepository.save(newRecipe);
  }

  async updateRecipe(id: string, updateRecipeDto: UpdateRecipeDto) {
    return await this.recipesRepository.update(id, updateRecipeDto);
  }

  async deleteRecipe(id: string) {
    const result = await this.recipesRepository.delete({ id });
    return `event ${id} removed`;
  }
}
