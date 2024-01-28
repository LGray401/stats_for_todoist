// TaskItem.tsx

import React from 'react';
import styles from './TaskItem.module.scss';

interface TaskItemProps {
  title: string;
}

const TaskItem: React.FC<TaskItemProps> = ({ title }) => {
  return (
    <div className={styles.taskItem}>
      <span className={styles.checkbox}>
        <svg className={styles.checked} xmlns="src\assets\check-mark.svg" viewBox="0 0 16 16">
          <path fill="#fff" d="M6.002 11.413l-3.707-3.708 1.414-1.414 2.293 2.292 5.293-5.292 1.414 1.414z" />
        </svg>
      </span>
      <span className={styles.title}>{title}</span>
    </div>
  );
};

export default TaskItem;
