import { useState, useEffect } from "react";
import Form from "./components/Form";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  return (
    <main className="grid place-items-center h-screen">
      <div className="flex flex-col items-center justify-center border-2 p-5 rounded-lg">
        <h1 className="text-[4vw] font-bold my-2">Lista de Tareas</h1>
        <Form />
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.task} - {task.completed ? "Completada" : "Pendiente"}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default TaskList;
