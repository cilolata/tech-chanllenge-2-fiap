import { Request, Response } from "express";
import { makeFindAllPostsUseCase } from "@/use-cases/factory/make-find-all-posts-use-case";

export const findAllPostsController = async (req: Request, res: Response) => {
  const registerQuerySchema = {
    page: Number(req.body.page) ?? 1,
    limit: Number(req.body.limit) ?? 10,
  };

  const findAllPostsUseCase = makeFindAllPostsUseCase();
  const posts = await findAllPostsUseCase.findAllPostsUseCase(
    registerQuerySchema.page,
    registerQuerySchema.limit
  );

  res.status(200).json({ posts });
};
