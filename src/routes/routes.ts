import { Router } from "express";
import { createUserController } from "../http/controllers/user-controller/create-user";
import { findAllUsersController } from "../http/controllers/user-controller/find-all-users";

import { createPostController } from "../http/controllers/post-controller/create-post";
import { deletePostByIdPostController } from "../http/controllers/post-controller/delete-post";
import { findAllPostsController } from "../http/controllers/post-controller/find-all-posts";
import { FindPostByIdPostController } from "../http/controllers/post-controller/find-post-by-id";
import { updatedpostByIdPostController } from "../http/controllers/post-controller/update.post";

const router = Router();

// Usuários
router.post("/usuario", createUserController);
router.get("/usuario", findAllUsersController); // 🔹 Adicionado GET

// Posts
router.post("/posts", createPostController);
router.get("/posts", findAllPostsController);
router.get("/posts/:id", FindPostByIdPostController);
router.put("/posts/:id", updatedpostByIdPostController);
router.delete("/posts/:id", deletePostByIdPostController);

export { router };
