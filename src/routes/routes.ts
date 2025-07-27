import { Router } from "express";
import { createPostController } from "@/http/controllers/post-controller/create-post";
import { findAllPostsController } from "@/http/controllers/post-controller/find-all-posts";
import { createUserController } from "@/http/controllers/user-controller/create-user";
import { FindPostByIdPostController } from "@/http/controllers/post-controller/find-post-by-id";
import { updatedpostByIdPostController } from "@/http/controllers/post-controller/update.post";
import { deletePostByIdPostController } from "@/http/controllers/post-controller/delete-post";

const router = Router();

router.post("/usuario", createUserController);

router.post("/posts", createPostController);
router.get("/posts/search", findAllPostsController);
router.get("/posts", findAllPostsController);
router.get("/posts/:id", FindPostByIdPostController);
router.put("/posts/:id", updatedpostByIdPostController);
router.delete("/posts/:id", deletePostByIdPostController);

export { router };
