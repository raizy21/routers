import express from "express";
import cors from "cors";
import {userRouter} from "./routes/users.js";
import notesRouter from "./routes/notes.js";

import "./db/association.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/users", userRouter);
app.use("/notes", notesRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
