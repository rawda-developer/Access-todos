import {
  CREATE_TODO,
  REMOVE_TODO,
  MARK_TODO_AS_COMPLETED,
  LOAD_TODOS_PROGRESS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE,
} from './actions';
export const isLoading = (state = false, action) => {
  switch (action.type) {
    case LOAD_TODOS_PROGRESS:
      return true;
    case LOAD_TODOS_SUCCESS:
    case LOAD_TODOS_FAILURE:
      return false;
    default:
      return state;
  }
};
export const todos = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TODO:
      return state.concat(payload.todo);
    case REMOVE_TODO:
      return state.filter((todo) => todo !== payload.text);

    case MARK_TODO_AS_COMPLETED:
      return state.map((todo) => {
        if (todo.text === payload.text) {
          return { ...todo, isCompleted: true };
        }
        return todo;
      });
    case LOAD_TODOS_SUCCESS: {
      return payload.todos;
    }
    case LOAD_TODOS_FAILURE:
      return [];
    case LOAD_TODOS_PROGRESS:
      return [];

    default:
      return state;
  }
};
