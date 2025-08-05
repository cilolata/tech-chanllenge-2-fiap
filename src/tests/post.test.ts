import request from "supertest";
import app from "../app";
import { AppDataSource } from "../lib/typeorm/typeorm";

let userId: number;

beforeAll(async () => {
  // Inicializa o banco no ambiente de teste
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }

  // Cria o usuário professor_teste antes dos testes
  const res = await request(app).post("/usuario").send({
    username: "professor_teste",
    password: "123456",
    email: "professor@example.com",
    permission_type: "0"
  });

  userId = res.body.id;
});

afterAll(async () => {
  // Fecha a conexão com o banco após os testes
  if (AppDataSource.isInitialized) {
    await AppDataSource.destroy();
  }
});

describe("Posts", () => {
  it("Deve criar um novo post", async () => {
    const res = await request(app).post("/posts").send({
      title: "Post de teste",
      description: "Descrição de teste",
      content: "Conteúdo do post",
      subject: "Matemática",
      user_id: userId
    });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("id");
  });

  it("Deve listar todos os posts", async () => {
    const res = await request(app).get("/posts");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("Deve buscar um post por ID", async () => {
    const postCriado = await request(app).post("/posts").send({
      title: "Post para buscar",
      description: "Descrição teste buscar",
      content: "Conteúdo teste buscar",
      subject: "História",
      user_id: userId
    });

    const res = await request(app).get(`/posts/${postCriado.body.id}`);
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(postCriado.body.id);
  });

  it("Deve atualizar um post existente", async () => {
    const postCriado = await request(app).post("/posts").send({
      title: "Post para atualizar",
      description: "Descrição antes",
      content: "Conteúdo antes",
      subject: "Física",
      user_id: userId
    });

    const res = await request(app)
      .put(`/posts/${postCriado.body.id}`)
      .send({
        title: "Post atualizado",
        description: "Descrição depois",
        content: "Conteúdo depois",
        subject: "Física",
        user_id: userId
      });

    expect(res.status).toBe(200);
  });

  it("Deve deletar um post", async () => {
    const postCriado = await request(app).post("/posts").send({
      title: "Post para deletar",
      description: "Descrição delete",
      content: "Conteúdo delete",
      subject: "Química",
      user_id: userId
    });

    const res = await request(app).delete(`/posts/${postCriado.body.id}`);
    expect(res.status).toBe(200);
  });
});
