import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { patchUserInfo } from '@/api';
import { SurveyFields } from '@/types';

const usePatchUserInfo = () => {
  const { mutate, isLoading, error, isError } = useMutation(
    (surveyState: SurveyFields) => patchUserInfo(surveyState),
    {
      onSuccess: () => {
        // TODO: 안드팀에 토큰 보내주기
      },
      onError: (Error) => {
        // TODO: 에러화면 보여주기
        console.log(Error);
      },
    }
  );
  return {
    mutate,
    isLoading,
    error,
    isError,
    isPatchSuccess: !isLoading && !isError,
  };
};

export default usePatchUserInfo;
