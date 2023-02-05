import { Injectable } from "@nestjs/common";

@Injectable()
export class RecipesService {
  findAll() {
    return ["one", "two", "three", "four", "five", "six", "seven", "eight"];
  }

  getRecipeById(id: string) {
    return "one";
  }
}
