import { EventMealEntity } from "src/event-meal/event-meal.entity";
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "product" })
export class ProductEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  calories_100g: number;

  @Column()
  proteins_100g: number;

  @Column()
  carbs_100g: number;

  @Column()
  fat_100g: number;

  @ManyToMany(() => EventMealEntity, (eventsMeal) => eventsMeal.id)
  @JoinTable()
  eventsMeal: EventMealEntity[];
}