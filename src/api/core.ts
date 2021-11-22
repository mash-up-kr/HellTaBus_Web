import axios, { AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { HTTP_METHODS } from '@/consts';
import getServerToken from '@/utils/mobile/token';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://api.helltabus.com',
  timeout: 10000,
});

if (process.env.NODE_ENV === 'production') {
  getServerToken().then((authToken) => {
    axiosInstance.defaults.headers.common.Authorization = authToken;
  });
}

if (process.env.NODE_ENV === 'development') {
  axiosInstance.defaults.headers.common.Authorization = process.env.DUMMY_TOKEN ?? '';
}

const createApiMethod =
  (_axiosInstance: AxiosInstance, methodType: Method) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (config: AxiosRequestConfig): Promise<any> => {
    _axiosInstance.interceptors.response.use((response) => response.data.data);

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
