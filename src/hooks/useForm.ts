import { useState } from 'react';
import { SurveyState } from '@/types/Survey/Survey';

interface Props {
  SURVEY_INITIALSTATE: SurveyState;
}

const useForm = ({ SURVEY_INITIALSTATE }: Props) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [surveyState, setSurveyState] = useState<SurveyState>(SURVEY_INITIALSTATE);

  const setState = (key: string) => (value: string | number) => {
    setSurveyState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return {
    currentPage,
    surveyState,
    setState,
    setCurrentPage,
  };
};

export default useForm;
