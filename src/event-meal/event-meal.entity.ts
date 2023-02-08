import { UserEntity } from "src/auth/user.entity";
import { ProductEntity } from "src/product/product.entity";
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { EEventMeal } from "./event-mean.enum";

@Entity({ name: "event-meal" })
export class EventMealEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: EEventMeal;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  start_time: Date;

  @Column()
  weight: string;

  @Column()
  description: string;

  @ManyToOne((_type) => UserEntity, (user) => user.id)
  user: UserEntity;

  @ManyToMany(() => ProductEntity, (products) => products.id)
  products: ProductEntity[];
}
