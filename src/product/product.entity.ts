import { EventMealEntity } from "src/event-meal/event-meal.entity";
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { EProduct } from "./product.enum";

@Entity({ name: "product" })
export class ProductEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ type: "decimal", precision: 5, scale: 2, nullable: true })
  calories_100g: number;

  @Column({ type: "decimal", precision: 5, scale: 2, nullable: true })
  proteins_100g: number;

  @Column({ type: "decimal", precision: 5, scale: 2, nullable: true })
  carbs_100g: number;

  @Column({ type: "decimal", precision: 5, scale: 2, nullable: true })
  fat_100g: number;

  @Column({ nullable: true })
  category: EProduct;

  @OneToMany((_type) => EventMealEntity, (eventMeal) => eventMeal.id)
  eventMeal: EventMealEntity[];
}
