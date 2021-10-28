import { useState } from 'react';
import { SurveyState } from '@/types/Survey/Survey';

interface Props {
  initialState: SurveyState;
}

const useForm = ({ initialState }: Props) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [surveyState, setSurveyState] = useState<SurveyState>(initialState);

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
