import React, { useState } from "react";
import { useTodos } from "../data/todo";

export default function TodoInput() {
  const { addTodo } = useTodos();
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="w-full flex gap-4 ">
      <input
        type="text"
        placeholder="Enter your todo"
        className="border-2  py-1 px-2 w-full rounded-lg   text-[20px] border-[#D5A574]  text-gray-200"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        className="border-2 cursor-pointer text-yellow-100 bg-[#D5A574]  rounded-lg  px-4"
        onClick={() => {
          addTodo(inputValue);
          setInputValue("");
        }}
      >
        Add
      </button>
    </div>
  );
}
