function Form() {
  return (
    <form className="flex gap-2">
      <input type="text" placeholder="Agregar tarea" className=" text-black rounded-lg px-4 py-2 font-bold" />
      <button type="submit" className="bg-white text-black rounded-lg px-4 py-2 font-bold">Añadir</button>
    </form>
  );
}

export default Form;
