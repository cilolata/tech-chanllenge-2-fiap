import { IPost } from "@/entities/models/post.interface";
import { appDataSource } from "@/lib/typeorm/typeorm";
import { Repository } from "typeorm";
import { IPostRepository } from "../post.repository.interface";
import { Posts } from "@/entities/post.entity";

export class PostRepository implements IPostRepository {
  private repository: Repository<Posts>;

  constructor() {
    this.repository = appDataSource.getRepository(Posts);
  }

  async createPostRepository(post: IPost): Promise<IPost> {
    return this.repository.save(post);
  }

  async findAllPostsRepository(page: number, limit: number): Promise<IPost[]> {
    return this.repository.find({
      skip: (page - 1) * limit,
      take: limit,
    });
  }

  async findPostByIdRepository(postId: number): Promise<IPost | undefined> {
    if (!postId) {
      return undefined;
    }

    const post = await this.repository.findOne({
      where: { id: postId },
    });

    return post ?? undefined;
  }

  async updatePostRepository(post: IPost): Promise<IPost> {
    return this.repository.save(post);
  }

  async deletePostRepository(postId: number): Promise<void> {
    await this.repository.delete(postId);
  }
}
