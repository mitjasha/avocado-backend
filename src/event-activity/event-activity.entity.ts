import { ActivityEntity } from "src/activity/activity.entity";
import { UserEntity } from "src/auth/user.entity";
import {
  BeforeUpdate,
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "event-activity" })
export class EventActivityEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  startTime: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  endTime: Date;

  @Column()
  description: string;

  @BeforeUpdate()
  updateTimestamp() {
    this.endTime = new Date();
  }

  @ManyToOne((_type) => UserEntity, (user) => user.id)
  user: UserEntity;

  @ManyToMany(() => ActivityEntity, (activity) => activity.id)
  activity: ActivityEntity[];
}
