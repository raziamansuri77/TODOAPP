import { useTodos } from "../data/todo";
import TodoItem from "./todoItem";

export default function TodoList() {
  const { todos } = useTodos();
  return (
    <div className="  h-[450px] overflow-hidden">
      {todos.map((todo, index) => {
        return (
          <div className="   py-2  ">
            <TodoItem todo={todo} index={index} />
          </div>
        );
      })}
    </div>
  );
}
