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
        <input
          type="text"
          placeholder="Enter title"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <a href="">Add</a>
        {input}
        <div className="second">
          <div className="ftodo">
            <input type="checkbox" name="" id="" /> <span>Some work</span>
            <img src="/images/pencil.svg" height={24} />
            <img src="/images/delete.svg" alt="" height={24} />
          </div>
          <div className="stodo">
            <input type="checkbox" name="" id="" /> <span>Some work</span>
            <img src="/images/pencil.svg" height={24} />
            <img src="/images/delete.svg" alt="" height={24} />
          </div>
          <div className="ttodo">
            <input type="checkbox" name="" id="" /> <span>Some work</span>
            <img src="/images/pencil.svg" height={24} />
            <img src="/images/delete.svg" alt="" height={24} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
