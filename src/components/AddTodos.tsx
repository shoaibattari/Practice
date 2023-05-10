"use client";
import { useState } from "react";

export default function AddTodos() {
  const [Todo, setTodo] = useState("");
  const [Todos, setTodos] = useState(["todo 1", "todo 2", "todo 3"]);

  const addTodo = () => {
    if (Todo != "" && !Todos.includes(Todo)) {
      let temp = Todos;
      temp.push(Todo);
      setTodo("");
    }
  };

  return (
    <div>
      <div className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className=" text-3xl  underline text-center mb-5">Add A Todo</div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <input
            className="p-5"
            placeholder="add todo text"
            value={Todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />

          <button
            onClick={addTodo}
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg w-fit"
          >
            Add Todo
          </button>
        </div>
      </div>

      <div className=" text-3xl  underline text-center mt-5">Todos-List</div>
      <div className="md:grid md:grid-cols-3">
        {Todos.map((e) => (
          <div className=" py-12 sm:py-16  rounded-3xl border m-5  border-5 text-center bg-gray-300 ">
            <div className=" text-5xl font-semibold tracking-tight text-gray-900 sm:text-5xl uppercase hover:text-green-600 hover:scale-125">
              {e}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
