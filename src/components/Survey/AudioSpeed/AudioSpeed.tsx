import React, { useState } from 'react';
import classNames from 'classnames';
import style from './audioSpeed.module.scss';

const {
  s_a11yHidden,
  s_container,
  s_buttonWrapper,
  s_audioSpeedButton,
  s_selectedAudioSpeed,
  s_nextButton,
} = style;

interface Props {
  audioSpeed: number;
  setAudioSpeed: (value: number) => void;
  setNextPage: () => void;
}

const AudioSpeed = ({ audioSpeed, setAudioSpeed, setNextPage }: Props) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(!audioSpeed);

  const handleClickaudioSpeedButton = (userAudioSpeed: number) => () => {
    setAudioSpeed(userAudioSpeed);
    setIsDisabled(false);
  };

  return (
    <section className={classNames(s_container)}>
      <h2>
        <p>
          <span>운동에 대한 설명</span>을
        </p>
        자세히 듣고 싶으신가요?
      </h2>
      <h3>오디오 코치가 하는 설명의 길이가 달라져요</h3>
      <div className={classNames(s_buttonWrapper)}>
        <label htmlFor="0">
          <input type="radio" value="0" id="0" className={classNames(s_a11yHidden)} />
          <button
            type="button"
            className={classNames(s_audioSpeedButton, {
              [s_selectedAudioSpeed]: audioSpeed === 0,
            })}
            onClick={handleClickaudioSpeedButton(0)}
            aria-hidden="true"
          >
            네, 차근차근 설명해주세요
          </button>
        </label>
        <label htmlFor="1">
          <input type="radio" value="1" id="1" className={classNames(s_a11yHidden)} />
          <button
            type="button"
            className={classNames(s_audioSpeedButton, {
              [s_selectedAudioSpeed]: audioSpeed === 1,
            })}
            onClick={handleClickaudioSpeedButton(1)}
            aria-hidden="true"
          >
            아니요, 자세한 설명은 안들을래요
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
};

export default AudioSpeed;
