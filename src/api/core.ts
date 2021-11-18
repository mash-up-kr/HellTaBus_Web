import axios, { AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { HTTP_METHODS } from '@/consts';
import getServerToken from '@/utils/mobile/token';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://3.38.153.230',
  timeout: 10000,
});

getServerToken({}, (statusCode: number, msg: string, response: string) => {
  const responseObj: { serverToken: string } = JSON.parse(response);
  const authToken = responseObj.serverToken;
  console.log(authToken);
  axiosInstance.defaults.headers.common.Authorization = authToken ?? '';
});

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

export default {
  get: createApiMethod(axiosInstance, HTTP_METHODS.GET),
  post: createApiMethod(axiosInstance, HTTP_METHODS.POST),
  patch: createApiMethod(axiosInstance, HTTP_METHODS.PATCH),
  put: createApiMethod(axiosInstance, HTTP_METHODS.PUT),
  delete: createApiMethod(axiosInstance, HTTP_METHODS.DELETE),
};
