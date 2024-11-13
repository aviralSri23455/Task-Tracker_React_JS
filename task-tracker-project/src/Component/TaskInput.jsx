import React, { useState } from 'react';

function TaskInput({ addTask }) {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;
    addTask(newTask);
    setNewTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Start writing and press enter to create task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="task-input"
      />
      <button type="submit" className="add-task-button">➤</button>
    </form>
  );
}

export default TaskInput;
