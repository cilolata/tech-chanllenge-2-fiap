import { IUser } from "@/entities/models/user.interface";
import { IUserRepository } from "@/repositories/user.repository.interface";

export class FindUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async findUserUseCase(userId: number): Promise<IUser | undefined> {
    const user = await this.userRepository.findUserRepository(
      Number(userId)
    );
    return user;
  }
}
