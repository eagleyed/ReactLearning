import React from "react";
import { HiFire } from "react-icons/hi";
import TodoHeader from "./Components/header/TodoTextInput";
import TodoList from "./Components/todos/TodoList";
import Footer from "./Components/footer/footer";
import { useSelector } from "react-redux";

const SimpleForm = () => {

  const statusFilter = useSelector((state) => state.filters.status);
  const colorFilter = useSelector((state) => state.filters.colors);
  //console.log(filter);
  return (
    <div className="container">
      <div className="flex justify-center items-center decoration-clone bg-gradient-to-b from-gray-300 to-black-500 py-5">
        <h1 className="text-5xl font-semibold text-blue-500">
          <HiFire className="text-red-500 inline-block text-5xl" /> Fire Todo</h1>
      </div>

      <TodoHeader />
      <TodoList filter={statusFilter} colorArr={colorFilter} />
      <Footer />

    </div>
  )
}

export default SimpleForm;