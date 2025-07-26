import { Router } from "express";
import { createPostController } from "@/http/controllers/post-controller/create-post";
import { findAllPostsController } from "@/http/controllers/post-controller/find-all-posts";
import { createUserController } from "@/http/controllers/user-controller/create-user";
import { FindPostByIdPostController } from "@/http/controllers/post-controller/find-post-by-id";

const router = Router();

router.post("/usuario/criar", createUserController);

router.post("/post/criar", createPostController);
router.get("/posts", findAllPostsController);
router.get("/post/:id", FindPostByIdPostController);

export { router };
