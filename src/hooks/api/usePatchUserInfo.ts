import { useMutation } from 'react-query';
import { patchUserInfo } from '@/api';
import { SurveyFields } from '@/types';

interface Options {
  onSuccess: () => void;
}

const usePatchUserInfo = ({ onSuccess }: Options) => {
  const { mutate, isLoading, error, isError } = useMutation(
    (surveyState: SurveyFields) => patchUserInfo(surveyState),
    {
      onSuccess,
    }
  );

  console.log(error);

  return {
    mutate,
    isLoading,
    error,
    isError,
  };
};

export default usePatchUserInfo;
