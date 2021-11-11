import axios, { AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { HTTP_METHODS } from '@/consts';
import { DUMMY_TOKEN, API_URL } from '@/config';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

axiosInstance.defaults.headers.common.Authorization = DUMMY_TOKEN;

const createApiMethod =
  (_axiosInstance: AxiosInstance, methodType: Method) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (config: AxiosRequestConfig): Promise<any> => {
    _axiosInstance.interceptors.response.use((response) => response.data);

    return _axiosInstance({
      ...config,
      method: methodType,
    });
  };

const getMethod = createApiMethod(axiosInstance, HTTP_METHODS.GET);
const postMethod = createApiMethod(axiosInstance, HTTP_METHODS.POST);
const putMethod = createApiMethod(axiosInstance, HTTP_METHODS.PUT);
const deleteMethod = createApiMethod(axiosInstance, HTTP_METHODS.DELETE);

export default {
  get: getMethod,
  post: postMethod,
  put: putMethod,
  delete: deleteMethod,
};
