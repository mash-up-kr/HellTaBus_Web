import { useState } from 'react';

interface SurveyState {
  nickname: string;
  gender: string;
  age: number;
  height: number;
  weight: number;
  splitType: string;
  audioCoach: string;
  exerciseSpeed: string;
  audioSpeed: number;
}

const useSurveyForm = () => {
  const initialState = {
    nickname: '',
    gender: '',
    age: 0,
    height: 0,
    weight: 0,
    splitType: '',
    audioCoach: '',
    exerciseSpeed: '',
    audioSpeed: 2,
  };
  const [surveyState, setSurveyState] = useState<SurveyState>(initialState);

  const setSurveyStateByKey = (key: string) => (value: string | number) => {
    setSurveyState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return { surveyState, setSurveyStateByKey };
};

export default useSurveyForm;
