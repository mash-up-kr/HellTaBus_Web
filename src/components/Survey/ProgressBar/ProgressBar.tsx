import React, { useState, useEffect } from 'react';
import styles from './ProgressBar.module.scss';

interface Props {
  percent: number;
}

const { s_wrapper, s_step, s_progress, s_currentStep } = styles;

const TOTAL_LENGTH = 312;
const TOTAL_STEP = 6;

const ProgressBar = ({ percent }: Props) => {
  const [progress, setProgress] = useState(percent * TOTAL_LENGTH - TOTAL_STEP);

  useEffect(() => {
    setProgress((percent * TOTAL_LENGTH) / TOTAL_STEP);
  }, [percent]);

  return (
    <div className={s_wrapper}>
      <div style={{ width: `${progress}px` }} className={s_progress} />
      <span className={s_step}>
        <span className={s_currentStep}>{percent * 5}</span> / 5 step
      </span>
    </div>
  );
};

export default ProgressBar;
