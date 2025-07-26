import { Request, Response } from "express";
import { makeCreateUserUseCase } from "@/use-cases/factory/make-create-user-use-case";
import { fromDbPermission } from "@/utils";

export const createUserController = async (req: Request, res: Response) => {
  const { id, username, password, permissionType, email } = req.body;

  const userSchema = {
    username: String(username),
    password: String(password),
    email: String(email) ?? undefined,
    permission_type: fromDbPermission(permissionType),
  };

  const createUserUseCase = makeCreateUserUseCase();
  await createUserUseCase.createUserUseCase(userSchema);
  return res.status(201).json({ success: "Usuário criado com sucesso" });
};
