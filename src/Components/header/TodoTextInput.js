import React, { useState } from "react";
import { todoAdded } from "../../actions/index";
import { useDispatch } from "react-redux";
import { HiPlus } from "react-icons/hi";

const TodoTextInput = () => {

    const [todoText, setTodoText] = useState('');
    const dispatch = useDispatch();
    const handleChange = (evt) => setTodoText(evt.target.value);

    const onPressEnter = (e) => {
        if( e.key === 'Enter') {
            //console.log(e.key);
            const trimmedTxt = todoText.trim();
            dispatch(todoAdded(trimmedTxt));
            setTodoText('');
        }
    }

    return (
        <div className="flex flex-col w-full md:w-6/12 mx-auto my-0">
            <h2 className="text-xl md:text-xl my-2 text-center text-red-500 font-semibold">Add something to your todo list!</h2>
            <div className="px-1 relative">
                <HiPlus className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl"/>
                <input type="text" onChange={handleChange} onKeyDown={onPressEnter} className="w-full pl-10 block text-left border border-gray-300 placeholder-gray-500 rounded-md focus:border-0 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:bg-white" placeholder="Create your first todo!" value = {todoText} />
            </div>
        </div>
    )
}

export default TodoTextInput