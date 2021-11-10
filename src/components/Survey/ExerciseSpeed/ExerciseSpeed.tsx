import React, { useState } from 'react';
import classNames from 'classnames';
import style from './exerciseSpeed.module.scss';

const {
  s_a11yHidden,
  s_container,
  s_buttonWrapper,
  s_exerciseSpeedButton,
  s_selectedExerciseSpeed,
  s_nextButton,
} = style;

interface Props {
  exerciseSpeed: string;
  setExerciseSpeed: (value: string) => void;
  setNextPage: () => void;
}

function ExerciseSpeed({ exerciseSpeed, setExerciseSpeed, setNextPage }: Props) {
  const [isDisabled, setIsDisabled] = useState<boolean>(!exerciseSpeed);

  const handleClickExerciseSpeedButton = (userExerciseSpeed: string) => () => {
    setExerciseSpeed(userExerciseSpeed);
    setIsDisabled(false);
  };

  return (
    <section className={classNames(s_container)}>
      <h2>
        <p>
          <span>어떤 속도</span>로
        </p>
        운동 하길 원하시나요?
      </h2>
      <h3>운동 경험이 적을수록 천천히 해보세요</h3>
      <div className={classNames(s_buttonWrapper)}>
        <label htmlFor="SLOW">
          <input type="radio" value="SLOW" id="SLOW" className={classNames(s_a11yHidden)} />
          <button
            type="button"
            className={classNames(s_exerciseSpeedButton, {
              [s_selectedExerciseSpeed]: exerciseSpeed === 'SLOW',
            })}
            onClick={handleClickExerciseSpeedButton('SLOW')}
            aria-hidden="true"
          >
            천천히
          </button>
        </label>
        <label htmlFor="MIDDLE">
          <input type="radio" value="MIDDLE" id="MIDDLE" className={classNames(s_a11yHidden)} />
          <button
            type="button"
            className={classNames(s_exerciseSpeedButton, {
              [s_selectedExerciseSpeed]: exerciseSpeed === 'MIDDLE',
            })}
            onClick={handleClickExerciseSpeedButton('MIDDLE')}
            aria-hidden="true"
          >
            보통
          </button>
        </label>
        <label htmlFor="FAST">
          <input type="radio" value="FAST" id="FAST" className={classNames(s_a11yHidden)} />
          <button
            type="button"
            className={classNames(s_exerciseSpeedButton, {
              [s_selectedExerciseSpeed]: exerciseSpeed === 'FAST',
            })}
            onClick={handleClickExerciseSpeedButton('FAST')}
            aria-hidden="true"
          >
            빠르게
          </button>
        </label>
      </div>
      <button
        className={classNames(s_nextButton)}
        type="button"
        onClick={setNextPage}
        disabled={isDisabled}
      >
        다음
      </button>
    </section>
  );
}

export default ExerciseSpeed;
