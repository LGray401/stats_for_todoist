
import React from 'react';
import styles from './ProgressBar.module.scss';

interface ProgressBarProps {
  completed: number;  // Number of completed tasks
  total: number;      // Total number of tasks
}

const ProgressBar: React.FC<ProgressBarProps> = ({ completed, total }) => {
  const percentage = (completed / total) * 100;

  return (
    <div className={styles.progressBar}>
      <div className={styles.filler} style={{ width: `${percentage}%` }} />
    </div>
  );
};

export default ProgressBar;
