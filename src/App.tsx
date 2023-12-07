import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import TaskItem from './components/TaskItem/TaskItem';
import TaskList from './components/TaskList/TaskList';
import ProgressBar from './components/ProgressBar/ProgressBar';
import useTodoistTasks from './hooks/useTodoistTasks';

function App() {
  // Example tasks, assuming you will replace this with actual data from Todoist API
  const ExampleTasks = [
    { id: 1, title: 'Complete React tutorial' },
    { id: 2, title: 'Read documentation on hooks' },
    { id: 3, title: 'Build a Todoist app' },
  ];
  const apiToken = import.meta.env.VITE_REACT_APP_TODOIST_API_TOKEN; // Set your API token in .env file
  console.log(apiToken);
  const { tasks, isLoading, error } = useTodoistTasks(apiToken);

  if (isLoading) {
    return <div>Loading tasks...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="App">
      <ProgressBar completed={2} total={3} />
      <h1>Completed Tasks</h1>
      <div>
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}

export default App
