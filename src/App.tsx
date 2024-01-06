import TodoInput from "./componets/todo-input";
import TodoList from "./componets/todoList";

function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center  bg-[#D5A574]  ">
      <div className="w-[400px] h-[600px] border-2 rounded-[20px] p-4   bg-[#12343B] ">
        <div className="text-[30px] font-bold flex items-center w-full justify-center text-yellow-50">
          TOD APP
        </div>
        <div className="flex flex-col gap-4">
          <TodoInput />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
