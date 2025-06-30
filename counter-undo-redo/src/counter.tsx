import React, { useState } from "react";

const Counter: React.FC = () => {
  const [history, setHistory] = useState<number[]>([0]);
  const [index, setIndex] = useState<number>(0);

  const current = history[index];

  const updateHistory = (newValue: number) => {
    const updatedHistory = history.slice(0, index + 1);
    updatedHistory.push(newValue);
    setHistory(updatedHistory);
    setIndex(updatedHistory.length - 1);
  };

  const increment = () => updateHistory(current + 1);
  const decrement = () => updateHistory(current - 1);
  const reset = () => updateHistory(0);
  const undo = () => index > 0 && setIndex(index - 1);
  const redo = () => index < history.length - 1 && setIndex(index + 1);

  return (
    <div>
      <h2>{current}</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem" }}>
        <button onClick={increment}>➕</button>
        <button onClick={decrement}>➖</button>
        <button onClick={reset}>🔄</button>
        <button onClick={undo} disabled={index === 0}>🔁 Undo</button>
        <button onClick={redo} disabled={index === history.length - 1}>🔂 Redo</button>
      </div>
    </div>
  );
};

export default Counter;
