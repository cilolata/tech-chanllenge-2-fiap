import { Request, Response } from "express";
import { makeFindPostByIdUseCase } from "../../../use-cases/factory/make-find-post-by-id";
import { ErrorHandler } from "../../../middlewares/errorHandlers";

export const FindPostByIdPostController = async (
  req: Request,
  res: Response
) => {
  const postId = Number(req.params.id);

  try {
    const findPostUseCase = makeFindPostByIdUseCase();
    const post = await findPostUseCase.findAllPostsUseCase(postId);

    if (!post) {
      throw new ErrorHandler(404, "Post nao encontrado");
    }
    res.status(200).json({ post });
  } catch (error) {
    if (error instanceof ErrorHandler) {
      throw error;
    }
    throw new ErrorHandler(500, "Erro ao conectar servidor");
  }
};
