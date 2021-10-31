import React, { useState, useEffect } from 'react';
import styles from './progressBar.module.scss';

interface Props {
  step: number;
}

const { s_container, s_stepContainer, s_stepComment, s_progress, s_currentStep } = styles;

const TOTAL_LENGTH = 312;
const TOTAL_STEP = 6;

const ProgressBar = ({ step }: Props) => {
  const [progress, setProgress] = useState(step * TOTAL_LENGTH - TOTAL_LENGTH / TOTAL_STEP);

  useEffect(() => {
    setProgress((step * TOTAL_LENGTH) / TOTAL_STEP);
  }, [step]);

  return (
    <div className={s_container}>
      <div style={{ width: `${progress}px` }} className={s_progress} />
      <div className={s_stepContainer}>
        <span className={s_stepComment}>
          {step === 1 && '시작이 반!'}
          {step === 6 && '얼마남지 않았어요!'}
        </span>
        <div className={s_currentStep}>
          <span>{step}</span> / {TOTAL_STEP}step
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
