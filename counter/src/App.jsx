import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [reset, setReset] = useState(false);
  return (
    <>
      <nav>
        <button style={{ backgroundColor: "black", border: "none" }}>
          <img src="/images/info.svg" alt="" height={24} />
        </button>
        <button style={{ backgroundColor: "black", border: "none" }}>
          <img src="/images/settings.svg" alt="" height={24} />
        </button>
        <button
          style={{ backgroundColor: "black", border: "none" }}
          onClick={() => {
            setReset(true);
          }}
        >
          <img src="/images/reload.svg" alt="" height={24} />
        </button>
        {/* <img src="/images/reload.svg" alt="" height={24}/> */}
      </nav>
      <div className="main">
        <button
          className="min"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          <img src="/images/minus.svg" alt="" height={54} />
        </button>
        <div className="number min">
          <h1>{count}</h1>
        </div>
        <button
          className="min max"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          <img src="/images/plus.svg" alt="" height={54} />
        </button>
      </div>
      {reset && (
        <div className="reset">
          <img
            onClick={() => {
              setReset(false);
            }}
            src="/images/cross.svg"
            style={{ color: "white" }}
            alt=""
            height={34}
          />
          <h2>Reset counter?</h2>
          <button onClick={()=> {
            setCount(0)
            setReset(false)
          }}>Yes</button>
          <button
            onClick={() => {
              setReset(false);
            }}
          >
            No
          </button>
        </div>
      )}
      <div className="setting">
          <div className="color">
            <div className="red box"></div>
            <div className="blue box"></div>
          </div>
      </div>
    </>
  );
}

export default App;
