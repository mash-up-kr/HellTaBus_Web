import { useMutation } from 'react-query';
import { patchBaseUserInfo } from '@/api';
import { SurveyFields } from '@/types';

const usePatchBaseUserInfo = () => {
  const { mutate, isLoading, error, isError } = useMutation((surveyState: SurveyFields) =>
    patchBaseUserInfo(surveyState)
  );

  console.log(error);

  return {
    mutate,
    isLoading,
    error,
    isError,
    isPatchSuccess: !isLoading && !isError,
  };
};

export default usePatchBaseUserInfo;
