import React from 'react';
import { SURVEY_STATE_KEY } from '@/consts/keys';
import { SurveyState } from '@/types/Survey/Survey';
import { Age, Gender, Nickname, BodyInfo, Split } from '@/components/survey';

interface Props {
  surveyState: SurveyState;
  setSurveyStateByKey: (key: string) => (value: string | number) => void;
  setCurrentPage: (page: number) => void;
}

const SurveyComponent = ({ surveyState, setSurveyStateByKey, setCurrentPage }: Props) => {
  return [
    <Nickname
      nickname={surveyState.nickname}
      setNickname={setSurveyStateByKey(SURVEY_STATE_KEY.NICKNAME)}
      setCurrentPage={setCurrentPage}
    />,
    <Gender
      nickname={surveyState.nickname}
      gender={surveyState.gender}
      setGender={setSurveyStateByKey(SURVEY_STATE_KEY.GENDER)}
      setCurrentPage={setCurrentPage}
    />,
    <Age
      nickname={surveyState.nickname}
      setAge={setSurveyStateByKey(SURVEY_STATE_KEY.AGE)}
      setCurrentPage={setCurrentPage}
    />,
    <BodyInfo
      nickname={surveyState.nickname}
      setHeight={setSurveyStateByKey(SURVEY_STATE_KEY.HEIGHT)}
      setWeight={setSurveyStateByKey(SURVEY_STATE_KEY.WEIGHT)}
      setCurrentPage={setCurrentPage}
    />,
    <Split
      setSplit={setSurveyStateByKey(SURVEY_STATE_KEY.SPLIT)}
      setCurrentPage={setCurrentPage}
    />,
  ];
};

export default SurveyComponent;
