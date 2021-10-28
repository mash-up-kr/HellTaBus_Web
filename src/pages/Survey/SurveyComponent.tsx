import React from 'react';
import { SURVEY_STATE_KEY } from '@/consts/keys';
import { SurveyState } from '@/types/Survey/Survey';
import { Age, Gender, Nickname, Weight, Height, Split } from '@/components/survey';

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
      handleClickNextButton={(prevPage) => setCurrentPage(prevPage + 1)}
    />,
    <Gender
      nickname={surveyState.nickname}
      gender={surveyState.gender}
      setGender={setSurveyStateByKey(SURVEY_STATE_KEY.GENDER)}
      handleClickNextButton={(prevPage) => setCurrentPage(prevPage + 1)}
    />,
    <Age
      nickname={surveyState.nickname}
      setAge={setSurveyStateByKey(SURVEY_STATE_KEY.AGE)}
      handleClickNextButton={(prevPage) => setCurrentPage(prevPage + 1)}
    />,
    <Weight
      nickname={surveyState.nickname}
      setWeight={setSurveyStateByKey(SURVEY_STATE_KEY.WEIGHT)}
      handleClickNextButton={(prevPage) => setCurrentPage(prevPage + 1)}
    />,
    <Height
      nickname={surveyState.nickname}
      setHeight={setSurveyStateByKey(SURVEY_STATE_KEY.WEIGHT)}
      handleClickNextButton={(prevPage) => setCurrentPage(prevPage + 1)}
    />,
    <Split
      setSplit={setSurveyStateByKey(SURVEY_STATE_KEY.SPLIT)}
      handleClickNextButton={(prevPage) => setCurrentPage(prevPage + 1)}
    />,
  ];
};

export default SurveyComponent;
