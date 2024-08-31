import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

// Get items stored in localStorage
const init = () => {
  return JSON.parse(localStorage.getItem('todos') || '[]');
};

/**
 * Custom hook for managing a list of todos.
 * @returns {Object} The state and functions related to todos.
 * @returns {Array} todos - The current list of todos.
 * @returns {number} todosCount - The total number of todos.
 * @returns {number} pendingTodosCount - The number of todos that are not marked as done.
 * @returns {Function} handleNewTodo - Function to add a new todo to the list.
 * @returns {Function} handleDeleteTodo - Function to delete a todo by its ID.
 * @returns {Function} handleToggleTodo - Function to toggle the completion status of a todo by its ID.
 * @returns {Function} handleEditTodo - Function to edit an existing todo item.
 */
export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos) || '[]');
  }, [todos]);

  /**
   * Adds a new todo to the list if it does not already exist.
   * @param {Object} newTodo - The new todo item to be added.
   * @param {number} newTodo.id - The unique ID of the todo.
   * @param {string} newTodo.description - The description of the todo.
   * @param {boolean} newTodo.done - The completion status of the todo.
   */
  const handleNewTodo = newTodo => {
    const todoExist = todos.find(
      todo => todo.description.toLowerCase() === newTodo.description.toLowerCase()
    );

    if (todoExist) return;

    dispatch({
      type: '[TODO] Add Todo',
      payload: newTodo,
    });
  };

  /**
   * Edits an existing todo item in the list.
   * @param {Object} updatedTodo - The todo item with updated information.
   * @param {number} updatedTodo.id - The unique ID of the todo.
   * @param {string} updatedTodo.description - The updated description of the todo.
   * @param {boolean} updatedTodo.done - The updated completion status of the todo.
   */
  const handleEditTodo = updatedTodo => {
    dispatch({
      type: '[TODO] Edit Todo',
      payload: updatedTodo,
    });
  };

  /**
   * Deletes a todo from the list by its ID.
   * @param {number} id - The ID of the todo to be deleted.
   */
  const handleDeleteTodo = id => {
    dispatch({
      type: '[TODO] Delete Todo',
      payload: id,
    });
  };

  /**
   * Toggles the completion status of a todo by its ID.
   * @param {number} id - The ID of the todo to be toggled.
   */
  const handleToggleTodo = id => {
    dispatch({
      type: '[TODO] Toggle Todo',
      payload: id,
    });
  };

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo => !todo.done).length,
    handleNewTodo,
    handleEditTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
