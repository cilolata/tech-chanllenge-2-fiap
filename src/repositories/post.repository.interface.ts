import { IPost } from "@/entities/models/post.interface";
import { IUser } from "@/entities/models/user.interface";

export interface IPostRepository {
    createPostRepository(post: IPost): Promise<IPost | undefined>;
    findAllPostsRepository(upage: number, limit: number): Promise<IPost[] | []>;
    findPostByIdRepository(postId: number): Promise<IPost | undefined>;
    updatePostRepository(post: IPost): Promise<IPost | undefined>;
}