import express from "express";
import {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/users.js";

const userRouter = express.Router();

userRouter.route("/").get(getUsers).post(createUser);
userRouter.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

export default userRouter;
