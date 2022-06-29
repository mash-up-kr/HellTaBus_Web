import { useMutation } from 'react-query';
import { patchUserInfo } from '@/api';
import { SurveyFields, User } from '@/types';

interface Options {
  onSuccess:
    | ((data: User, variables: SurveyFields, context: unknown) => void | Promise<unknown>)
    | undefined;
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
