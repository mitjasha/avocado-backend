import { EventActivityEntity } from "src/event-activity/event-activity.entity";
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "activity" })
export class ActivityEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  calories_per_min: number;

  @ManyToMany(() => EventActivityEntity, (eventsActivity) => eventsActivity.id)
  @JoinTable()
  eventsMeal: EventActivityEntity[];
}
