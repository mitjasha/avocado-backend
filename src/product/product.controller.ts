import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { CreateProductDto } from "src/product/dto/createProduct.dto";
import { UpdateProductDto } from "src/product/dto/updateProduct.dto";
import { ProductEntity } from "./product.entity";
import { ProductService } from "./product.service";

@Controller("product")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll(): Promise<ProductEntity[]> {
    return await this.productService.findAll();
  }

  @Get("/:id")
  async getProductById(@Param("id") id: string): Promise<ProductEntity> {
    return this.productService.getProductById(id);
  }

  @Post()
  async createProduct(
    @Body("Product") createProductDto: CreateProductDto,
  ): Promise<ProductEntity> {
    return await this.productService.createProduct(createProductDto);
  }

  @Put("/:id")
  async updateProduct(
    @Param("id") id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productService.updateProduct(id, updateProductDto);
  }

  @Delete("/:id")
  async deleteProduct(@Param("id") id: string) {
    return await this.productService.deleteProduct(id);
  }
}
