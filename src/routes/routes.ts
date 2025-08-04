import { Router } from "express";
import { createPostController } from "../http/controllers/post-controller/create-post";
import { deletePostByIdPostController } from "../http/controllers/post-controller/delete-post";
import { findAllPostsController } from "../http/controllers/post-controller/find-all-posts";
import { FindPostByIdPostController } from "../http/controllers/post-controller/find-post-by-id";
import { updatedpostByIdPostController } from "../http/controllers/post-controller/update.post";
import { createUserController } from "../http/controllers/user-controller/create-user";

const router = Router();

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */

router.post("/usuario", createUserController);

/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Cria um novo post
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Título do post"
 *               description:
 *                 type: string
 *                 example: "Descrição do post"
 *               content:
 *                 type: string
 *                 example: "Conteúdo completo do post"
 *               subject:
 *                 type: string
 *                 example: "Tecnologia"
 *               user_id:
 *                 type: integer
 *                 example: 1
 *             required:
 *               - title
 *               - description
 *               - content
 *               - user_id
 *     responses:
 *       201:
 *         description: Post criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 */
router.post("/posts", createPostController);
/**
 * @swagger
 * /posts/search:
 *   get:
 *     summary: Busca posts com filtros
 *     description: Retorna posts paginados com possibilidade de filtrar por título, assunto e ordenação
 *     tags: [Posts]
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Termo para a busca (case insensitive)
 *     responses:
 *       201:
 *         description: Lista de posts filtrados
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Post'
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     total:
 *                       type: integer
 *                       description: Total de posts encontrados
 *                     page:
 *                       type: integer
 *                       description: Página atual
 *                     limit:
 *                       type: integer
 *                       description: Itens por página
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/posts/search", findAllPostsController);
/**
 * @swagger
 * /get:
 *   post:
 *     summary: Lista os posts
 *     tags: [Posts]
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Número da página
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *           default: 10
 *         description: Quantidade de itens por página
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               search:
 *                 type: string
 *                 example: "Título do post"
 *               description:
 *                 type: string
 *                 example: "Descrição do post"
 *               content:
 *                 type: string
 *                 example: "Conteúdo completo do post"
 *               subject:
 *                 type: string
 *                 example: "Tecnologia"
 *               user_id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 */
router.get("/posts", findAllPostsController);

/**
 * @swagger
 * /posts/{id}:
 *   get:
 *     summary: Obtém um post específico pelo ID
 *     description: Retorna os detalhes completos de um post único
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: ID numérico do post
 *     responses:
 *       200:
 *         description: Post encontrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 */
router.get("/posts/:id", FindPostByIdPostController);

/**
 * @swagger
 * /posts/{id}:
 *   put:
 *     summary: Edita um post específico pelo ID
 *     description: Edita um post específico pelo ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: ID numérico do post
 *     responses:
 *       201:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 */

router.put("/posts/:id", updatedpostByIdPostController);

/**
 * @swagger
 * /posts/{id}:
 *   delete:
 *     summary: Deleta um post específico pelo ID
 *     description: Deleta um post específico pelo ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: ID numérico do post
 *     responses:
 *       201:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 */
router.delete("/posts/:id", deletePostByIdPostController);

export { router };
