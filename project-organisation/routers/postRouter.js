import { Router } from "express";
import {
  getPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost,
} from "../controllers/posts.js";

const userRouter = Router();

userRouter.get("/", getPosts);
userRouter.post("/", createPost);
userRouter.get("/:id", getPostById);
userRouter.put("/:id", updatePost);
userRouter.delete("/:id", deletePost);

export default userRouter;
