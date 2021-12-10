import { useQuery } from 'react-query';
import { getUserInfo } from '@/api';
import { User } from '@/types';

const useFetchUserInfo = () => {
  const { isLoading, error, isError, data } = useQuery<User, Error>(
    'userInfo',
    () => getUserInfo(),
    {
      staleTime: 1000 * 60 * 60 * 6, // 6시간
      retry: 1,
      keepPreviousData: true,
    }
  );

  return {
    isLoading,
    error,
    isError,
    userInfo: data,
  };
};

export default useFetchUserInfo;
