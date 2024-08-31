/**
 * Reducer function to manage the todo state based on actions.
 * @param {Array} state - The current state of the todo list. An array of Todo items.
 * @param {Object} action - The action to be processed to update the state.
 * @returns {Array} The new state of the todo list after applying the action.
 */
export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case '[TODO] Add Todo':
      return [...state, action.payload];
    case '[TODO] Edit Todo':
      return state.map(todo => (todo.id === action.payload.id ? action.payload : todo));
    case '[TODO] Delete Todo':
      return state.filter(todo => todo.id !== action.payload);
    case '[TODO] Toggle Todo':
      return state.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });
    default:
      return state;
  }
};
