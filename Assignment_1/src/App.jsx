
import { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  // Function to perform arithmetic operations
  function calculate(a, b, op) {
    switch (op) {
      case "+":
        return a + b;

      case "-":
        return a - b;

      case "*":
        return a * b;

      case "/":
        if (b === 0) {
          return "Cannot divide by zero";
        }
        return a / b;

      default:
        return "Invalid operator";
    }
  }

  // Function called when Calculate is clicked
  function handleCalculate() {
    if (num1.trim() === "" || num2.trim() === "") {
      setError("Please enter both numbers.");
      setResult(null);
      return;
    }

    const a = Number(num1);
    const b = Number(num2);

    if (!Number.isFinite(a) || !Number.isFinite(b)) {
      setError("Please enter valid numbers.");
      setResult(null);
      return;
    }

    const answer = calculate(a, b, operator);

    setError("");
    setResult(answer);
  }

  function handleClear() {
    setNum1("");
    setNum2("");
    setOperator("+");
    setResult(null);
    setError("");
  }

  return (
    <div className="page">
      <div className="calculator">
        <h1>JavaScript Calculator</h1>
        <p className="subtitle">
          Assignment 1: Basic Arithmetic Operations
        </p>

        <label htmlFor="num1">First Number</label>
        <input
          id="num1"
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter first number"
        />

        <label htmlFor="num2">Second Number</label>
        <input
          id="num2"
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter second number"
        />

        <label htmlFor="operator">Select Operation</label>
        <select
          id="operator"
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
        >
          <option value="+">Addition (+)</option>
          <option value="-">Subtraction (-)</option>
          <option value="*">Multiplication (*)</option>
          <option value="/">Division (/)</option>
        </select>

        

        <div className="buttons">
          <button onClick={handleCalculate}>
            Calculate
          </button>
          <button className="clear-btn" onClick={handleClear}>
            Clear
          </button>
        </div>

        {error && <p className="error">{error}</p>}

        {result !== null && (
          <div className="result">
            <h2>Result</h2>
            <p>{num1} {operator} {num2} = {result}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;