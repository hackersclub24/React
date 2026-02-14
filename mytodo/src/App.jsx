import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "workkkk",
      status: false,
    },
    {
      id: 2,
      title: "workkkk",
      status: false,
    },
    {
      id: 3,
      title: "workkkk",
      status: false,
    },
  ]);

  function addtodo() {
    // alert("ok");
    // e.preventDefault()
    setTodos([
      ...todos,
      {
        id: 4,
        title: input,
        status: false,
      },
    ]);
  }
  function updatestatus(id) {
    let temp = todos.slice();
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].id == id) {
        if (temp[i].status == false) {
          // alert("h")
          temp[i].status = true;
          setSelectedId(id);
        } else {
          temp[i].status = false;
          setSelectedId(null);
        }
      }
    }
    setTodos(temp);
  }
  function deltodo(id) {
    const tempTodos = todos.filter((item) => item.id != id);
    setTodos(tempTodos);
  }
  function editodo(idx, title) {
    const prt = prompt("Enter a title", title);
    const tempTodos = todos.slice();
    tempTodos[idx].title = prt;
    setTodos(tempTodos);
  }
  return (
    <>
      <div className="main">
        <div className="heading">
          <h1>To-Do List</h1>{" "}
          <img src="/images/notebook.svg" alt="" height={34} />
        </div>
        <div className="in">
          <input
            type="text"
            placeholder="add your task here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <a onClick={addtodo}>Add</a>
        </div>
        {/* {console.log(todos)} */}
        {todos.map((item, idx) => {
          return (
            <div className="work">
              <div>
                <input
                  type="radio"
                  onClick={() => updatestatus(item.id)}
                  checked={item.status}
                />
                <span
                  key="ti"
                  className={selectedId === item.id ? "active" : ""}
                >
                  {item.title}
                </span>
                <a className="edit" onClick={()=>editodo(idx,item.title)}>
                  <img src="/images/edit.svg" alt="" height={24} />
                </a>
                <a onClick={() => deltodo(item.id)}>
                  <img src="/images/cross.svg" alt="" height={24} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
