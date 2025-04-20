import React from 'react';
import Header from '../../components/Header/Header';
import TaskForm from '../../components/TaskForm/TaskForm';
import TaskItem from '../../components/TaskItem/TaskItem';
import { useTasks } from '../../context/TaskContext';
import './Home.css';

function Home() {
  const { tasks, dispatch } = useTasks();
  
  // Handler untuk menambah task baru
  const handleAddTask = (newTask) => {
    dispatch({ type: 'ADD_TASK', payload: newTask });
  };
  
  // Handler untuk menghapus task
  const handleDeleteTask = (taskId) => {
    dispatch({ type: 'DELETE_TASK', payload: taskId });
  };
  
  // Handler untuk toggle status completed
  const handleToggleComplete = (taskId) => {
    dispatch({ type: 'TOGGLE_COMPLETE', payload: taskId });
  };
  
  // Hitung jumlah task yang selesai dan belum selesai
  const completedTasks = tasks.filter(task => task.completed).length;
  const remainingTasks = tasks.length - completedTasks;

  return (
    <div className="home">
      <Header 
        title="React Task Manager" 
        description="Kelola tugas Anda dengan mudah" 
      />
      
      <main className="container">
        <div className="stats">
          <p>Total: {tasks.length} tugas</p>
          <p>Selesai: {completedTasks}</p>
          <p>Belum selesai: {remainingTasks}</p>
        </div>
        
        <TaskForm onAddTask={handleAddTask} />
        
        <div className="task-list">
          {tasks.length === 0 ? (
            <p className="empty-message">Belum ada tugas. Tambahkan tugas baru!</p>
          ) : (
            tasks.map(task => (
              <TaskItem 
                key={task.id}
                task={task} 
                onDelete={handleDeleteTask}
                onToggleComplete={handleToggleComplete}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default Home;