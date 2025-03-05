import express from "express";
import userRouter from "./routers/userRouter.js";

const app = express();
const port = process.env.PORT || 3000;

// Enable parsing JSON in body of request
app.use(express.json());

// Routers
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
