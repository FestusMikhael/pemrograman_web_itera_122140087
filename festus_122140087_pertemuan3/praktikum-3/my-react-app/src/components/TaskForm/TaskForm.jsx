import React, { useState } from 'react';
import './TaskForm.css';

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim()) return;
    
    // Buat task baru
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false
    };
    
    // Kirim task ke parent component
    onAddTask(newTask);
    
    // Reset form
    setTitle('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tambahkan tugas baru..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Tambah</button>
    </form>
  );
}

export default TaskForm;