// TaskList.tsx

import React from 'react';
import TaskItem from '../TaskItem/TaskItem'; //import TaskItem from './TaskItem/TaskItem';
import styles from './TaskList.module.scss';

interface Task {
  id: string;
  content: string;
}

interface TaskListProps {
  tasks: Task[];
}

//list of completed tasks
const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div className={styles.taskList}>
      <h5>Completed Tasks</h5>
      {tasks.map((task) => (
        <TaskItem key={task.id} title={task.content} />
      ))}
    </div>
  );
};

export default TaskList;
