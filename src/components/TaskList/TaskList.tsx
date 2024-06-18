// TaskList.tsx

import React, { useState, useEffect } from 'react';
import TaskItem from '../TaskItem/TaskItem'; //import TaskItem from './TaskItem/TaskItem';
import styles from './TaskList.module.scss';
import ProjectSelector from '../ProjectSelector/ProjectSelector';
import { useAccessToken } from '../../hooks/AccesTokenContext';

interface Task {
  content: string;
  meta_data: null;
  user_id: string;
  task_id: string;
  note_count: number;
  project_id: number;
  section_id: string;
  completed_at: string;
  id: string;
}

interface TaskListProps {
  tasks: Task[];
}

//list of completed tasks
const TaskList: React.FC<TaskListProps> = ({ tasks }) => {

  const { accessToken } = useAccessToken();
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

  const handleProjectSelect = (projectId: number) => {
    // filter tasks for project id
    console.log('id' + projectId);
    const newFilteredTasks = tasks.filter((task) => task.project_id == projectId);
    setFilteredTasks(newFilteredTasks);
  };

  return (
    console.log('tasks' + filteredTasks),
    <div className={styles.taskList}>
      <div className={styles.taskListHeader}>
      <h5>Completed Tasks</h5>
      <ProjectSelector accessToken={accessToken} onProjectSelect={handleProjectSelect} />
      </div>
      {filteredTasks
      //filter out tasks with @no_track
        .filter(task => !task.content.includes('@no_track'))
        .map((task) => (
          <TaskItem key={task.id} title={task.content} />
      ))}
    </div>
  );
};

export default TaskList;

