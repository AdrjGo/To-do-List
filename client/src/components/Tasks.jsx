import PropTypes from "prop-types";
import DeleteButton from "./DeleteButton";

function Tasks({ tasks }) {
  return (
    <ul className="w-full">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="border-2 border-slate-100 rounded-lg p-2 my-3 flex justify-between items-center"
        >
          <input type="checkbox" />
          {task.task} - {task.completed ? "Completada" : "Pendiente"}
          <DeleteButton />
        </li>
      ))}
    </ul>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      task: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default Tasks;
