import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { availableColors, capitalize } from "../filters/Colors";
import { StatusFilters } from "../../reducers/filtersSlice";
import { markAllCompleted, clearAllCompleted, statusFilterChanged, colorFilterChanged } from "../../actions/index";
import { HiHeart } from "react-icons/hi";



const RemainingTodos = ({count}) => {
    const suffix = (count === 1) ? ' ': 's';
    const countTodos = useSelector((state) => state.todos.length);
    return (
        <div className="w-full md:w-3/12 text-center">
            <h2 className="text-lg mb-5">Remaining Todos</h2>
            <p>{count}/{countTodos} Todo{suffix} Left.</p>
        </div>
    )
}

const FilterByStatus = ({value:status, onChange}) => {

    const renderedFilters = Object.keys(StatusFilters).map((key) => {

        const value = StatusFilters[key];

        const handleClick = () => onChange(value);

        const extraClss = value === status ? 'border-red-500' : 'border-gray-300';

        return (
            <li key={value} className="list-none">
                <button type="button" className={`w-4/12 block border ${extraClss} rounded-md px-3 py-2 mx-auto my-2 bg-blue-500 text-gray-100`} onClick={handleClick}>{key}</button>
            </li>
        )

    })
    
    return (
        <div className="w-full md:w-3/12">
            <h2 className="text-lg text-center mb-5">Filter By Status</h2>
            {renderedFilters}
        </div>
    )
}

const FilterByColor = ({value:colors, onChange}) => {
    const renderedColors = availableColors.map((color) => {
        const checked = colors.includes(color);
        const handleChange = () => {
            const changeType = checked ? "removed" : "added";
            onChange(color, changeType);
        }
        return (
            <label key={color} className="inline-block mb-2">
                <input type="checkbox" name={color} checked={checked} onChange={handleChange} />
                <span className={`bg-${color}-500 w-16 h-10 inline-block align-middle p-2 mx-2 text-center`}>
                    {capitalize(color)}
                </span>
            </label>
        )
    })

    return (
        <div className="w-full md:w-3/12 text-center">
            <h2 className="text-lg mb-5">Filter By Colors</h2>
            {renderedColors}
        </div>
    )
} 

const Footer = () => {
    const dispatch = useDispatch();
    const remainingTodos = useSelector((state) => {
        const uncompletedTodos =  state.todos.filter((todo) => !todo.completed);
        return uncompletedTodos.length;
    });

    const {status, colors} = useSelector((state) => state.filters);

    const onStatusChange = (status) => dispatch(statusFilterChanged(status));
    const onColorFilterChange = (color, changeType) => dispatch(colorFilterChanged(color,changeType));
   
    return (
        <>
        <footer className="w-full flex flex-wrap justify-center items-top pt-5 mb-5 border-t border-gray-200">
            <RemainingTodos count={remainingTodos} />
            <div className="w-full md:w-3/12">
                <h2 className="text-lg text-center mb-5">Actions</h2>
                <button type="button" className="w-6/12 block border border-gray-300 rounded-md px-3 py-2 mx-auto my-2 bg-blue-500 text-gray-100" onClick={() => dispatch(markAllCompleted())}>Mark All Completed</button>
                <button type="button" className="w-6/12 block border border-gray-300 rounded-md px-3 py-2 mx-auto my-2 bg-red-500 text-gray-100" onClick={() => dispatch(clearAllCompleted())}>Clear Completed</button>
            </div>
            <FilterByStatus value={status} onChange={onStatusChange} />
            <FilterByColor value={colors} onChange={onColorFilterChange} />

        </footer>
        <div className="flex">
            <div className="w-3/12 p-0 m-0 border-t border-green-500 bg-green-500"></div>
            <div className="w-3/12 p-0 m-0 border-t border-pink-500 bg-pink-500"></div>
            <div className="w-3/12 p-0 m-0 border-t border-blue-500 bg-blue-500"></div>
            <div className="w-3/12 p-0 m-0 border-t border-purple-500 bg-purple-500"></div>
        </div>
        <p className="text-center text-sm text-gray-500">Made with <HiHeart className="inline-block text-red-400" /> App concept and layout is taken from official react-redux documents.</p>
        </>
    )
}

export default Footer;