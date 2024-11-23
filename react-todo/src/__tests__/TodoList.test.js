// src/__tests__/TodoList.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';  // Import TodoList component

// Test that TodoList renders with initial todos
test('renders TodoList component with initial todos', () => {
  render(<TodoList />);
  const todoItem = screen.getByText(/Learn React/i);  // Check if "Learn React" todo is present
  expect(todoItem).toBeInTheDocument();
  const deleteButton = screen.getByText(/Delete/i);  // Ensure the Delete button is present
  expect(deleteButton).toBeInTheDocument();
});

// Test adding a new todo
test('adds a new todo when the form is submitted', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText('Add a new todo');  // Find the input field
  const button = screen.getByText(/Add Todo/i);  // Find the Add Todo button

  fireEvent.change(input, { target: { value: 'New Todo' } });  // Simulate typing a new todo
  fireEvent.click(button);  // Simulate clicking the Add button

  const newTodoItem = screen.getByText('New Todo');  // Check if the new todo appears
  expect(newTodoItem).toBeInTheDocument();
});

// Test toggling a todo completion
test('toggles the completion status of a todo', () => {
  render(<TodoList />);
  const todoItem = screen.getByText(/Learn React/i);  // Find the todo item

  fireEvent.click(todoItem);  // Click to toggle the completion status
  expect(todoItem).toHaveStyle('text-decoration: line-through');  // Check if the todo is marked as completed

  fireEvent.click(todoItem);  // Click again to uncomplete the todo
  expect(todoItem).not.toHaveStyle('text-decoration: line-through');  // Ensure the line-through is removed
});

// Test deleting a todo
test('deletes a todo item', () => {
  render(<TodoList />);
  const deleteButton = screen.getByText(/Delete/i);  // Find the Delete button
  fireEvent.click(deleteButton);  // Simulate clicking the Delete button

  const todoItem = screen.queryByText(/Learn React/i);  // Check if the todo is deleted
  expect(todoItem).not.toBeInTheDocument();  // Ensure the todo is removed from the list
});
