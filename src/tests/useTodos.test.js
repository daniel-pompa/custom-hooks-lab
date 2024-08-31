import { act, renderHook } from '@testing-library/react';
import { useTodos } from '../hooks/useTodos';

describe('useTodos Hook', () => {
  // Clear localStorage and mocks before each test
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  test('should initialize todos from localStorage', () => {
    const storedTodos = [{ id: 1, description: 'Learn React', done: false }];
    localStorage.setItem('todos', JSON.stringify(storedTodos));

    const { result } = renderHook(() => useTodos());

    // Check if the todos are loaded from localStorage correctly
    expect(result.current.todos).toEqual(storedTodos);
    expect(result.current.todosCount).toBe(1);
    expect(result.current.pendingTodosCount).toBe(1);
  });

  test('should add a new todo', () => {
    const { result } = renderHook(() => useTodos());

    const newTodo = { id: 1, description: 'Learn Zustand', done: false };

    // Add a new todo item
    act(() => {
      result.current.handleNewTodo(newTodo);
    });

    // Verify that the new todo was added successfully
    expect(result.current.todos).toContainEqual(newTodo);
    expect(result.current.todosCount).toBe(1);
    expect(result.current.pendingTodosCount).toBe(1);
  });

  test('should edit an existing todo', () => {
    const initialTodo = { id: 1, description: 'Learn Redux', done: false };
    const { result } = renderHook(() => useTodos());

    // Add initial todo item
    act(() => {
      result.current.handleNewTodo(initialTodo);
    });

    const updatedTodo = { id: 1, description: 'Learn Zustand', done: true };

    // Edit the existing todo item
    act(() => {
      result.current.handleEditTodo(updatedTodo);
    });

    // Verify that the todo was updated correctly
    expect(result.current.todos).toContainEqual(updatedTodo);
    expect(result.current.pendingTodosCount).toBe(0);
  });

  test('should delete a todo by id', () => {
    const todo = { id: 1, description: 'Learn React', done: false };
    const { result } = renderHook(() => useTodos());

    // Add todo item to be deleted
    act(() => {
      result.current.handleNewTodo(todo);
    });

    // Delete the todo item by ID
    act(() => {
      result.current.handleDeleteTodo(1);
    });

    // Verify that the todo was deleted successfully
    expect(result.current.todos.length).toBe(0);
    expect(result.current.todosCount).toBe(0);
  });

  test('should toggle the done status of a todo', () => {
    const todo = { id: 1, description: 'Learn React', done: false };
    const { result } = renderHook(() => useTodos());

    // Add todo item
    act(() => {
      result.current.handleNewTodo(todo);
    });

    // Toggle the done status of the todo item
    act(() => {
      result.current.handleToggleTodo(1);
    });

    // Verify that the todo status was toggled to done
    expect(result.current.todos[0].done).toBe(true);
    expect(result.current.pendingTodosCount).toBe(0);

    // Toggle the done status again to revert
    act(() => {
      result.current.handleToggleTodo(1);
    });

    // Verify that the todo status was toggled back to not done
    expect(result.current.todos[0].done).toBe(false);
    expect(result.current.pendingTodosCount).toBe(1);
  });
});
