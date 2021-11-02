import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import style from './progressBar.module.scss';

interface Props {
  step: number;
}

const { s_container, s_stepContainer, s_stepComment, s_progress, s_currentStep } = style;

const TOTAL_LENGTH = 312;
const TOTAL_STEP = 6;

const ProgressBar = ({ step }: Props) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress((step * TOTAL_LENGTH) / TOTAL_STEP);
  }, [step]);

  return (
    <div className={classNames(s_container)}>
      <div style={{ width: `${progress}px` }} className={classNames(s_progress)} />
      <div className={classNames(s_stepContainer)}>
        <span className={classNames(s_stepComment)}>
          {step === 1 && '시작이 반!'}
          {step === 6 && '얼마남지 않았어요!'}
        </span>
        <div className={classNames(s_currentStep)}>
          <span>{step}</span> / {TOTAL_STEP}step
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
