import express from "express";
import { addTask, updateTask, deleteTask } from "../controller/todoController.js"

const router = express.Router();

router.post("/",addTask);
router.patch("/update/:id",updateTask);
router.delete("/delete/:id",deleteTask);

export default router;