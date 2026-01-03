import ToDoItem from "./ToDoItem";
import "./ToDoList.css";

function ToDoList({ tasks, toggle, deleteTask }) {
  return (
    <ul className="todo-list">
      {tasks.length == 0 && "No tasks yet"}
      {tasks.map((task) => (
        <ToDoItem
          key={task.id}
          task={task}
          toggle={toggle}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
