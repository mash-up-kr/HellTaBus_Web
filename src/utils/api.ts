import { AxiosError } from 'axios';

export const throwErrorMessage = (error: AxiosError) => {
  if (error && error.response) throw error.response.data.message;
};
