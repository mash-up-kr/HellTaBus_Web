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
      {/* TODO: 오디오 코치 쪽에서 필요한 보조 메세지가 입력됨 -> 다음 commit 시에 수정 할 것! */}
      <h3>목소리를 들어보면 선택이 더 쉬울거에요!</h3>
      <div className={classNames(s_buttonWrapper)}>
        <label htmlFor="slow">
          <input type="radio" value="slow" id="slow" className={classNames(s_a11yHidden)} />
          <button
            type="button"
            className={classNames(s_exerciseSpeedButton, {
              [s_selectedExerciseSpeed]: exerciseSpeed === 'slow',
            })}
            onClick={handleClickExerciseSpeedButton('slow')}
            aria-hidden="true"
          >
            천천히
          </button>
        </label>
        <label htmlFor="middle">
          <input type="radio" value="middle" id="middle" className={classNames(s_a11yHidden)} />
          <button
            type="button"
            className={classNames(s_exerciseSpeedButton, {
              [s_selectedExerciseSpeed]: exerciseSpeed === 'middle',
            })}
            onClick={handleClickExerciseSpeedButton('middle')}
            aria-hidden="true"
          >
            보통
          </button>
        </label>
        <label htmlFor="fast">
          <input type="radio" value="fast" id="fast" className={classNames(s_a11yHidden)} />
          <button
            type="button"
            className={classNames(s_exerciseSpeedButton, {
              [s_selectedExerciseSpeed]: exerciseSpeed === 'fast',
            })}
            onClick={handleClickExerciseSpeedButton('fast')}
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
