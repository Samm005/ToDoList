import { useState } from "react";
import ToDoList from "./components/ToDoList";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newItem, setnewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (newItem.trim() === "") return;

    setTasks((currentTask) => {
      return [
        ...currentTask,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });

    setnewItem("");
  }

  function toggle(id, completed) {
    setTasks((currentTask) => {
      return currentTask.map((task) => {
        if (task.id == id) {
          return { ...task, completed };
        }
        return task;
      });
    });
  }

  function deleteTask(id) {
    setTasks((currentTask) => {
      return currentTask.filter((task) => task.id != id);
    });
  }

  return (
    <div className="todo-container">
      <Header />
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setnewItem(e.target.value)}
          className="todo-input"
        />
        <button>Add a new task </button>
      </form>
      <h1 className="todo-heading">To-do List</h1>
      <ToDoList tasks={tasks} toggle={toggle} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
