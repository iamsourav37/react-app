import React from "react";

function TodoList(props) {
  return (
    <div className="mt-4">
      <ul className="list-group">
        {props.todos.map((todo, index) => (
          <li className="list-group-item" key={index}>
            {todo}{" "}
            <span className="ms-5">
              <button
                onClick={() => props.onDelete(index)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
