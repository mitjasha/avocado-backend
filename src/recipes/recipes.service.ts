import { Injectable } from "@nestjs/common";
import { RecipesEntity } from "./recipes.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateRecipeDto } from "./dto/createRecipe.dto";

@Injectable()
export class RecipesService {
  constructor(
    @InjectRepository(RecipesEntity)
    private readonly recipesRepository: Repository<RecipesEntity>,
  ) {}

  async findAll(): Promise<RecipesEntity[]> {
    return await this.recipesRepository.find();
  }

  getRecipeById(id: string) {
    return "id=" + id;
  }

  async createRecipe(createRecipeDto: CreateRecipeDto): Promise<any> {
    return createRecipeDto;
  }
}
