import axios, { AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { HTTP_METHODS } from '@/consts';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://3.38.153.230',
  timeout: 30000,
});

const createApiMethod =
  (_axiosInstance: AxiosInstance, methodType: Method) =>
  (config: AxiosRequestConfig): Promise<any> => {
    _axiosInstance.interceptors.response.use((response) => response.data);

    return _axiosInstance({
      ...config,
      method: methodType,
    });
  };

export const get = createApiMethod(axiosInstance, HTTP_METHODS.GET);
export const post = createApiMethod(axiosInstance, HTTP_METHODS.POST);
export const put = createApiMethod(axiosInstance, HTTP_METHODS.PUT);
export const deleteMethod = createApiMethod(axiosInstance, HTTP_METHODS.DELETE);
