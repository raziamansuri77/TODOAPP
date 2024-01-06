import { useState } from "react";
import { Todo, useTodos } from "../data/todo";
import { BiEdit } from "react-icons/bi";
import { BsCheck2Circle } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
export default function TodoItem(props: { todo: Todo; index: number }) {
  const { markTodoComplete, deleteTodo, editTodo } = useTodos();
  const [isEditMode, setIsEditMode] = useState(false);
  const [inputEditValue, setInputEditValue] = useState("");
  if (isEditMode) {
    return (
      <div className="flex gap-4">
        <input
          type="text"
          className="p-2 border-4  rounded-lg w-[280px] border-[#D5A574]"
          value={inputEditValue}
          onChange={(e) => {
            setInputEditValue(e.target.value);
          }}
        />
        <button
          className=" px-4  py-3 rounded-lg text-white  bg-[#D5A574] "
          onClick={() => {
            editTodo(inputEditValue, props.index);
            setInputEditValue("");
            setIsEditMode(false);
          }}
        >
          Ok
        </button>
      </div>
    );
  }

  return (
    <div className="">
      <div
        className="flex w-full justify-between items-center  text-[20px]  text-white p-2 rounded-lg"
        // style={{
        //   transform: props.todo.isCompleted ? "skewX(-30deg)" : undefined,
        // }}
      >
        <div
          style={{
            textDecoration: props.todo.isCompleted ? "line-through" : undefined,
          }}
        >
          {props.todo.title}
        </div>
        <div className="flex gap-2 py-2 ">
          <button
            className=" "
            onClick={() => {
              deleteTodo(props.index);
            }}
          >
            <AiOutlineDelete />
          </button>
          <button
            className=" "
            onClick={() => {
              setIsEditMode(true);
            }}
          >
            <BiEdit />
          </button>
          <button
            className="   "
            onClick={() => {
              markTodoComplete(props.index);
            }}
          >
            <BsCheck2Circle />
          </button>
        </div>
      </div>
    </div>
  );
}
