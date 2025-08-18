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

  async findUserRepository({
    username,
    email,
    password,
  }: {
    username: string;
    email?: string;
    password: string;
  }): Promise<IUser | undefined> {
    const user = await this.repository.findOne({
      where: {
        username: username,
        email: email,
        password: password,
      },
    });

    return user ? user : undefined;
  }
}
