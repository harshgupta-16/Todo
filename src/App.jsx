import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="container bg-violet-200 max-w-[60vw] min-h-[80vh] my-5 mx-auto px-5 py-5 rounded-2xl">
        <div className="addTodo">
          <h2 className="text-lg font-bold my-1">Add a Todo</h2>
          <input className="rounded-sm border-2 border-solid ...  bg-white w-full" type="text" />
          <button className="cursor-pointer my-3 font-bold hover:bg-violet-900 active:translate-0.5 text-white bg-violet-700 px-4 py-1 rounded-sm">
            Add
          </button>
        </div>

        <h2 className="text-xl font-bold">Your Todos</h2>
        <div className="todos">
          <div className="todo flex">
            <div className="text"></div>
            <div className="buttons">
              <button  className="cursor-pointer my-2 font-bold mx-2 hover:bg-violet-900 active:translate-0.5 text-white bg-violet-700 px-4 py-1 rounded-sm">
                Edit
              </button>
              <button  className="cursor-pointer my-2 font-bold mx-2 hover:bg-violet-900 active:translate-0.5 text-white bg-violet-700 px-4 py-1 rounded-sm">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
