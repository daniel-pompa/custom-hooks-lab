import { todoReducer } from '../hooks';

describe('todoReducer - managing todo actions', () => {
  const initialState = [
    {
      id: 1,
      description: 'Learn React',
      done: false,
    },
  ];

  test('should return the initial state when action is unknown', () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test('should add a new todo item', () => {
    const action = {
      type: '[TODO] Add Todo',
      payload: {
        id: 2,
        description: 'Learn Redux',
        done: false,
      },
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContainEqual(action.payload);
  });

  test('should edit an existing todo item', () => {
    const action = {
      type: '[TODO] Edit Todo',
      payload: {
        id: 1,
        description: 'Learn Zustand',
        done: true,
      },
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(1);
    expect(newState[0]).toEqual(action.payload);
  });

  test('should delete a todo item', () => {
    const action = {
      type: '[TODO] Delete Todo',
      payload: 1,
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(0);
  });

  test('should toggle the done status of a todo item', () => {
    const action = {
      type: '[TODO] Toggle Todo',
      payload: 1,
    };
    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBe(true);

    const newState2 = todoReducer(newState, action);
    expect(newState2[0].done).toBe(false);
  });
});
