import React from 'react';
import styles from './TaskCounter.module.scss';

interface TaskCounterProps {
  count: number;
}

//card to display the number of tasks completed
const TaskCounter: React.FC<TaskCounterProps> = ({ count }) => {
  return (
    <div className={styles.counter}>
      <div className={styles.number}>{count}</div>
      <div className={styles.text}>Tasks completed</div>
    </div>
  );
};

export default TaskCounter;
