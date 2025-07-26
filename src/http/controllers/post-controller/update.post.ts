import { Request, Response } from "express";
import { makeFindPostByIdUseCase } from "@/use-cases/factory/make-find-post-by-id";
import { makeUpdatePostUseCase } from "@/use-cases/factory/make-update-post";

export const updatedpostByIdPostController = async (
  req: Request,
  res: Response
) => {
  const postId = Number(req.params.id);
  const { title, description, subject, user_id } = req.body;

  const postUpdateSchema = {
    id: Number(postId),
    title: String(title),
    description: String(description),
    subject: String(subject) ?? undefined,
    updated_at: new Date(),
    user_id: Number(user_id),
  };

  const updatePost = makeUpdatePostUseCase();
  await updatePost.updatePostUseCase(postUpdateSchema);
  res.status(200).json({ mesaage: "Post atualizado com sucesso" });
};
