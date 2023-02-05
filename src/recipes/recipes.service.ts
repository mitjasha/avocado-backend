import { Injectable } from "@nestjs/common";

@Injectable()
export class RecipesService {
  findAll() {
    return ["one", "two", "three"];
  }

  getRecipeById(id: string) {
    return "one";
  }
}
