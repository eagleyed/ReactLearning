import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount, incrementAsync } from './counterSlice'
import { HiPlus, HiMinus } from "react-icons/hi"
export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementAmount] = useState(5)

    return(
        <>
            <div className="w-64 flex justify-center my-20 mx-auto text-2xl border-2 border-gray-500">
                <button aria-label="Decrement value" onClick={() => dispatch(decrement())} className="bg-white hover:bg-gray-500 text-gray-800 font-semibold py-0 px-0 cursor-pointer w-1/4">
                    <HiMinus className="inline-block align-text-bottom hover:text-white" />
                </button>
                <div className="w-2/4 text-center border-l-2 border-r-2 border-gray-500 p-2">{count}</div>
                <button onClick={() => dispatch(increment())} aria-label="Increment value" className="bg-white hover:bg-gray-500 text-gray-800 font-semibold py-2 px-4 cursor-pointer w-1/4">
                    <HiPlus className="inline-block align-text-top hover:text-white" />
                </button>
            </div>
            <h2 className="text-center text-2xl">Increment by amount</h2>
            <div className="w-64 flex justify-center my-5 mx-auto text-lg border-2 border-gray-500">
                <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))} aria-level="Add" className="w-2/5 text-center hover:bg-gray-500 hover:text-white">Add</button>
                <input onChange={e => setIncrementAmount(e.target.value)} aria-level="increment amount" type="number" className="w-1/5 outline-none border-l-2 border-r-2 border-gray-500 text-center text-sm" value={incrementAmount} />
                <button onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))} aria-level="Add Async" className="w-2/5 text-center hover:bg-gray-500 hover:text-white">Add Async</button>
            </div>
        </>
    )
}