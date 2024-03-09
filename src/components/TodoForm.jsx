import React, { useState } from "react";
import useStore from "../store";

const TodoForm = () => {
  const [inputText, setInputText] = useState("");
  const addTodo = useStore((state) => state.addTodo);

  const handleAddTodo = () => {
    if (inputText.trim() !== "") {
      addTodo(inputText);
      setInputText("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Add a new todo"
        className="add-todo-input"
      />
      <button onClick={handleAddTodo} className="add-todo-button">
        Add Todo
      </button>
    </div>
  );
};

export default TodoForm;
