"use client";
// import Image from "next/image";
// import { title } from "process";
import { X, Trash, Plus, User, Edit } from "lucide-react";
import { todo } from "node:test";
// import { todo } from "node:test";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([
    { title: "Abhishek", id: 2 },
    { title: "Nimora", id: 10 },
  ]);
  function addtodo() {
    setTodos([
      ...todos,
      {
        title: input,
        id: Date.now(),
      },
    ]);
    setInput("");
  }
  function deleteTodo(id: number) {
    const tempTodos = todos.filter((item) => item.id != id);
    setTodos(tempTodos);
  }
function updateTodo(id: number) {
  const temp = prompt("Enter a title");

  setTodos(
    todos.map((item) => {
      if (item.id === id) {
        return { ...item, title: temp || item.title };
      }
      return item;
    })
  );
}
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-[400px] p-4 bg-gray-100 rounded-lg">
          <h1 className="text-2xl font-bold mb-4">Todo App</h1>
          <div className="flex mb-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter a todo"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={addtodo}
              className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add
            </button>
          </div>
          <ul>
            {todos.map((item) => (
              <li
                key={item.id}
                className="flex items-center   justify-between p-2 border-b border-gray-300"
              >
                <span>{item.title}</span>
                <button
                  onClick={() => updateTodo(item.id)}
                  className="text-blue-500  hover:text-blue-700 focus:outline-none"
                >
                  <Edit />
                </button>
                <button
                  onClick={() => deleteTodo(item.id)}
                  className="text-red-500 hover:text-red-700 focus:outline-none"
                >
                  <Trash />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
