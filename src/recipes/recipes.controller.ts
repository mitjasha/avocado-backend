import { Controller, Get } from '@nestjs/common';

@Controller('recipes')
export class RecipesController {
  @Get()
  findAll() {
    return ['one', 'two', 'three'];
  }
}
