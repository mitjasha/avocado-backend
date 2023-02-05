import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

interface Ingredients {
  quantity: string;
  name: string;
  type: string;
}

@Entity({ name: "recipes" })
export class RecipesEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  category: string;

  @Column()
  calories: string;

  @Column()
  proteins: string;

  @Column()
  carbs: string;

  @Column()
  fats: string;

  @Column()
  author: string;

  @Column()
  kitchen: string;

  @Column("jsonb", { array: true, nullable: true })
  ingredients: Ingredients;

  @Column({ array: true })
  steps: string;

  @Column()
  time: number;

  @Column()
  imageURL: string;
}
