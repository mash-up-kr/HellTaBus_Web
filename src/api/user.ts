import { AxiosError } from 'axios';
import api from '@/api/core';
import { User } from '@/types';
import { throwErrorMessage } from '@/utils';

export const getUserInfo = (): Promise<User> =>
  api
    .get({
      url: '/user/login-info',
    })
    .catch(throwErrorMessage);
