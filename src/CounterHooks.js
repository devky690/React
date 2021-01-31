import React, { useState, useContext } from "react";
import { ThemeContext } from "./App";

export default function CounterHooks({ initialCount }) {
  //remember use hooks at the top level
  const [count, setCount] = useState(initialCount);
  //useContext rerenders
  const style = useContext(ThemeContext);
  return (
    <div>
      <button
        style={style}
        onClick={() => setCount((prevCount) => prevCount - 1)}
      >
        -
      </button>
      <span>{count}</span>
      <button
        style={style}
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        +
      </button>
    </div>
  );
}
