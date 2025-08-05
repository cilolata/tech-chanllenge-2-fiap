import { Request, Response } from "express";
import { AppDataSource } from "../../../lib/typeorm/typeorm";
import { Users } from "../../../entities/user.entity";

export const findAllUsersController = async (req: Request, res: Response) => {
  try {
    const userRepo = AppDataSource.getRepository(Users);
    const users = await userRepo.find();
    return res.status(200).json(users);
  } catch (error) {
    console.error("Erro ao listar usuários:", error);
    return res.status(500).json({
      status: "error",
      statusCode: 500,
      message: "Erro ao listar usuários",
    });
  }
};
