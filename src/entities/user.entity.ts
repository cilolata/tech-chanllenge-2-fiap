import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { EPermission, IUser } from "./models/user.interface";

@Entity({
  name: "users",
})
export class User implements IUser {
  @PrimaryGeneratedColumn('increment', {
    name: 'id',
  })
  id?: number | undefined 
  @Column()
  username: string;
  @Column()
  password: string;
  @Column({ nullable: true })
  email?: string;
  @Column({
    name: "permission_type",
    type: "enum",
    enum: EPermission,
    default: EPermission.STUDENT,
  })
  permission_type: EPermission;
}
