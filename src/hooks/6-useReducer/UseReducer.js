import React, { useReducer, useState } from "react";
import Todo from "./Todo";

import "./Main.css";

export const ACTION = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTION.ADD_TODO:
      return [...todos, action.payload];

    case ACTION.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });

    case ACTION.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);

    default:
      return todos;
  }
}

function UseReducer() {
  const [todos, dispatch] = useReducer(reducer, []);

  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value === "" || value === " ")
      return alert("Please! Provide the todo!");

    dispatch({
      type: ACTION.ADD_TODO,
      payload: { id: Date.now(), value: value, completed: false },
    });

    setValue("");
  };

  return (
    <div>
      <h1>useReducer Hook</h1>
      <div className="todos-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="todo"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="input-field"
          />
          <button type="submit" className="submit-btn">
            Add
          </button>
        </form>
        {todos.map((todo) => {
          return <Todo todo={todo} key={todo.id} dispatch={dispatch} />;
        })}
      </div>
    </div>
  );
}

export default UseReducer;
