import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    console.log(todos);
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id);
    setTodo(t[0].todo);
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
  };

  const handleDelete = (e, id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this todo")
    if(!confirmDelete) return;
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => item.id === id);
    let newTodos = [...todos]; // ✅ copy to avoid direct state mutation
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos); // ✅ not setTodo
  };

  return (
    <>
      <Navbar />
      <div className="container bg-violet-200 max-w-[60vw] min-h-[80vh] my-5 mx-auto px-5 py-5 rounded-2xl">
        <div className="addTodo">
          <h2 className="text-lg font-bold my-1">Add a Todo</h2>
          <input onChange={handleChange} value={todo} className="rounded-sm border-2 border-solid ...  bg-white w-full" type="text"/>
          <button onClick={handleAdd} className="cursor-pointer my-3 font-bold hover:bg-violet-900 active:translate-0.5 text-white bg-violet-700 px-4 py-1 rounded-sm">
            Save
          </button>
        </div>

        <h2 className="text-xl font-bold">Your Todos</h2>
        <div className="todos">
          {todos.length===0 && <div>No todo to display. Add some</div>}
          {todos.map((item) => {
            return (
              <div key={item.id} className="todo flex justify-between">

                <div className="flex gap-5">
                  <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} />
                  <div className={`${item.isCompleted ? "line-through" : ""}  mt-2.5 setup`}>{item.todo}</div>
                </div>
               
                <div className="buttons">
                  <button onClick={(e)=>{handleEdit(e, item.id)}} className="cursor-pointer my-2 font-bold mx-2 hover:bg-violet-900 active:translate-0.5 text-white bg-violet-700 px-4 py-1 rounded-sm">
                    Edit
                  </button>
                  <button onClick={(e)=>{handleDelete(e, item.id)}} className="cursor-pointer my-2 font-bold mx-2 hover:bg-violet-900 active:translate-0.5 text-white bg-violet-700 px-4 py-1 rounded-sm">
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
