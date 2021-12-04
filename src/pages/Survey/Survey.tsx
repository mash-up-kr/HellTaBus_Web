import React, { Fragment, useState } from 'react';
import classNames from 'classnames';
import {
  Header,
  Age,
  Gender,
  Nickname,
  SplitType,
  SurveyComplete,
  Intro,
  BodyInfo,
  AudioCoach,
  ExerciseSpeed,
  AudioExplanation,
  ProgressBar,
} from '@/components';
import { useSurveyForm } from '@/hooks';
import style from './survey.module.scss';

const { s_componentContainer } = style;

const SURVEY_STATE_KEY = {
  NICKNAME: 'nickname',
  AGE: 'age',
  GENDER: 'gender',
  HEIGHT: 'height',
  WEIGHT: 'weight',
  SPLIT_TYPE: 'splitType',
  AUDIO_COACH: 'audioCoach',
  SPEED: 'speed',
  EXPLANATION: 'explanation',
};

const MIN_STEP = 0;
const MAX_STEP = 8;

const Survey = () => {
  const [step, setStep] = useState<number>(MIN_STEP);
  const { surveyState, setSurveyStateByKey } = useSurveyForm();

  const handleSetPreviousPage = () => {
    if (step <= MIN_STEP) return;
    setStep((previousStep) => previousStep - 1);
  };
  const handleSetNextPage = () => {
    if (step > MAX_STEP) return;
    setStep((previousStep) => previousStep + 1);
  };

  const surveyComponents = [
    // TODO: 버튼타입을 범용적으로 쓸 수 있도록 변경 예정
    <Intro handleClickStartButton={handleSetNextPage} buttonType="submit" />,
    <Nickname
      nickname={surveyState.nickname}
      setNickname={setSurveyStateByKey(SURVEY_STATE_KEY.NICKNAME)}
      handleClickCustomEvent={handleSetNextPage}
      buttonType="button"
    />,
    <Gender
      nickname={surveyState.nickname}
      gender={surveyState.gender}
      setGender={setSurveyStateByKey(SURVEY_STATE_KEY.GENDER)}
      handleClickCustomEvent={handleSetNextPage}
      buttonType="button"
    />,
    <Age
      nickname={surveyState.nickname}
      age={surveyState.age}
      setAge={setSurveyStateByKey(SURVEY_STATE_KEY.AGE)}
      handleClickCustomEvent={handleSetNextPage}
      buttonType="button"
    />,
    <BodyInfo
      nickname={surveyState.nickname}
      height={surveyState.height}
      setHeight={setSurveyStateByKey(SURVEY_STATE_KEY.HEIGHT)}
      weight={surveyState.weight}
      setWeight={setSurveyStateByKey(SURVEY_STATE_KEY.WEIGHT)}
      handleClickCustomEvent={handleSetNextPage}
      buttonType="button"
    />,
    <SplitType
      splitType={surveyState.splitType}
      setSplitType={setSurveyStateByKey(SURVEY_STATE_KEY.SPLIT_TYPE)}
      handleClickCustomEvent={handleSetNextPage}
      buttonType="button"
    />,
    <AudioCoach
      audioCoach={surveyState.audioCoach}
      setAudioCoach={setSurveyStateByKey(SURVEY_STATE_KEY.AUDIO_COACH)}
      handleClickCustomEvent={handleSetNextPage}
      buttonType="button"
    />,
    <ExerciseSpeed
      exerciseSpeed={surveyState.speed}
      setExerciseSpeed={setSurveyStateByKey(SURVEY_STATE_KEY.SPEED)}
      handleClickCustomEvent={handleSetNextPage}
      buttonType="button"
    />,
    <AudioExplanation
      needDetailExplanation={surveyState.explanation}
      setNeedDetailExplanation={setSurveyStateByKey(SURVEY_STATE_KEY.EXPLANATION)}
      handleClickCustomEvent={handleSetNextPage}
      buttonType="button"
    />,
  ];

  if (step === 0) return <Intro handleClickStartButton={handleSetNextPage} buttonType="submit" />;
  if (step > MAX_STEP) return <SurveyComplete surveyState={surveyState} />;

  return (
    <>
      <Header handleClickBackButton={handleSetPreviousPage} />
      <form>
        <div className={classNames(s_componentContainer)}>
          <h1 className={classNames('s_a11yHidden')}>회원 정보 설문조사</h1>
          <ProgressBar step={step} />
          {surveyComponents.map((surveyComponent, page) => {
            if (step === page) {
              return <Fragment key={`surveyComponent-${page}`}>{surveyComponent}</Fragment>;
            }
            return null;
          })}
        </div>
      </form>
    </>
  );
};

export default Survey;
