const initialState = {
    todos: [
      { id: 0, text: 'Learn React', completed: true },
      { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
      { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
    ],
    filters: {
      status: 'All',
      colors: []
    }
  }

  const nextTodoId = (todos) => {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId +1
  }

  const appReducer = (state = initialState, action) => {
      switch(action.type) {
          case "todos/todoAdded": {
              return {
                  ...state,
                  todos: [
                    ...state.todos,
                    {
                          id: nextTodoId(state.todos),
                          text: action.payload,
                          completed: false
                    }
                  ]
              }
          }
          case "todos/todoToggled": {
              return {
                ...state,
                todos: state.todos.map(todo => {
                    // if this is not the todo item we're looking for, leave it alone
                    if(todo.id !== action.payload) {
                        return todo
                    }
                    // we found the todo item, change the status
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                })
              }
          }
          default:
              return state
    }
  }

  export default appReducer;