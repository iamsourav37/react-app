import React, { useState } from "react";
import TodoList from "./TodoList";

function Todo() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);

  const formHandle = (e) => {
    e.preventDefault();
    if (todoText.trim() === "") {
      console.log("empty todo");
      return;
    }
    setTodos([...todos, todoText]);
    setTodoText("");
  };

  const onChangeHandler = (e) => {
    setTodoText(e.target.value);
  };

  const deleteTodo = (index) => {
    console.log("delete index:", index);
    const newTodoList = todos.filter((v, i) => i !== index);
    setTodos(newTodoList);
  };

  return (
    <div className="container mt-5">
      <div className="container-fluid text-center justify-content-center align-items-center">
        <h1 className="display-5">Todo App</h1>

        <form className="form-inline" onSubmit={formHandle}>
          <input
            type="text"
            className="form-control mb-2 mr-sm-2"
            placeholder="Add todo..."
            value={todoText}
            onChange={onChangeHandler}
          />

          <button type="submit" className="btn btn-primary mb-2">
            Add
          </button>
        </form>
      </div>

      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
}

export default Todo;
