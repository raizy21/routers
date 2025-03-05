// routes/userRoutes.js
import { Router } from "express";

const userRoutes = Router();

// Define routes specific to users
userRoutes.get("/", (req, res) => {
  res.send("Get users");
});

userRoutes.post("/", (req, res) => {
  res.send("Create user");
});

export default userRoutes;
