import { IPost } from "@/entities/models/post.interface";
import { Post } from "@/entities/post.entity";
import { appDataSource } from "@/lib/typeorm/typeorm";
import { Repository } from "typeorm";
import { IPostRepository } from "../post.repository.interface";

export class PostRepository implements IPostRepository {
  private repository: Repository<Post>;

  constructor() {
    this.repository = appDataSource.getRepository(Post);
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
}
