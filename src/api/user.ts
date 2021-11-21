import api from '@/api/core';
import { User } from '@/types';

export const getUserInfo = (): Promise<User> =>
  api
    .get({
      url: '/user/login-info',
    })
    .catch(({ response }) => {
      throw response.data.message;
    });
