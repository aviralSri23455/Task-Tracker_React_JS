import React from 'react';

function Task({ task, toggleTaskCompletion, deleteTask }) {
  return (
    <div className="task">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
      />
      <span className={task.completed ? 'completed' : ''}>
        {task.description}
      </span>
      <button onClick={() => deleteTask(task.id)} className="delete-button">
        🗑️
      </button>
    </div>
  );
}

export default Task;
