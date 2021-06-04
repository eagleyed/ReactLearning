import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './counterSlice'
import { HiPlus, HiMinus } from "react-icons/hi"
export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return(
        <>
            <button aria-label="Decrement value" onClick={() => dispatch(decrement())} className="bg-white hover:bg-gray-500 text-gray-800 font-semibold py-0 px-0 cursor-pointer w-1/4">
                <HiMinus className="inline-block align-text-bottom hover:text-white" />
            </button>
            <input className=" w-2/4 text-center border-l-2 border-r-2 border-gray-500 outline-none p-2" type="text" value={count}/>
            <button onClick={() => dispatch(increment())} aria-label="Increment value" className="bg-white hover:bg-gray-500 text-gray-800 font-semibold py-2 px-4 cursor-pointer w-1/4">
                <HiPlus className="inline-block align-text-top hover:text-white" />
            </button>
        </>
    )
}