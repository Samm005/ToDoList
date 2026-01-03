import "./ToDoItem.css";

function ToDoItem({ task, toggle, deleteTask }) {
  return (
    <li key={task.id} className="list-item">
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={(e) => toggle(task.id, e.target.checked)}
        />
        {task.title}{" "}
      </label>
      <div className="btn">
        <button className="edit-btn">Edit</button>
        <button className="delete-btn" onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default ToDoItem;
