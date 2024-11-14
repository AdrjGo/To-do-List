import IconTrash from "../assets/icons/IconTrash";

export default function DeleteButton() {
//   const handleDelete = () => {
//     onDelete(taskId);
//     console.log(`ELiminado ${taskId}}`);
//   };
  return (
    <button
      className="bg-red-500 text-white p-2 rounded-lg"
    >
      <IconTrash />
    </button>
  );
}

