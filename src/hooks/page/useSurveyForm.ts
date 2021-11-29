import { useState } from 'react';
import { SurveyFields } from '@/types';

const useSurveyForm = () => {
  const initialState: SurveyFields = {
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

  const [surveyState, setSurveyState] = useState<SurveyFields>(initialState);

  const setSurveyStateByKey = (key: string) => (value: string | number | boolean) => {
    setSurveyState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return { surveyState, setSurveyStateByKey };
};

export default useSurveyForm;
