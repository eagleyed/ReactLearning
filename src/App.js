import React from "react";
import { HiPlus, HiMinus } from "react-icons/hi";


const App = () => {
  return(
    <div className="container">
      <div className="w-64 flex justify-center my-20 mx-auto text-2xl border-2 border-gray-500">
        <button className="bg-white hover:bg-gray-500 text-gray-800 font-semibold py-0 px-0 cursor-pointer w-1/4">
          <HiMinus className="inline-block align-text-bottom hover:text-white" />
        </button>
        <input className=" w-2/4 text-center border-l-2 border-r-2 border-gray-500 outline-none p-2" type="text" />
        <button className="bg-white hover:bg-gray-500 text-gray-800 font-semibold py-2 px-4 cursor-pointer w-1/4">
          <HiPlus className="inline-block align-text-top hover:text-white" />
        </button>
      </div>
    </div>
  )
}

export default App;