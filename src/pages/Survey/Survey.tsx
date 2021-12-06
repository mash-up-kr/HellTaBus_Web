import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Route, useHistory } from 'react-router-dom';
import { SURVEY_PAGE } from '@/consts';
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

const SURVEY_PAGE_COLLECTION = {
  INTRO: `${SURVEY_PAGE}/intro`,
  NICKNAME: `${SURVEY_PAGE}/nickname`,
  GENDER: `${SURVEY_PAGE}/gender`,
  AGE: `${SURVEY_PAGE}/age`,
  SPLIT_TYPE: `${SURVEY_PAGE}/split-type`,
  BODY_INFO: `${SURVEY_PAGE}/body-info`,
  AUDIO_COACH: `${SURVEY_PAGE}/audio-coach`,
  EXERCISE_SPEED: `${SURVEY_PAGE}/exercise-speed`,
  AUDIO_EXPLANATION: `${SURVEY_PAGE}/audio-explanation`,
  SURVEY_COMPLETE: `${SURVEY_PAGE}/survey-complete`,
};

const MIN_STEP = 0;
const MAX_STEP = 8;

const Survey = () => {
  const history = useHistory();
  const [step, setStep] = useState<number>(MIN_STEP);
  const { surveyState, setSurveyStateByKey } = useSurveyForm();

  const handleSetPreviousPage = () => {
    history.goBack();
  };

  const handleSetNextPage = (nextPageUrl: string) => () => {
    if (step > MAX_STEP) return;

    setStep((previousStep) => previousStep + 1);
    history.push(nextPageUrl);
  };

  useEffect(() => {
    const handleDecreaseStep = () => {
      setStep((previousStep) => previousStep - 1);
    };
    window.addEventListener('popstate', handleDecreaseStep);
    return () => {
      window.removeEventListener('popstate', handleDecreaseStep);
    };
  }, []);

  if (step === 0) {
    return (
      <Intro
        handleClickStartButton={handleSetNextPage(SURVEY_PAGE_COLLECTION.NICKNAME)}
        buttonType="start"
      />
    );
  }

  if (step > MAX_STEP) {
    return (
      <Route path={SURVEY_PAGE_COLLECTION.SURVEY_COMPLETE}>
        <SurveyComplete surveyState={surveyState} buttonType="letsGo" />;
      </Route>
    );
  }
  return (
    <>
      <Header handleClickBackButton={handleSetPreviousPage} />
      <form>
        <div className={classNames(s_componentContainer)}>
          <h1 className={classNames('s_a11yHidden')}>회원 정보 설문조사</h1>
          <ProgressBar step={step} />
          <Route path={SURVEY_PAGE_COLLECTION.NICKNAME}>
            <Nickname
              nickname={surveyState.nickname}
              setNickname={setSurveyStateByKey(SURVEY_STATE_KEY.NICKNAME)}
              handleClickCustomEvent={handleSetNextPage(SURVEY_PAGE_COLLECTION.GENDER)}
              buttonType="next"
            />
          </Route>
          <Route path={SURVEY_PAGE_COLLECTION.GENDER}>
            <Gender
              nickname={surveyState.nickname}
              gender={surveyState.gender}
              setGender={setSurveyStateByKey(SURVEY_STATE_KEY.GENDER)}
              handleClickCustomEvent={handleSetNextPage(SURVEY_PAGE_COLLECTION.AGE)}
              buttonType="next"
            />
          </Route>
          <Route path={SURVEY_PAGE_COLLECTION.AGE}>
            <Age
              nickname={surveyState.nickname}
              age={surveyState.age}
              setAge={setSurveyStateByKey(SURVEY_STATE_KEY.AGE)}
              handleClickCustomEvent={handleSetNextPage(SURVEY_PAGE_COLLECTION.BODY_INFO)}
              buttonType="next"
            />
          </Route>
          <Route path={SURVEY_PAGE_COLLECTION.BODY_INFO}>
            <BodyInfo
              nickname={surveyState.nickname}
              height={surveyState.height}
              setHeight={setSurveyStateByKey(SURVEY_STATE_KEY.HEIGHT)}
              weight={surveyState.weight}
              setWeight={setSurveyStateByKey(SURVEY_STATE_KEY.WEIGHT)}
              handleClickCustomEvent={handleSetNextPage(SURVEY_PAGE_COLLECTION.SPLIT_TYPE)}
              buttonType="next"
            />
          </Route>
          <Route path={SURVEY_PAGE_COLLECTION.SPLIT_TYPE}>
            <SplitType
              splitType={surveyState.splitType}
              setSplitType={setSurveyStateByKey(SURVEY_STATE_KEY.SPLIT_TYPE)}
              handleClickCustomEvent={handleSetNextPage(SURVEY_PAGE_COLLECTION.AUDIO_COACH)}
              buttonType="next"
            />
          </Route>
          <Route path={SURVEY_PAGE_COLLECTION.AUDIO_COACH}>
            <AudioCoach
              audioCoach={surveyState.audioCoach}
              setAudioCoach={setSurveyStateByKey(SURVEY_STATE_KEY.AUDIO_COACH)}
              handleClickCustomEvent={handleSetNextPage(SURVEY_PAGE_COLLECTION.EXERCISE_SPEED)}
              buttonType="next"
            />
          </Route>
          <Route path={SURVEY_PAGE_COLLECTION.EXERCISE_SPEED}>
            <ExerciseSpeed
              exerciseSpeed={surveyState.speed}
              setExerciseSpeed={setSurveyStateByKey(SURVEY_STATE_KEY.SPEED)}
              handleClickCustomEvent={handleSetNextPage(SURVEY_PAGE_COLLECTION.AUDIO_EXPLANATION)}
              buttonType="next"
            />
          </Route>
          <Route path={SURVEY_PAGE_COLLECTION.AUDIO_EXPLANATION}>
            <AudioExplanation
              needDetailExplanation={surveyState.explanation}
              setNeedDetailExplanation={setSurveyStateByKey(SURVEY_STATE_KEY.EXPLANATION)}
              handleClickCustomEvent={handleSetNextPage(SURVEY_PAGE_COLLECTION.SURVEY_COMPLETE)}
              buttonType="complete"
            />
          </Route>
        </div>
      </form>
    </>
  );
};

export default Survey;
