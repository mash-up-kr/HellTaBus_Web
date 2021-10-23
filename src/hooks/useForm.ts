import { useState } from 'react';
import { SurveyState } from '@/consts/types';

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

  const setPageCount = (newPageCount: number) => {
    setCurrentPage(newPageCount);
  };

  return {
    currentPage,
    surveyState,
    setState,
    setPageCount,
  };
};

export default useForm;
