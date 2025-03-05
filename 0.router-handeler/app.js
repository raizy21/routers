// app.js
import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const port = 3000;

// Use the userRoutes router for all paths starting with /users
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the main app!");
});

app.listen(port, () => {
  console.log(`Main app listening at <http://localhost>:${port}`);
});
