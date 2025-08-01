import { Request, Response } from "express";
import { makeDeletePostByIdUseCase } from "../../../use-cases/factory/make-delete-post-use-case";

export const deletePostByIdPostController = async (
  req: Request,
  res: Response
) => {
  const postId = Number(req.params.id);

  const deletePostUseCase = makeDeletePostByIdUseCase();
  const post = await deletePostUseCase.deletePostUseCase(postId);
  res.status(200).json({ message: "Post deletado com sucesso", post });
};
