import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { todoToggled, colorSelected, todoDeleted } from "../../actions/index";
import { HiTrash } from "react-icons/hi";
import { availableColors, capitalize } from "../filters/Colors";

const selectTodoById = (state, todoId) => {
    return state.todos.find((todo) => todo.id === todoId);
}

const TodoListItem = ({id, odevn}) => {

    const dispatch = useDispatch();

    const todo = useSelector((state) => selectTodoById(state, id));

    const { text, completed, color } = todo;

    const bgclass = color ? `bg-${color}-500`:'bg-gray-100';

    const textClass = completed ? "line-through" : "tracking-wide";

    const listBgCls = (odevn % 2 === 0) ? "bg-gray-100" : ""; 

    const colorOptions = availableColors.map((c) => (
        <option key={c} value={c}>{capitalize(c)}</option>
    ))

    const handleCompletedChanged = () => {
        dispatch(todoToggled(id));
    }
    const onDelete = () => {
        dispatch(todoDeleted(id));
    }
    const handleColorChanged = (e) => {
        const color = e.target.value;
        dispatch(colorSelected(id, color));
    }
    
    
    return (
        <li className={`flex w-full ${listBgCls} md:w-6/12 justify-center items-center px-1 md:px-5 py-2 md:mx-auto md:py-3 rounded-md`}>
            <div className="w-1/12"><input onChange={handleCompletedChanged} className="border-gray-300" type="checkbox" checked={completed} /></div>
            <div className={`w-8/12 md:w-8/12 md:tracking-wide ${textClass} pr-2 md:pr-0`}>{text}</div>
            <div className="w-2/12 md:w-2/12 text-right">
                <select className={`${bgclass} w-full md:w-8/12 text-sm py-1 pr-0 text-center border-0 bg-none md:bg-color-select-bg focus:outline-none focus:ring-0`} value={color} onChange={handleColorChanged}>
                    <option value="">None</option>
                    {colorOptions}
                </select>
            </div>
            <div className="w-1/12 md:w-1/12 text-right">
                <button onClick={onDelete}><HiTrash /></button>
            </div>
        </li>
    )
}

export default TodoListItem;