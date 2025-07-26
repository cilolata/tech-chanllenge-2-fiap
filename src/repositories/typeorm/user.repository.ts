import { IUserRepository } from "../user.repository.interface";
import { IUser } from "@/entities/models/user.interface";
import { User } from "@/entities/user.entity";
import { appDataSource } from "@/lib/typeorm/typeorm";
import { Repository } from "typeorm";

export class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = appDataSource.getRepository(User);
  }
  async createUserRepository(user: IUser): Promise<IUser> {
    return this.repository.save(user);
  }

  async findUserRepository(userId: number): Promise<IUser | undefined> {
    if (!userId) {
      return undefined;
    }

    const user = await this.repository.findOne({
      where: { id: userId },
    });

    return user ?? undefined;
  }
}
