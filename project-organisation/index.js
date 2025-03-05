import express from "express";
import userRouter from "./routers/userRouter.js";
import postRouter from "./routers/postRouter.js";

const app = express();
const port = process.env.PORT || 8080;

// Enable parsing JSON in body of request
app.use(express.json());

// Routers
app.use("/users", userRouter);
app.use("/posts", postRouter);

app.listen(port, () =>
  console.log(`Server is running on port ${port} http://localhost:${port}`)
);
