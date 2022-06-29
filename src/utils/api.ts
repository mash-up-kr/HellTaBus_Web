import { AxiosError } from 'axios';

export const throwErrorMessage = (error: AxiosError) => {
  if (!error.response) throw error;
  throw error.response.data.message;
};
