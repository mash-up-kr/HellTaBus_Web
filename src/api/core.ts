import axios, { AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { HTTP_METHODS } from '@/consts';
import getServerToken from '@/utils/mobile/token';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://api.helltabus.com',
  timeout: 10000,
});

// if (process.env.NODE_ENV === 'production') {
//   getServerToken().then((authToken) => {
//     axiosInstance.defaults.headers.common.Authorization = authToken;
//   });
// }

// if (process.env.NODE_ENV === 'development') {
axiosInstance.defaults.headers.common.Authorization =
  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJTYW5naGVlIiwiaWF0IjoxNjM2NTU5Mzk5LCJleHAiOjE2NjgwOTUzOTgsImF1ZCI6Ind3dy5leGFtcGxlLmNvbSIsInN1YiI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJ1c2VySWQiOiIxIiwiRW1haWwiOiJ0ZXN0QHRlc3QuY29tIn0.bPS8-InJf3eNcFQ3iZ_KwQrnYijRdZrN9gMkh8aLEsoEPBhEpSL8AmyTVnzEWND-YDyCaUUBx6v_0EIASz6gmA';
// }

const createApiMethod =
  (_axiosInstance: AxiosInstance, methodType: Method) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (config: AxiosRequestConfig): Promise<any> => {
    _axiosInstance.interceptors.response.use((response) => {
      if (!response.data) return response;
      return response.data.data;
    });

    return _axiosInstance({
      ...config,
      method: methodType,
    });
  };

export default {
  get: createApiMethod(axiosInstance, HTTP_METHODS.GET),
  post: createApiMethod(axiosInstance, HTTP_METHODS.POST),
  patch: createApiMethod(axiosInstance, HTTP_METHODS.PATCH),
  put: createApiMethod(axiosInstance, HTTP_METHODS.PUT),
  delete: createApiMethod(axiosInstance, HTTP_METHODS.DELETE),
};
