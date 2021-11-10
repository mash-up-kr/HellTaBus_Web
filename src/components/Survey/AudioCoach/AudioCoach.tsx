import React, { useState } from 'react';
import classNames from 'classnames';
import style from './audioCoach.module.scss';

const {
  s_a11yHidden,
  s_container,
  s_buttonWrapper,
  s_audioCoachButton,
  s_selectedAudioCoach,
  s_nextButton,
} = style;

interface Props {
  audioCoach: string;
  setAudioCoach: (value: string) => void;
  setNextPage: () => void;
}

const AudioCoach = ({ audioCoach, setAudioCoach, setNextPage }: Props) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(!audioCoach);

  const handleClickaudioCoachButton = (userAudioCoach: string) => () => {
    setAudioCoach(userAudioCoach);
    setIsDisabled(false);
  };

  return (
    <section className={classNames(s_container)}>
      <h2>
        <p>
          어떤 <span>오디오 코치</span>와
        </p>
        함께 운동하고 싶으신가요?
      </h2>
      <h3>목소리를 들어보면 선택이 더 쉬울거에요!</h3>
      <div className={classNames(s_buttonWrapper)}>
        <label htmlFor="SCARY">
          <input type="radio" value="SCARY" id="SCARY" className={classNames(s_a11yHidden)} />
          <button
            type="button"
            className={classNames(s_audioCoachButton, {
              [s_selectedAudioCoach]: audioCoach === 'SCARY',
            })}
            onClick={handleClickaudioCoachButton('SCARY')}
            aria-hidden="true"
          >
            교관같이 무서운 코치
          </button>
        </label>
        <label htmlFor="COMFORTABLE">
          <input
            type="radio"
            value="COMFORTABLE"
            id="COMFORTABLE"
            className={classNames(s_a11yHidden)}
          />
          <button
            type="button"
            className={classNames(s_audioCoachButton, {
              [s_selectedAudioCoach]: audioCoach === 'COMFORTABLE',
            })}
            onClick={handleClickaudioCoachButton('COMFORTABLE')}
            aria-hidden="true"
          >
            편안하게 운동을 도와주는 코치
          </button>
        </label>
        <label htmlFor="FUNNY">
          <input type="radio" value="FUNNY" id="FUNNY" className={classNames(s_a11yHidden)} />
          <button
            type="button"
            className={classNames(s_audioCoachButton, {
              [s_selectedAudioCoach]: audioCoach === 'FUNNY',
            })}
            onClick={handleClickaudioCoachButton('FUNNY')}
            aria-hidden="true"
          >
            운동을 잘아는 잼민이 코치
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

export default AudioCoach;
