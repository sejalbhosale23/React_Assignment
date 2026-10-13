
import { useState } from "react";
import "./App.css";

function App() {
  // Create a state variable with an initial value of 0
  const [count, setCount] = useState(0);

  // Increase the counter
  function increment() {
    setCount((previousCount) => previousCount + 1);
  }

  // Decrease the counter
  function decrement() {
    setCount((previousCount) => previousCount - 1);
  }

  // Reset the counter to zero
  function reset() {
    setCount(0);
  }

  return (
    <div className="app">
      <div className="counter-card">
        <h1>React Counter App</h1>
        <p className="subtitle">
          Increment, decrement, and reset the counter
        </p>

        <div className="count-display">
          {count}
        </div>

        <div className="button-group">
          <button
            className="increment-btn"
            onClick={increment}
          >
            + Increment
          </button>

          <button
            className="decrement-btn"
            onClick={decrement}
          >
            - Decrement
          </button>

          <button
            className="reset-btn"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;