import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import Lottie from 'react-lottie';
import style from './surveyComplete.module.scss';
import complete from '@/assets/lottie/complete.json';
import SearchExercise from '../SearchExercise/SearchExercise';
import { SurveyFields } from '@/types';

const { s_container, s_lottieContainer, s_content } = style;

interface Props {
  surveyState: SurveyFields;
  buttonType: string;
}

const SurveyComplete = ({ surveyState, buttonType }: Props) => {
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
          <div className={classNames(s_content)}>
            <span className={classNames('s_whiteSpace')}>
              <span>{surveyState.nickname}님</span>을 위한
            </span>
            운동이 준비됐어요! <span className={classNames('s_whiteSpace')}>시작해 볼까요?</span>
          </div>
          <button type="button">렛츠고!👉</button>
          {/* TODO: 브런치 병합 후, API 연결 예정 */}
          {/* <CustomButton buttonType="lets_go" onClick={} />  */}
        </section>
      )}
    </>
  );
};

export default SurveyComplete;
