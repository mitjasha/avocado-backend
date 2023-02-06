import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RecipesController } from "./recipes.controller";
import { RecipesEntity } from "./recipes.entity";
import { RecipesService } from "./recipes.service";

@Module({
  imports: [TypeOrmModule.forFeature([RecipesEntity])],
  controllers: [RecipesController],
  providers: [RecipesService],
})
export class RecipesModule {}
