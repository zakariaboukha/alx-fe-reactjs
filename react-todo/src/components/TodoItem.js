// src/TodoItem.js
import React from 'react';

const TodoItem = ({ todo, onToggleTodo, onDeleteTodo }) => {
  return (
    <li
      onClick={() => onToggleTodo(todo.id)}  // Toggle completion when clicked
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
        cursor: 'pointer',
      }}
    >
      {todo.text}
      <button onClick={(e) => {
        e.stopPropagation();  // Prevent click event from triggering toggle
        onDeleteTodo(todo.id);  // Delete the todo when clicked
      }}>Delete</button>
    </li>
  );
};

export default TodoItem;
