import { Exclude } from "class-transformer";
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
  startTime: Date;

  @Column()
  description: string;

  @ManyToOne((_type) => UserEntity, (user) => user.id, { eager: false })
  @Exclude({ toPlainOnly: true })
  user: UserEntity;
}
