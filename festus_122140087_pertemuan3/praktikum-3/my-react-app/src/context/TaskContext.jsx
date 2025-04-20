import React, { createContext, useContext} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const TaskContext = createContext();

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload];
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.payload);
    case 'TOGGLE_COMPLETE':
      return state.map(task => 
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    default:
      return state;
  }
};

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  
  const dispatch = (action) => {
    setTasks(taskReducer(tasks, action));
  };

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
}