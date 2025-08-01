import { Request, Response } from "express";
import { makeFindPostByIdUseCase } from "../../../use-cases/factory/make-find-post-by-id";

export const FindPostByIdPostController = async (req: Request, res: Response) => {
    const postId = Number(req.params.id);
  
    const findPostUseCase = makeFindPostByIdUseCase();
    const post = await findPostUseCase.findAllPostsUseCase(postId);
    res.status(200).json({ post });
  };
  