import React from "react";
import { Counter } from "./features/counter/Counter"


const App = () => {
  return(
    <div className="container">
      <div className="w-64 flex justify-center my-20 mx-auto text-2xl border-2 border-gray-500">
        
        <Counter />

      </div>
    </div>
  )
}

export default App;