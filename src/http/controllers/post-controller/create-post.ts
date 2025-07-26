import { Request, Response } from "express";
import { makeCreatePostUseCase } from "@/use-cases/factory/make-create-post-use-case";
import { EPermission } from "@/entities/models/user.interface";
import { makeFindUserUseCase } from "@/use-cases/factory/make-find-user-use-case";

export const createPostController = async (req: Request, res: Response) => {
  const { title, description, subject, user_id } = req.body;

  const postSchema = {
    title: String(title),
    description: String(description),
    subject: String(subject) ?? undefined,
    created_at: new Date(),
    user_id: Number(user_id),
  };
  const findUserPermission = makeFindUserUseCase();
  const user = await findUserPermission.findUserUseCase(user_id);

  if (user?.permission_type === EPermission.TEACHER) {
    const createPostUseCase = makeCreatePostUseCase();
    await createPostUseCase.createPostUseCase(postSchema);
    return res.status(201).json({ success: "Post criado com sucesso" });
  }
  return res
    .status(403)
    .json({ success: "Usuário não tem permissão para criar postagens" });
};
