import { useState } from "react";
import "../style.css";
const ToDoList = () => {
  const [tasks, setTasks] = useState([
    "Take a shower",
    "Go to GYM",
    "Dinner",
    "Do a Breakfast",
  ]);
  const [newTask, setNewtask] = useState("");

  function handleInputChange(e) {
    setNewtask(e.target.value);
  }

  function addtask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewtask("");
    }
  }

  function deleteTask(index) {
    const updatedTask = tasks.filter((element, i) => i !== index);
    setTasks(updatedTask);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index - 1]] = [
        updatedTask[index - 1],
        updatedTask[index],
      ];
      setTasks(updatedTask);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index + 1]] = [
        updatedTask[index + 1],
        updatedTask[index],
      ];
      setTasks(updatedTask);
    }
  }

  return (
    <div className="to-do-list">
      <h1> Deepak's To Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Enter a task"
      />
      <button onClick={addtask} className="add-button">
        Add
      </button>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              UP
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              DOWN
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;
