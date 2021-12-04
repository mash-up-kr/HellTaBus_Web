import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { patchUserInfo } from '@/api';
import { SurveyFields } from '@/types';

const usePatchUserInfo = () => {
  const { mutate, isLoading, error, isError } = useMutation((surveyState: SurveyFields) =>
    patchUserInfo(surveyState)
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

export default usePatchUserInfo;
