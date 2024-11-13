import React from 'react';
import Task from '../Component/Task';

function TaskList({ tasks, toggleTaskCompletion, deleteTask }) {
  const sortedTasks = [
    ...tasks.filter(task => !task.completed),
    ...tasks.filter(task => task.completed),
  ];

  return (
    <div className="task-list">
      {sortedTasks.map(task => (
        <Task
          key={task.id}
          task={task}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
