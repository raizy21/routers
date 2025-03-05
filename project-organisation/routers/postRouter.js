import { Router } from "express";
import {
  getPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost,
} from "../controllers/posts.js";

const userRouter = Router();

userRouter.get("/posts", getPosts);
userRouter.post("/posts", createPost);
userRouter.get("/posts/:id", getPostById);
userRouter.put("/posts/:id", updatePost);
userRouter.delete("/posts/:id", deletePost);

export default userRouter;
