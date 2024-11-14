import { useState, useEffect } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  return (
    <main className="text-center border-2">
      <h1 className="text-[5vw]">Lista de Tareas</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.task} - {task.completed ? "Completada" : "Pendiente"}</li>
        ))}
      </ul>
    </main>
  );
}

export default TaskList;
