import React from 'react';
import './TaskItem.css';

function TaskItem({ task, onDelete, onToggleComplete }) {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <input 
          type="checkbox" 
          checked={task.completed} 
          onChange={() => onToggleComplete(task.id)} 
        />
        <span className="task-title">{task.title}</span>
      </div>
      <div className="task-actions">
        <button 
          className="delete-btn" 
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;