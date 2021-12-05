import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import Lottie from 'react-lottie';
import style from './surveyComplete.module.scss';
import complete from '@/assets/lottie/complete.json';
import SearchExercise from '../SearchExercise/SearchExercise';
import { SurveyFields } from '@/types';
import { usePatchUserInfo } from '@/hooks/api';
import { HOME_ACTIVITY } from '@/consts';
import { startActivity } from '@/utils/mobile/token';
import { CustomButton } from '@/components';

const { s_container, s_lottieContainer, s_content } = style;

interface Props {
  surveyState: SurveyFields;
  buttonType: string;
}

const SurveyComplete = ({ surveyState, buttonType }: Props) => {
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
    const option = {
      target: HOME_ACTIVITY,
      loadUrl: 'https://helltabus-dev.netlify.app/exercise-routine',
    };

    startActivity(option, (resCodes: string, resMsg: string, resData: JSON) => {
      console.log(resCodes + resMsg + JSON.stringify(resData));
    });
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
          <CustomButton buttonType="lets_go" onClick={handleClickSubmitButton} />
        </section>
      )}
    </>
  );
};

export default SurveyComplete;
