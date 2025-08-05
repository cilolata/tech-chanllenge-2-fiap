import { IUserRepository } from "../user.repository.interface";
import { AppDataSource } from "../../lib/typeorm/typeorm";
import { Repository } from "typeorm";
import { IUser } from "../../entities/models/user.interface";
import { Users } from "../../entities/user.entity";

export class UserRepository implements IUserRepository {
  private repository: Repository<Users>;

  constructor() {
    this.repository = AppDataSource.getRepository(Users);
  }

  async createUserRepository(user: IUser): Promise<IUser> {
    return await this.repository.save(user);
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
