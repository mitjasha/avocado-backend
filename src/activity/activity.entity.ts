import { EventActivityEntity } from "src/event-activity/event-activity.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "activity" })
export class ActivityEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ type: "decimal", precision: 5, scale: 2, nullable: true })
  calories_per_min: number;

  @OneToMany(
    (_type) => EventActivityEntity,
    (eventActivity) => eventActivity.id,
  )
  eventActivity: EventActivityEntity[];
}
