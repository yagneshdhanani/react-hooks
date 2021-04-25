import React from "react";
import { ACTION } from "./UseReducer";

import "./Main.css";

function Todo({ todo, dispatch }) {
  return (
    <div className="todo-container">
      <div
        className="todo-value"
        style={{ color: todo.completed ? "grey" : "black" }}
      >
        {todo.value}
      </div>
      <div className="button-container">
        <button
          className="btn"
          onClick={() =>
            dispatch({ type: ACTION.TOGGLE_TODO, payload: { id: todo.id } })
          }
        >
          Toggle
        </button>
        <button
          onClick={() =>
            dispatch({ type: ACTION.DELETE_TODO, payload: { id: todo.id } })
          }
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
