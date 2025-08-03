import request from "supertest";
import app from "../src/app";
import { appDataSource } from "../src/lib/typeorm/typeorm";

beforeAll(async () => {
  if (!appDataSource.isInitialized) await appDataSource.initialize();
});

afterAll(async () => {
  if (appDataSource.isInitialized) await appDataSource.destroy();
});

describe("Posts", () => {
  it("Deve criar uma nova postagem", async () => {
    const userResponse = await request(app).post("/usuarios").send({
      nome: "Usuário Post",
      email: `post${Date.now()}@example.com`,
      senha: "123456"
    });

    const usuarioId = userResponse.body.id;

    const response = await request(app).post("/posts").send({
      titulo: "Postagem Teste",
      conteudo: "Conteúdo da postagem de teste",
      usuarioId
    });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.titulo).toBe("Postagem Teste");
  });
});
