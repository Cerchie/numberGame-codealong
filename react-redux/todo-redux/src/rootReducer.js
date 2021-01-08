const DEFAULT_STATE = {
    todos: []
  };
  
  function rootReducer(state = DEFAULT_STATE, action) {
    if (action.type === "ADD_TODO") {
      return {
        ...state,
        todos: [
          ...state.todos, { ...action.todos }
        ]
      };
    }

    if (action.type === "REMOVE_TODO") {
      return {
        ...state,
    todos: state.todos.filter(todo => todo.id !== action.id)
      };
    }
    return state;
  }
  
  export default rootReducer;