import React from "react";
import TodoItem from "./TodoItem";

export default function Todos(props) {
  return (
    <div className="container">
      <h3 className="my-3">Todos List</h3>

      {props.todos.length === 0
        ? "No Todos to Display..."
        : props.todos.map((tds) => {
            return (
                  <TodoItem todo={tds} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
}
