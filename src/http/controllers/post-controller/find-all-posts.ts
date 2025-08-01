import { Request, Response } from "express";
import { makeFindAllPostsUseCase } from "../../../use-cases/factory/make-find-all-posts-use-case";

export const findAllPostsController = async (req: Request, res: Response) => {
  const { page, limit, search } = req.query;

  const registerQuerySchema = {
    page: page ? Number(page) : 1,
    limit: limit ? Number(limit) : 10,
    search: search ? String(search) : undefined,
  };

  const findAllPostsUseCase = makeFindAllPostsUseCase();
  const posts = await findAllPostsUseCase.findAllPostsUseCase(
    registerQuerySchema.page,
    registerQuerySchema.limit,
    registerQuerySchema.search
  );

  res.status(200).json({ posts });
};
