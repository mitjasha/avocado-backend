import { UserEntity } from "src/auth/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EEvent } from "./event.enum";

@Entity({ name: "event" })
export class EventEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: EEvent;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  start_time: Date;

  @Column()
  description: string;

  @ManyToOne((_type) => UserEntity, (user) => user.id)
  user: UserEntity;
}
