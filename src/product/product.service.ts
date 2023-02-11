import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EventMealEntity } from "src/event-meal/event-meal.entity";
import { Repository } from "typeorm";
import { CreateProductDto } from "./dto/createProduct.dto";
import { UpdateProductDto } from "./dto/updateProduct.dto";
import { ProductEntity } from "./product.entity";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(EventMealEntity)
    private eventRepository: Repository<EventMealEntity>,
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}

  async createProduct(
    createProductDto: CreateProductDto,
  ): Promise<ProductEntity> {
    const newProduct = new ProductEntity();
    Object.assign(newProduct, createProductDto);
    return await this.productRepository.save(newProduct);
  }

  async getProductById(id: string): Promise<ProductEntity> {
    const found = await this.productRepository.findOne({ where: { id } });

    if (!found) {
      throw new NotFoundException(`Recipe with ID "${id}" not found`);
    }
    return found;
  }

  async updateProduct(id: string, updateProductDto: UpdateProductDto) {
    return await this.productRepository.update(id, updateProductDto);
  }

  async deleteProduct(id: string) {
    const result = await this.productRepository.delete({ id });
    return `Product ${id} removed`;
  }
}
