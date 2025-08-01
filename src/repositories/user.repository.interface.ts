import { IUser } from "../entities/models/user.interface";


export interface IUserRepository {
    createUserRepository(user: IUser): Promise<IUser | undefined>;
    findUserRepository(userId: number): Promise<IUser | undefined>;
}