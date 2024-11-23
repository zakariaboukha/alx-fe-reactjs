// src/TodoList.js
import React, { useState } from 'react';

const TodoList = () => {
  // Initialize the state with a few demo todos
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Write Tests', completed: false },
  ]);

  const [newTodo, setNewTodo] = useState('');

  // Add a new todo
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return; // Prevent adding empty todos
    const newTodoItem = { id: Date.now(), text: newTodo, completed: false };
    setTodos([...todos, newTodoItem]);
    setNewTodo('');
  };

  // Toggle the completion status of a todo
  const handleToggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
            onClick={() => handleToggleTodo(todo.id)}
          >
            {todo.text}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default TodoList;
