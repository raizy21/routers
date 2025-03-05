// index.js
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the main app!");
});

app.listen(port, () => {
  console.log(`Main app listening at <http://localhost>:${port}`);
});
