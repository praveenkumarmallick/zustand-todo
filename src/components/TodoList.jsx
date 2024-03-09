import React from "react";
import useStore from "../store";

const TodoList = () => {
  const todos = useStore((state) => state.todos);
  const toggleTodo = useStore((state) => state.toggleTodo);
  const removeTodo = useStore((state) => state.removeTodo);

  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <li key={index} className="todo-item">
          <span
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            onClick={() => toggleTodo(index)}
          >
            {todo.text}
          </span>
          <button onClick={() => removeTodo(index)} className="remove-button">Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
