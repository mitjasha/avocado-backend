import { Module } from '@nestjs/common';
import { RecipesRuService } from './recipes-ru.service';
import { RecipesRuController } from './recipes-ru.controller';

@Module({
  providers: [RecipesRuService],
  controllers: [RecipesRuController]
})
export class RecipesRuModule {}
