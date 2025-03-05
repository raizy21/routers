import express from "express";
import {
  getNotes,
  createNote,
  getNoteById,
  updateNote,
  deleteNote,
} from "../controllers/notes.js";

const notesRouter = express.Router();

notesRouter.route("/").get(getNotes).post(createNote);
notesRouter
  .route("/:id")
  .get(getNoteById)
  .put(updateNote)
  .delete(deleteNote);

export default notesRouter;
