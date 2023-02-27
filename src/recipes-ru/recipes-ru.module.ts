import { Module } from "@nestjs/common";
import { RecipesRUService } from "./recipes-ru.service";
import { RecipesRUController } from "./recipes-ru.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RecipesRUEntity } from "./recipes-ru.entity";

@Module({
  imports: [TypeOrmModule.forFeature([RecipesRUEntity])],
  providers: [RecipesRUService],
  controllers: [RecipesRUController],
})
export class RecipesRuModule {}
