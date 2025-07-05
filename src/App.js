import React from "react";
import "./style.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
const App = () => {
  return (
    <div>
      <header className="heading">Deeps To Do List</header>
      <Form />
      <ToDoList />
    </div>
  );
};

export default App;
