import { Router } from "express";
import { createUser, getAllUsers } from "../controllers/users.js";

const userRouter = Router();

// Route to get all users
userRouter.get("/", getAllUsers);

// Route to create a new user
userRouter.post("/", createUser);

export default userRouter;
