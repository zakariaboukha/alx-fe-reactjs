// src/__tests__/TodoList.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../TodoList';

test('renders TodoList component correctly', () => {
  const { getByText } = render(<TodoList />);
  expect(getByText('Todo List')).toBeInTheDocument();
  expect(getByText('Learn React')).toBeInTheDocument();
  expect(getByText('Build a Todo List')).toBeInTheDocument();
  expect(getByText('Learn Testing')).toBeInTheDocument();
});

test('adds a new todo item', () => {
  const { getByText, getByPlaceholderText } = render(<TodoList />);
  const input = getByPlaceholderText('Add Todo');
  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(getByText('Add Todo'));
  expect(getByText('New Todo')).toBeInTheDocument();
});

test('toggles todo item completed state', () => {
  const { getByText } = render(<TodoList />);
  const todoItem = getByText('Learn React');
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle('text-decoration: line-through');
  fireEvent.click(todoItem);
  expect(todoItem).not.toHaveStyle('text-decoration: line-through');
});

test('deletes a todo item', () => {
  const { getByText } = render(<TodoList />);
  fireEvent.click(getByText('Delete', { selector: 'button' }));
  expect(() => getByText('Learn React')).toThrow();
});
