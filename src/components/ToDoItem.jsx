import "./ToDoItem.css";
import { useState } from "react";

function ToDoItem({ task, toggle, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.title);

  function handleEdit() {
    if (isEditing) {
      if (editText.trim() === "") return;

      editTask(task.id, editText);
      setIsEditing(false);
    } else {
      setEditText(task.title);
      setIsEditing(true);
    }
  }

  return (
    <li key={task.id} className="list-item">
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={(e) => toggle(task.id, e.target.checked)}
        />
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        ) : (
          task.title
        )}
      </label>
      <div className="btn">
        <button className="edit-btn" onClick={handleEdit}>
          {isEditing ? "Save" : "Edit"}
        </button>
        <button className="delete-btn" onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default ToDoItem;
