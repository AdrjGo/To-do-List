import express from "express";
import { getTask, addTask } from "../db/db.js";
const router = express.Router();

router.get("/tasks", async (req, res) => {
  // obtener las tareas
  try {
    const task = await getTask();
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener las tareas" });
  }
});

router.post("/tasks", async (req, res) => {
  // agregar tarea
  const { task } = req.body;
  if (!task) {
    res.status(400).json({ error: "Falta el campo task, es obligatorio" });
    return;
  }
  try {
    await addTask(task);
    res.status(201).json({ message: "Tarea agregada correctamente" });
  } catch (err) {
    res.status(500).json({ error: "Error al agregar la tarea" });
  }
});
export default router;
