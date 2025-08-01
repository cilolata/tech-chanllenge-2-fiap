import { IUserRepository } from "../user.repository.interface";
import { appDataSource } from "../../lib/typeorm/typeorm";
import { Repository } from "typeorm";
import { IUser } from "../../entities/models/user.interface";
import { Users } from "../../entities/user.entity";

export class UserRepository implements IUserRepository {
  private repository: Repository<Users>;

  constructor() {
    this.repository = appDataSource.getRepository(Users);
  }
  // @ts-expect-error
  async createUserRepository(user: IUser): Promise<IUser> {
    try {
      console.log(this.repository)
    return this.repository.save(user);
    } catch (err) {
      console.log(err)
    }
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
