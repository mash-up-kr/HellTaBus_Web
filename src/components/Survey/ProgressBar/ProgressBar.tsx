import React, { useState, useEffect, useMemo } from 'react';
import classNames from 'classnames';
import styles from './progressBar.module.scss';

interface Props {
  step: number;
}

const { s_container, s_stepContainer, s_stepComment, s_progress, s_currentStep } = styles;

const MIN_STEP = 1;
const MAX_STEP = 6;
const TOTAL_LENGTH = 312;

const ProgressBar = ({ step }: Props) => {
  const message = useMemo(() => {
    if (step === MIN_STEP) return '시작이 반!';
    if (step === MAX_STEP) return '얼마남지 않았어요!';
    return '';
  }, [step]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress((step * TOTAL_LENGTH) / MAX_STEP);
  }, [step]);

  return (
    <div className={classNames(s_container)}>
      <div style={{ width: `${progress}px` }} className={classNames(s_progress)} />
      <div className={classNames(s_stepContainer)}>
        <span className={classNames(s_stepComment)}>{message}</span>
        <div className={classNames(s_currentStep)}>
          <span>{step}</span> / {MAX_STEP}step
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
