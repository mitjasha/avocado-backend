import { Injectable } from "@nestjs/common";
import { RecipesEntity } from "./recipes.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

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
    return "one";
  }
}
