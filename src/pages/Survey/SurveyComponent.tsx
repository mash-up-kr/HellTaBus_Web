import React from 'react';
import { SURVEY_STATE_KEY } from '@/consts/keys';
import { SurveyState } from '@/types/Survey/Survey';
import { Age, Gender, Nickname, BodyInfo, Split } from '@/components/survey';

interface Props {
  surveyState: SurveyState;
  setState: (key: string) => (value: string | number) => void;
  setCurrentPage: (page: number) => void;
}

const SurveyComponent = ({ surveyState, setState, setCurrentPage }: Props) => {
  return [
    <Nickname
      nickname={surveyState.nickname}
      setNickname={setState(SURVEY_STATE_KEY.NICKNAME)}
      setCurrentPage={setCurrentPage}
    />,
    <Gender
      nickname={surveyState.nickname}
      gender={surveyState.gender}
      setGender={setState(SURVEY_STATE_KEY.GENDER)}
      setCurrentPage={setCurrentPage}
    />,
    <Age
      nickname={surveyState.nickname}
      setAge={setState(SURVEY_STATE_KEY.AGE)}
      setCurrentPage={setCurrentPage}
    />,
    <BodyInfo
      nickname={surveyState.nickname}
      setHeight={setState(SURVEY_STATE_KEY.HEIGHT)}
      setWeight={setState(SURVEY_STATE_KEY.WEIGHT)}
      setCurrentPage={setCurrentPage}
    />,
    <Split setSplit={setState(SURVEY_STATE_KEY.SPLIT)} setCurrentPage={setCurrentPage} />,
  ];
};

export default SurveyComponent;
