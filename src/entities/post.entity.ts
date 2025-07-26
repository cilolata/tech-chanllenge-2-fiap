import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IPost } from "./models/post.interface";

@Entity({
  name: "posts",
})
export class Post implements IPost {
  @PrimaryGeneratedColumn("increment", {
    name: "id",
  })
  id?: number | undefined;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column({ nullable: true })
  subject?: string;
  @Column({
    type: "timestamp without time zone",
    default: () => "CURRENT_TIMESTAMP",
  })
  created_at?: Date;
  @Column({
    type: "timestamp without time zone",
    default: () => "CURRENT_TIMESTAMP",
  })
  updated_at: Date;
  @Column()
  user_id: number;
}
