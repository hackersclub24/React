import { useReducer } from "react";
import "./App.css";

function reducer(state, action) {
  switch (action.type) {
    case "INCREASE": {
      return { ...state, [action.payload]: state[action.payload] + 1 };
    }

    case "DECREASE": {
      return { ...state, [action.payload]: state[action.payload] - 1 };
    }

    case "RESET": {
      return { ...state, [action.payload]: 0 };
    }

    default: {
      return state;
    }
  }
}

function App() {
  const [state, dispath] = useReducer(reducer, {
    countA: 0,
    countB: 0,
    countC: 0,
  });

  return (
    <>
      <div className="box">
        <h1>Count1 = {state.countA}</h1>
      </div>
      <div className="box">
        <h1>Count2 = {state.countB}</h1>
      </div>
      <div className="box">
        <h1>Count3 = {state.countC}</h1>
      </div>
      <div>
        <button
          onClick={() => {
            dispath({
              type: "INCREASE",
              payload: "countA",
            });
          }}
        >
          Increase1
        </button>{" "}
        <button
          onClick={() => {
            dispath({
              type: "DECREASE",
              payload: "countA",
            });
          }}
        >
          Decrease1
        </button>{" "}
        <button
          onClick={() => {
            dispath({
              type: "RESET",
              payload: "countA",
            });
          }}
        >
          reset1
        </button>
      </div>
      <br />
      <div>
        <button
          onClick={() => {
            dispath({
              type: "INCREASE",
              payload: "countB",
            });
          }}
        >
          Increase2
        </button>{" "}
        <button
          onClick={() => {
            dispath({
              type: "DECREASE",
              payload: "countB",
            });
          }}
        >
          Decrease2
        </button>
        <button
          onClick={() => {
            dispath({
              type: "RESET",
              payload: "countB",
            });
          }}
        >
          reset2
        </button>
      </div>
      <br />
      <div>
        <button
          onClick={() => {
            dispath({
              type: "INCREASE",
              payload: "countC",
            });
          }}
        >
          Increase3
        </button>{" "}
        <button
          onClick={() => {
            dispath({
              type: "DECREASE",
              payload: "countB",
            });
          }}
        >
          Decrease3
        </button>
        <button
          onClick={() => {
            dispath({
              type: "RESET",
              payload: "countC",
            });
          }}
        >
          reset3
        </button>
      </div>
    </>
  );
}

export default App;
