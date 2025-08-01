import { Request, Response } from "express";
import { makeFindPostByIdUseCase } from "@/use-cases/factory/make-find-post-by-id";
import { makeUpdatePostUseCase } from "@/use-cases/factory/make-update-post";
import { IPost } from "@/entities/models/post.interface";
import { removeUndefinedValues } from "@/utils";

export const updatedpostByIdPostController = async (
  req: Request,
  res: Response
) => {
  const postId = Number(req.params.id);
  const { title, description, subject, content, user_id } = req.body;

  const postUpdateSchema = {
    id: postId ? Number(postId) : undefined,
    title: title ? String(title) : undefined,
    description: description ? String(description) : undefined,
    content: content ? String(content) : content,
    subject: subject ? String(subject) : undefined,
    updated_at: new Date(),
    user_id: Number(user_id),
  };

  const values = removeUndefinedValues(postUpdateSchema)
  const updatePost = makeUpdatePostUseCase();
  await updatePost.updatePostUseCase(values);
  res.status(200).json({ mesaage: "Post atualizado com sucesso" });
};
