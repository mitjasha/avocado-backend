import { Module } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProductController } from "./product.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductEntity } from "./product.entity";
import { EventMealEntity } from "src/event-meal/event-meal.entity";

@Module({
  imports: [TypeOrmModule.forFeature([EventMealEntity, ProductEntity])],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
