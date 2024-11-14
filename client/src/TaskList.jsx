import { useState, useEffect } from "react";
import Form from "./components/Form";
import Tasks from "./components/Tasks";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/tasks")
      .then((res) => res.json())
      .then((data) => {
        const tasksWithBooleanCompleted = data.map((task) => ({
          ...task,
          completed: task.completed === 1,
        }));
        setTasks(tasksWithBooleanCompleted);
      })
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  return (
    <main className="grid place-items-center h-screen">
      <div className="flex flex-col items-center justify-center border-2 p-5 rounded-lg">
        <h1 className="text-[4vw] font-bold my-2">Lista de Tareas</h1>
        <Form />
        <Tasks tasks={tasks}/>
      </div>
    </main>
  );
}

export default TaskList;
