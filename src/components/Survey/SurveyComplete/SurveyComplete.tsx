import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import Lottie from 'react-lottie';
import style from './surveyComplete.module.scss';
import complete from '@/assets/lottie/complete.json';
import SearchExercise from '../SearchExercise/SearchExercise';
import { SurveyState } from '@/types';

const { s_container, s_lottieContainer } = style;

interface Props {
  surveyState: SurveyState;
}

const SurveyComplete = ({ surveyState }: Props) => {
  const [loading, setLoading] = useState(true);

  const lottieOptions = {
    animationData: complete,
  };

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(loadingTimer);
    };
  });

  return (
    <>
      {loading ? (
        <SearchExercise nickname={surveyState.nickname} />
      ) : (
        <section className={classNames(s_container)}>
          <div className={classNames(s_lottieContainer)}>
            <Lottie options={lottieOptions} width={184} height={190} />
          </div>
          <h2>
            <p>
              <span>{surveyState.nickname}님</span>을 위한
            </p>
            운동이 준비됐어요! <p>시작해 볼까요?</p>
          </h2>
          <button type="button">렛츠고!👉</button>
        </section>
      )}
    </>
  );
};

export default SurveyComplete;
