"use client";

import { count } from "console";
import { createContext, ReactNode, useContext, useState } from "react";
// Step 1
// Consumer

const CounterContext = createContext({
  a: 0,
  increase: function () {},
  decrease: function () {},
});

// Step 2
export const CounterContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [counter, setCounter] = useState(5);
  function increase() {
    setCounter(counter + 1);
  }
  function decrease() {
    setCounter(counter - 1);
  }
  return (
    <CounterContext.Provider value={{ a: counter, increase, decrease }}>
      {children}
    </CounterContext.Provider>
  );
};

// Step 3 Intialise Context
export function useCounter() {
  const context = useContext(CounterContext);

  if (!context) throw new Error("Context Invalid!");

  return context;
}
