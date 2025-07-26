import { IPost } from "@/entities/models/post.interface";
import { IPostRepository } from "@/repositories/post.repository.interface";

export class UpdatePostUserUseCase {
    constructor(private postRepository: IPostRepository) {}
  
    async updatePostUseCase(post: IPost): Promise<IPost | undefined> {
      return await this.postRepository.updatePostRepository(post)
    }
  }