import express from "express";
const router = express.Router();
import createTodo from "../controllers/createTodo.js";
import updateTodo from "../controllers/updateTodo.js";
import deleteTodo from "../controllers/deleteTodo.js";
import getTodo, { getTodoById } from "../controllers/getTodo.js";

router.post("/createTodo", createTodo);
router.get("/getTodos", getTodo);
router.get("/getTodos/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

export default router;
