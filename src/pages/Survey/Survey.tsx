import React, { Fragment, useState } from 'react';
import classNames from 'classnames';
import useSurveyForm from '@/hooks/page/useSurveyForm';
import style from './survey.module.scss';
import {
  Age,
  Gender,
  Nickname,
  SplitType,
  SurveyComplete,
  Intro,
  BodyInfo,
  AudioCoach,
  ExerciseSpeed,
  AudioSpeed,
} from '@/components/Survey';
import ProgressBar from '@/components/Survey/ProgressBar/ProgressBar';
import Header from '@/components/common/Header/Header';

const { s_entireContainer, s_componentContainer } = style;

const SURVEY_STATE_KEY = {
  NICKNAME: 'nickname',
  AGE: 'age',
  GENDER: 'gender',
  HEIGHT: 'height',
  WEIGHT: 'weight',
  SPLIT_TYPE: 'splitType',
  AUDIO_COACH: 'audioCoach',
  EXCERCISE_SPEED: 'exerciseSpeed',
  AUDIO_SPEED: 'audioSpeed',
};

const MIN_STEP = 8;
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
    <Intro handleClickStartButton={handleSetNextPage} />,
    <Nickname
      nickname={surveyState.nickname}
      setNickname={setSurveyStateByKey(SURVEY_STATE_KEY.NICKNAME)}
      handleSetNextPage={handleSetNextPage}
    />,
    <Gender
      nickname={surveyState.nickname}
      gender={surveyState.gender}
      setGender={setSurveyStateByKey(SURVEY_STATE_KEY.GENDER)}
      handleSetNextPage={handleSetNextPage}
    />,
    <Age
      nickname={surveyState.nickname}
      age={surveyState.age}
      setAge={setSurveyStateByKey(SURVEY_STATE_KEY.AGE)}
      handleSetNextPage={handleSetNextPage}
    />,
    <BodyInfo
      nickname={surveyState.nickname}
      height={surveyState.height}
      setHeight={setSurveyStateByKey(SURVEY_STATE_KEY.HEIGHT)}
      weight={surveyState.weight}
      setWeight={setSurveyStateByKey(SURVEY_STATE_KEY.WEIGHT)}
      handleSetNextPage={handleSetNextPage}
    />,
    <SplitType
      splitType={surveyState.splitType}
      setSplitType={setSurveyStateByKey(SURVEY_STATE_KEY.SPLIT_TYPE)}
      handleSetNextPage={handleSetNextPage}
    />,
    <AudioCoach
      audioCoach={surveyState.audioCoach}
      setAudioCoach={setSurveyStateByKey(SURVEY_STATE_KEY.AUDIO_COACH)}
      handleSetNextPage={handleSetNextPage}
    />,
    <ExerciseSpeed
      exerciseSpeed={surveyState.exerciseSpeed}
      setExerciseSpeed={setSurveyStateByKey(SURVEY_STATE_KEY.EXCERCISE_SPEED)}
      handleSetNextPage={handleSetNextPage}
    />,
    <AudioSpeed
      audioSpeed={surveyState.audioSpeed}
      setAudioSpeed={setSurveyStateByKey(SURVEY_STATE_KEY.AUDIO_SPEED)}
      handleSetNextPage={handleSetNextPage}
    />,
  ];

  if (step === 0) return <Intro handleClickStartButton={handleSetNextPage} />;
  if (step > MAX_STEP) return <SurveyComplete nickname={surveyState.nickname} />;

  return (
    <form className={classNames(s_entireContainer)}>
      <Header handleClickBackButton={handleSetPreviousPage} />
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
  );
};

export default Survey;
