import React from 'react';
import { SURVEY_STATE_KEY } from '@/consts/keys';
import { SurveyState } from '@/consts/types';
import { Age, Gender, Nickname, BodyInfo, Split } from '@/components/survey';

interface Props {
  surveyState: SurveyState;
  setState: (key: string) => (value: string | number) => void;
  setPageCount: (page: number) => void;
}

const SurveyComponent = ({ surveyState, setState, setPageCount }: Props) => {
  return [
    <Nickname
      nickname={surveyState.nickname}
      setNickname={setState(SURVEY_STATE_KEY.NICKNAME)}
      setPageCount={setPageCount}
    />,
    <Gender
      nickname={surveyState.nickname}
      gender={surveyState.gender}
      setGender={setState(SURVEY_STATE_KEY.GENDER)}
      setPageCount={setPageCount}
    />,
    <Age
      nickname={surveyState.nickname}
      setAge={setState(SURVEY_STATE_KEY.AGE)}
      setPageCount={setPageCount}
    />,
    <BodyInfo
      nickname={surveyState.nickname}
      setHeight={setState(SURVEY_STATE_KEY.HEIGHT)}
      setWeight={setState(SURVEY_STATE_KEY.WEIGHT)}
      setPageCount={setPageCount}
    />,
    <Split setSplit={setState(SURVEY_STATE_KEY.SPLIT)} setPageCount={setPageCount} />,
  ];
};

export default SurveyComponent;
