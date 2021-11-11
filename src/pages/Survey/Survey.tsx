import React, { Fragment, useState } from 'react';
import classNames from 'classnames';
import useForm from '@/hooks/useSurveyForm';
import style from './survey.module.scss';
import {
  Age,
  Gender,
  Nickname,
  Split,
  SurveyComplete,
  Intro,
  BodyInfo,
  AudioCoach,
  ExerciseSpeed,
  AudioSpeed,
} from '@/components/Survey';
import ProgressBar from '@/components/Survey/ProgressBar/ProgressBar';
import Header from '@/components/common/Header/Header';

const { s_container, s_a11yHidden } = style;

const SURVEY_STATE_KEY = {
  NICKNAME: 'nickname',
  AGE: 'age',
  GENDER: 'gender',
  HEIGHT: 'height',
  WEIGHT: 'weight',
  SPLIT: 'split',
  AUDIOCOACH: 'audioCoach',
  EXCERCISESPEED: 'exerciseSpeed',
  AUDIOSPEED: 'audioSpeed',
};

const MIN_STEP = 0;
const MAX_STEP = 8;

const Survey = () => {
  const [step, setStep] = useState<number>(MIN_STEP);
  const { surveyState, setSurveyStateByKey } = useForm();

  const setPreviousPage = () => {
    if (step <= MIN_STEP) return;
    setStep((previousStep) => previousStep - 1);
  };
  const setNextPage = () => {
    if (step > MAX_STEP) return;
    setStep((previousStep) => previousStep + 1);
  };

  const components = [
    <Intro handleClickStartButton={setNextPage} />,
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
    <BodyInfo
      nickname={surveyState.nickname}
      height={surveyState.height}
      setHeight={setSurveyStateByKey(SURVEY_STATE_KEY.HEIGHT)}
      weight={surveyState.weight}
      setWeight={setSurveyStateByKey(SURVEY_STATE_KEY.WEIGHT)}
      setNextPage={setNextPage}
    />,
    <Split
      split={surveyState.split}
      setSplit={setSurveyStateByKey(SURVEY_STATE_KEY.SPLIT)}
      setNextPage={setNextPage}
    />,
    <AudioCoach
      audioCoach={surveyState.audioCoach}
      setAudioCoach={setSurveyStateByKey(SURVEY_STATE_KEY.AUDIOCOACH)}
      setNextPage={setNextPage}
    />,
    <ExerciseSpeed
      exerciseSpeed={surveyState.exerciseSpeed}
      setExerciseSpeed={setSurveyStateByKey(SURVEY_STATE_KEY.EXCERCISESPEED)}
      setNextPage={setNextPage}
    />,
    <AudioSpeed
      audioSpeed={surveyState.audioSpeed}
      setAudioSpeed={setSurveyStateByKey(SURVEY_STATE_KEY.AUDIOSPEED)}
      setNextPage={setNextPage}
    />,
  ];

  if (step === 0) return <Intro handleClickStartButton={setNextPage} />;
  if (step === MAX_STEP) return <SurveyComplete nickname={surveyState.nickname} />;

  return (
    <>
      <form className={classNames(s_container)}>
        <div>
          <h1 className={classNames(s_a11yHidden)}>회원 정보 설문조사</h1>
          <Header handleClickBackButton={setPreviousPage} />
          <ProgressBar step={step} />
          {components.map((component, page) => {
            if (step === page) {
              return <Fragment key={`component-${page}`}>{component}</Fragment>;
            }
            return null;
          })}
        </div>
      </form>
    </>
  );
};

export default Survey;
