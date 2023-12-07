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

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div className={styles.taskList}>
      {tasks.map((task) => (
        <TaskItem key={task.id} title={task.content} />
      ))}
    </div>
  );
};

export default TaskList;
