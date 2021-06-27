/*
const todoAppState = {
  todos: [
    { id: 0, text: 'Learn React', completed: true },
    { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
    { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
  ],
  filters: {
    status: 'Active',
    colors: ['red', 'blue']
  }
}

{type: 'todos/todoAdded', payload: todoText}
{type: 'todos/todoToggled', payload: todoId}
{type: 'todos/colorSelected, payload: {todoId, color}}
{type: 'todos/todoDeleted', payload: todoId}
{type: 'todos/allCompleted'}
{type: 'todos/completedCleared'}
{type: 'filters/statusFilterChanged', payload: filterValue}
{type: 'filters/colorFilterChanged', payload: {color, changeType}}

*/
export const todoAdded = (todoText) => {
    return { 
        type: "todos/todoAdded",
        payload: todoText
    }
}

export const todoToggled = (todoId) => {
    return {
        type: "todos/todoToggled",
        payload: todoId
    }
}

export const colorSelected = (todoId, color) => {
  return {
    type: "todos/colorSelected",
    payload: { todoId, color }
  }
}

export const todoDeleted = (todoId) => {
  return {
    type: 'todos/todoDeleted',
    payload: todoId
  }
}

export const markAllCompleted = () => {
  return {
    type: "todos/allCompleted"
  }
}

export const clearAllCompleted = () => {
  return {
    type: "todos/completedCleared"
  }
}

export const statusFilterChanged = (filterValue) => {
  return {
      type: "todos/todoFilterStatus",
      payload: filterValue
  }
}

export const colorFilterChanged = (filterValue, selectType) => {
  return {
    type: "todos/todoColorFilter",
    payload: { filterValue, selectType }
  }
}