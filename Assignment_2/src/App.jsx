import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [editId, setEditId] = useState(null);

  // Add or update a task
  function handleSubmit(e) {
    e.preventDefault();

if (taskInput.trim() === "") {
  alert("Please enter a task!");
  return;
}

if (editId !== null) {
  // Update existing task
  setTasks(
    tasks.map((task) =>
      task.id === editId
        ? { ...task, text: taskInput.trim() }
        : task
    )
  );
  setEditId(null);
} else {
  // Add new task
  const newTask = {
    id: Date.now(),
    text: taskInput.trim(),
  };

  setTasks([...tasks, newTask]);
}

setTaskInput("");


  }

  // Edit a task
  function handleEdit(task) {
    setTaskInput(task.text);
    setEditId(task.id);
  }

  // Delete a task
  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));

    
if (editId === id) {
  setEditId(null);
  setTaskInput("");
}

  }

  // Cancel editing
  function handleCancel() {
    setEditId(null);
    setTaskInput("");
  }

  return (<div className="container"> <h1>My To-Do List</h1>

    
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your task..."
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />

      <button type="submit">
        {editId !== null ? "Update Task" : "Add Task"}
      </button>

      {editId !== null && (
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      )}
    </form>

    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span>{task.text}</span>

          <div className="actions">
            <button
              type="button"
              onClick={() => handleEdit(task)}
            >
              Edit
            </button>

            <button
              type="button"
              className="delete-btn"
              onClick={() => handleDelete(task.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>

    {tasks.length === 0 && (
      <p>No tasks added yet!</p>
    )}
  </div>

  );
}

export default App;
