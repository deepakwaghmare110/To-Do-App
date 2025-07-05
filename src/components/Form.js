const Form = () => {
  return (
    <div>
      <form>
        <input type="text" className="todo-input"></input>
      </form>
      <button type="submit" className="todo-btn">
        Click Here
      </button>
      <select>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
};

export default Form;
