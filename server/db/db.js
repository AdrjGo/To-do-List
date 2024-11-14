import { createClient } from "@libsql/client";
import dotenv from "dotenv";

dotenv.config();

const client = new createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

export async function getTask() {
  //obtiene las tareas
  try {
    const result = await client.execute("SELECT * FROM tasks");
    return result.rows;
  } catch (err) {
    throw new Error(err);
  }
}

export async function addTask(task) {
  //agregar tarea
  try {
    const result = await client.execute(
      "INSERT INTO tasks (task, completed) VALUES ($1, $2)",
      [task, false]
    );
  } catch (err) {
    throw new Error(err);
  }
}

