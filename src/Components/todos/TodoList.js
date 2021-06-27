import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";
import listEmptySrc from "../../emptylist.gif"

const selectTodoIds = (state, statusFilter) => {

    switch(statusFilter) {
        case "active":
            return state.todos.filter((todo) => !todo.completed)
        case "completed":
            return state.todos.filter((todo) => todo.completed)
        default:
            return state.todos.map((todo) => todo)
    }

}

const TodoList = ({filter, colorArr}) => {

    //console.log(colorArr);
    let newTodos = [];
    
    const todos = useSelector(state => selectTodoIds(state, filter), shallowEqual);

    if(colorArr.length > 0 ) {
        newTodos = todos.filter((todo) => colorArr.includes(todo.color));
    }

    const netColor = colorArr.length > 0 ? newTodos : todos;

    const renderedListItems = netColor.map((todo, index) => {
        return <TodoListItem key={todo.id.toString()} id={todo.id} odevn={index+1} />
    });

    return (
        <ul className="py-3">
        {
            (netColor && netColor.length > 0) ? renderedListItems : <li className="w-full md:w-6/12 text-center px-1 md:px-5 py-2 md:mx-auto md:py-3 rounded-md"><img src={listEmptySrc} alt="empty list"/></li>
        }
        </ul>
    );
}

export default TodoList;