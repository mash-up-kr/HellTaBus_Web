import React, { Fragment, useState } from 'react';
import classNames from 'classnames';
import useForm from '@/hooks/useSurveyForm';
import style from './survey.module.scss';
import {
  Age,
  Gender,
  Nickname,
  HealthStyle,
  SurveyComplete,
  Intro,
  BodyInfo,
  AudioCoach,
  ExerciseSpeed,
  AudioSpeed,
} from '@/components/Survey';
import ProgressBar from '@/components/Survey/ProgressBar/ProgressBar';
import Header from '@/components/common/Header/Header';

const { s_container } = style;

const SURVEY_STATE_KEY = {
  NICKNAME: 'nickname',
  AGE: 'age',
  GENDER: 'gender',
  HEIGHT: 'height',
  WEIGHT: 'weight',
  HEALTH_STYLE: 'healthStyle',
  AUDIO_COACH: 'audioCoach',
  EXCERCISE_SPEED: 'exerciseSpeed',
  AUDIO_SPEED: 'audioSpeed',
};

const MIN_STEP = 0;
const MAX_STEP = 8;

const Survey = () => {
  const [step, setStep] = useState<number>(MIN_STEP);
  const { surveyState, setSurveyStateByKey } = useForm();

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
    <HealthStyle
      healthStyle={surveyState.healthStyle}
      setHealthStyle={setSurveyStateByKey(SURVEY_STATE_KEY.HEALTH_STYLE)}
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
    <form className={classNames(s_container)}>
      <div>
        <h1 className={classNames('s_a11yHidden')}>회원 정보 설문조사</h1>
        <Header handleClickBackButton={handleSetPreviousPage} />
        <ProgressBar step={step} />
        {surveyComponents.map((surveyComponent, page) => {
          if (step === page) {
            return <Fragment key={`surveySubComponent-${page}`}>{surveyComponent}</Fragment>;
          }
          return null;
        })}
      </div>
    </form>
  );
};

export default Survey;
