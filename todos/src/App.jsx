import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import notebook from "/notebook.svg";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "some Data 1",
      status: true,
    },
    {
      id: 2,
      title: "some Data 2",
      status: true,
    },
    {
      id: 3,
      title: "some Data 3",
      status: true,
    },
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        id: 4,
        title: input,
        status: false,
      },
    ]);
  }

  function deleteTodo(id) {
    const tempTodos = todos.filter((item) => item.id != id);
    setTodos(tempTodos);
  }

  function editTodo(title, idx) {
    const prt = prompt("Enter a title", title);
    const tempTodos = todos.slice()
    tempTodos[idx].title = prt;
    setTodos(tempTodos);
  }

  return (
    <>
      <div className="main">
        <div className="heading">
          <h1>Todo App</h1>
        </div>
        <div className="in">
          <input
            type="text"
            placeholder="Enter title"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <a onClick={addTodo}>
            <img src="/images/plus.svg" alt="" />
          </a>
        </div>
        {/* {input} */}
        <div className="second">
          {todos.map((item, idx) => {
            return (
              <div className="ftodo">
                <input type="checkbox" name="" id="" checked={item.status} />
                <span>{item.title}</span>
                <div>
                  <img src="/images/pencil.svg" alt="" height={24} onClick={()=>editTodo(item.title,idx)}/>
                  <img
                    src="/images/delete.svg"
                    alt=""
                    height={24}
                    onClick={() => deleteTodo(item.id)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
