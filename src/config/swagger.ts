import swaggerJsdoc from "swagger-jsdoc";
import { EPermission } from "../entities/models/user.interface";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Postai API Documentation",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor local",
      },
    ],
    components: {
      schemas: {
        Post: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              description: "ID auto-gerado do post",
              example: 1,
              readOnly: true,
            },
            title: {
              type: "string",
              description: "Título do post",
              example: "Como documentar APIs com Swagger",
              maxLength: 255,
            },
            description: {
              type: "string",
              description: "Descrição resumida do post",
              example: "Um guia prático para documentação de APIs",
            },
            content: {
              type: "string",
              description: "Conteúdo completo do post",
              example: "Lorem ipsum dolor sit amet...",
            },
            subject: {
              type: "string",
              description: "Assunto/categoria do post",
              example: "Tecnologia",
              nullable: true,
              maxLength: 255,
            },
            user_id: {
              type: "integer",
              description: "ID do autor do post",
              example: 1,
            },
          },
          required: ["title", "description", "content", "user_id"],
        },
        User: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              description: "ID auto-gerado do usuário",
              example: 1,
              readOnly: true,
            },
            username: {
              type: "string",
              description: "Nome de usuário único",
              example: "john_doe",
            },
            email: {
              type: "string",
              format: "email",
              description: "Endereço de e-mail",
              example: "user@example.com",
              nullable: true,
            },
            password: {
              type: "string",
              format: "password",
              description: "Senha do usuário",
              example: "Str0ngP@ss",
              writeOnly: true,
            },
            permission_type: {
              type: "string",
              enum: Object.values(EPermission),
              example: EPermission.STUDENT,
              description: "Tipo de permissão do usuário",
            },
          },
        },
      },
    },
  },
  apis: ["dist/routes/*.js"],
};

const specs = swaggerJsdoc(options);

export default specs;
