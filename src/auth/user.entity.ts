import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import * as bcrypt from "bcrypt";
import { EventEntity } from "src/event/event.entity";
import { EventMealEntity } from "src/event-meal/event-meal.entity";
import { EventActivityEntity } from "src/event-activity/event-activity.entity";

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  username: string;

  @Column({ select: false })
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  @OneToMany((_type) => EventEntity, (eventOther) => eventOther.id)
  eventOther: EventEntity[];

  @OneToMany((_type) => EventMealEntity, (eventMeal) => eventMeal.id)
  eventMeal: EventMealEntity[];

  @OneToMany(
    (_type) => EventActivityEntity,
    (eventActivity) => eventActivity.id,
  )
  eventActivity: EventActivityEntity[];
}
