"use client";
// import Image from "next/image";
// import { title } from "process";
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
    setInput("")
  }
  return (
    <>
      <div>
        <div>
          <h1>MY todos</h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter title"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={addtodo}>ADD</button>
        </div>
        {todos.map((item, idx) => {
          return (
            <p key={idx}>{item.title}</p>
          )
        })}
      </div>
    </>
  );
}
