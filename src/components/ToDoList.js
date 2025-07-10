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

  function addtask() {}

  function deleteTask() {}

  function moveTaskUp() {}

  function moveTaskDown() {}

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
