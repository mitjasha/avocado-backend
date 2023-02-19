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

  @Column({ type: "decimal", precision: 5, scale: 2 })
  calories: string;

  @Column({ type: "decimal", precision: 5, scale: 2 })
  proteins: string;

  @Column({ type: "decimal", precision: 5, scale: 2 })
  carbs: string;

  @Column({ type: "decimal", precision: 5, scale: 2 })
  fats: string;

  @Column()
  author: string;

  @Column("jsonb")
  ingredients: Ingredients[];

  @Column({ array: true })
  steps: string;

  @Column()
  time: number;

  @Column()
  category: string;

  @Column()
  kitchen: string;

  @Column()
  favorite: boolean;

  @Column()
  vegetarian: boolean;

  @Column()
  imageURL: string;
}
