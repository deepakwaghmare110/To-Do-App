import { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [updateTasks, setUpdateTasks] = useState("");

  function handleInputChange(e) {
    setTasks(e.target.value);
  }

  return (
    <div>
      <h1> Deepak's To Do List</h1>
      <input
        type="text"
        value={tasks}
        onChange={handleInputChange}
        placeholder="Enter a task"
      />
    </div>
  );
};

export default ToDoList;
