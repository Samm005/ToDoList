import ToDoItem from "./ToDoItem";
import "./ToDoList.css";

function ToDoList({ tasks, toggle, deleteTask, editTask }) {
  return (
    <ul className="todo-list">
      {tasks.length == 0 && "No tasks yet"}
      {tasks.map((task) => (
        <ToDoItem
          key={task.id}
          task={task}
          toggle={toggle}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
