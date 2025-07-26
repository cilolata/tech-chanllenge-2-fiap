import { IPost } from "@/entities/models/post.interface";
import { IPostRepository } from "@/repositories/post.repository.interface";

export class FindAllPostsUserUseCase {
    constructor(private postRepository: IPostRepository) {}
  
    async findAllPostsUseCase(page: number, limit: number): Promise<IPost[] | undefined> {
      const posts = await this.postRepository.findAllPostsRepository(
        Number(page),
        Number(limit)
      )
      return posts;
    }
  }