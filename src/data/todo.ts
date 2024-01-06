import { atom, useAtom } from "jotai";

export type Todo = {
  title: string;
  isCompleted: boolean;
};

const todosAtom = atom<Todo[]>([]);

export function useTodos() {
  // return actual todos array
  // return add todo function
  // return edit todo
  // return delete todos
  // mark todo completed function

  const [todos, setTodos] = useAtom(todosAtom);

  function addTodo(title: string) {
    const newTodo: Todo = {
      isCompleted: false,
      title: title,
    };
    setTodos([...todos, newTodo]);
  }
  function editTodo(title: string, index: number) {
    const newArray = [...todos];
    newArray[index].title = title;
    setTodos(newArray);
  }
  function deleteTodo(index: number) {
    const newArray = [...todos];
    newArray.splice(index, 1);
    setTodos(newArray);
  }
  function markTodoComplete(index: number) {
    const newArray = [...todos];
    newArray[index].isCompleted = !newArray[index].isCompleted;
    setTodos(newArray);
  }
  return {
    todos,
    addTodo,
    editTodo,
    markTodoComplete,
    deleteTodo,
  };
}
