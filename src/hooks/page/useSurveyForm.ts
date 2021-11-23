import { useState } from 'react';
import { SurveyState } from '@/types';

const useSurveyForm = () => {
  const initialState = {
    nickname: '',
    gender: '',
    age: 0,
    height: 0,
    weight: 0,
    splitType: '',
    audioCoach: '',
    speed: '',
    explanation: null,
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
