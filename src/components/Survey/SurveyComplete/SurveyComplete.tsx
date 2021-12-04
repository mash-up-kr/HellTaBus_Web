import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';
import Lottie from 'react-lottie';
import style from './surveyComplete.module.scss';
import complete from '@/assets/lottie/complete.json';
import SearchExercise from '../SearchExercise/SearchExercise';
import { SurveyFields } from '@/types';
import { usePatchUserInfo } from '@/hooks/api';
import { EXERCISE_ROUTINE_PAGE } from '@/consts';

const { s_container, s_lottieContainer, s_content } = style;

interface Props {
  surveyState: SurveyFields;
}

const SurveyComplete = ({ surveyState }: Props) => {
  const history = useHistory();

  const { mutate, isPatchSuccess } = usePatchUserInfo();
  const [dataAnalysisLoading, setDataAnalysisLoading] = useState(true);

  const lottieOptions = {
    animationData: complete,
  };

  useEffect(() => {
    mutate(surveyState);

    const dataAnalysisTimer = setTimeout(() => {
      setDataAnalysisLoading(false);
    }, 2500);

    return () => {
      clearTimeout(dataAnalysisTimer);
    };
  }, [mutate, surveyState]);

  const handleClickSubmitButton: React.MouseEventHandler<HTMLButtonElement> = () => {
    history.push(EXERCISE_ROUTINE_PAGE);
  };

  return (
    <>
      {dataAnalysisLoading || !isPatchSuccess ? (
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
          <button type="button" onClick={handleClickSubmitButton}>
            렛츠고!👉
          </button>
        </section>
      )}
    </>
  );
};

export default SurveyComplete;
