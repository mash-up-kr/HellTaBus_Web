import React, { Fragment, useState } from 'react';
import classNames from 'classnames';
import styles from './survey.module.scss';
import { Age, Gender, Height, Nickname, Split, Weight, Complete } from '@/components/Survey';
import useForm from '@/hooks/useForm';
import ProgressBar from '@/components/Survey/ProgressBar/ProgressBar';
import Header from '@/components/common/Header/Header';

const { s_container, s_a11yHidden } = styles;

const SURVEY_STATE_KEY = {
  NICKNAME: 'nickname',
  AGE: 'age',
  GENDER: 'gender',
  HEIGHT: 'height',
  WEIGHT: 'weight',
  SPLIT: 'split',
};
const MIN_STEP = 1;
const MAX_STEP = 6;

const Survey = () => {
  const { surveyState, setSurveyStateByKey } = useForm();
  const [step, setStep] = useState<number>(MIN_STEP);

  const setPreviousPage = () => {
    if (step <= MIN_STEP) return;
    setStep((previousStep) => previousStep - 1);
  };
  const setNextPage = () => {
    if (step > MAX_STEP) return;
    setStep((previousStep) => previousStep + 1);
  };

  const components = [
    <Nickname
      nickname={surveyState.nickname}
      setNickname={setSurveyStateByKey(SURVEY_STATE_KEY.NICKNAME)}
      setNextPage={setNextPage}
    />,
    <Gender
      nickname={surveyState.nickname}
      gender={surveyState.gender}
      setGender={setSurveyStateByKey(SURVEY_STATE_KEY.GENDER)}
      setNextPage={setNextPage}
    />,
    <Age
      nickname={surveyState.nickname}
      age={surveyState.age}
      setAge={setSurveyStateByKey(SURVEY_STATE_KEY.AGE)}
      setNextPage={setNextPage}
    />,
    <Height
      nickname={surveyState.nickname}
      height={surveyState.height}
      setHeight={setSurveyStateByKey(SURVEY_STATE_KEY.HEIGHT)}
      setNextPage={setNextPage}
    />,
    <Weight
      nickname={surveyState.nickname}
      weight={surveyState.weight}
      setWeight={setSurveyStateByKey(SURVEY_STATE_KEY.WEIGHT)}
      setNextPage={setNextPage}
    />,
    <Split
      split={surveyState.split}
      setSplit={setSurveyStateByKey(SURVEY_STATE_KEY.SPLIT)}
      setNextPage={setNextPage}
    />,
  ];

  return (
    <>
      {step === MAX_STEP ? (
        <Complete />
      ) : (
        <div className={classNames(s_container)}>
          <h1 className={classNames(s_a11yHidden)}>회원 정보 설문조사</h1>
          <Header handleClickBackButton={setPreviousPage} />
          <ProgressBar step={step} />
          {components.map((component, page) => {
            if (step === page + 1) {
              // eslint-disable-next-line react/no-array-index-key
              return <Fragment key={`component-${page}`}>{component}</Fragment>;
            }
            return null;
          })}
        </div>
      )}
    </>
  );
};

export default Survey;
