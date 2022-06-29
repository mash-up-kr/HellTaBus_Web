import api from '@/api/core';
import { User, SurveyFields } from '@/types';
import { throwErrorMessage } from '@/utils';

export const getUserInfo = (): Promise<User> =>
  api
    .get({
      url: '/user/login-info',
    })
    .catch(throwErrorMessage);

export const patchBaseUserInfo = (userInfo: SurveyFields) =>
  api
    .patch({
      url: '/user/my/base-information',
      data: userInfo,
    })
    .catch(throwErrorMessage);

export const patchUserInfo = (userInfo: SurveyFields) =>
  api
    .patch({
      url: '/user/my',
      data: userInfo,
    })
    .catch(throwErrorMessage);
