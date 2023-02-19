import { UserEntity } from "src/auth/user.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { EGender } from "./profile-gender.enum";
import { EGoal } from "./profile-goal.enum";

@Entity()
export class ProfileEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  gender: EGender;

  @Column()
  birth: Date;

  @Column({ type: "decimal", precision: 5, scale: 2, nullable: true })
  weight: string;

  @Column()
  height: number;

  @Column()
  goal: EGoal;

  @Column({ type: "decimal", precision: 5, scale: 2, nullable: true })
  targetWeight: string;

  @Column()
  photo: string;

  @OneToOne(() => UserEntity, (user) => user.profile)
  user: UserEntity;
}
