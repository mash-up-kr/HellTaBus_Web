import React, { useState, useEffect } from 'react';
import styles from './ProgressBar.module.scss';

const { s_wrapper, s_step, s_progress, s_currentStep } = styles;

const ProgressBar = ({ percent }: { percent: number }) => {
  const [value, setValue] = useState(percent * 312 - 60);

  useEffect(() => {
    setValue(percent * 312);
  }, [percent]);

  return (
    <div className={s_wrapper}>
      <div style={{ width: `${value}px` }} className={s_progress} />
      <span className={s_step}>
        <span className={s_currentStep}>{percent * 5}</span> / 5 step
      </span>
    </div>
  );
};

export default ProgressBar;
