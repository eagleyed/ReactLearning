import React, { useState, useEffect } from "react";

const App = () => {

  let [inputVal, setInputVal] = useState("");
  let [inputVal2, setInputVal2] = useState("");

  useEffect(() => {
      let elmt = document.querySelector(".header"); 
      elmt.textContent = inputVal2 ? inputVal2 : "Type something in both inputs.";
  }, [inputVal2]);

  return (
    <div className="container">
      {/**  Hedaer */}
      <div className="flex justify-center">
        <h1 className="header text-5xl">Hello World.</h1>
      </div>
      <div className="flex justify-center">
        <input onChange ={ (e) => setInputVal(inputVal = e.target.value) } className="w-full max-w-sm bg-transparent border-b border-red-500 text-red-500 mx-3 py-2 focus:outline-none" type="text" name="addnote" value={inputVal} />
      </div>
      <div className="flex justify-center">
        <input onChange ={ (e) => setInputVal2(inputVal2 = e.target.value) } className="w-full max-w-sm bg-transparent border-b border-red-500 text-red-500 mx-3 py-2 focus:outline-none" type="text" name="addnote2" value={inputVal2} />
      </div>
    </div>
  )
}
export default App;