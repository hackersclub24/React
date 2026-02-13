import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import notebook from "/notebook.svg";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

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
          <a href="">
            <img src="/images/plus.svg" alt="" />
          </a>
        </div>
        {/* {input} */}
        <div className="second">
          <div className="ftodo">
            <input type="checkbox" name="" id="" /> <span>Some work</span>
            <a href="">
              <img src="/images/delete.svg" alt="" height={24} />
            </a>
          </div>
          <div className="stodo">
            <input type="checkbox" name="" id="" /> <span>Some work</span>
            <a href="">
              <img src="/images/delete.svg" alt="" height={24} />
            </a>
          </div>
          <div className="ttodo">
            <input type="checkbox" name="" id="" /> <span>Some work</span>
            <a href="">
              <img src="/images/delete.svg" alt="" height={24} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
