import request from "supertest";
import app from "../src/app";
import { appDataSource } from "../src/lib/typeorm/typeorm";

beforeAll(async () => {
  if (!appDataSource.isInitialized) await appDataSource.initialize();
});

afterAll(async () => {
  if (appDataSource.isInitialized) await appDataSource.destroy();
});

describe("Usuários", () => {
  it("Deve criar um novo usuário", async () => {
    const response = await request(app).post("/usuarios").send({
      nome: "Rafael Teste",
      email: `rafael${Date.now()}@example.com`,
      senha: "123456"
    });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("id");
  });
});
