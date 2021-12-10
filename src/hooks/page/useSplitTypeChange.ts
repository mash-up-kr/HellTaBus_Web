import { useHistory } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import { useFetchUserInfo, usePatchUserInfo } from '@/hooks';
import { SplitType, User } from '@/types';
import { setBackButtonReceive } from '@/utils/mobile/action';

const useSplitTypeChange = () => {
  const history = useHistory();
  const queryClient = useQueryClient();
  const { error: userInfoError, isError: isUserInfoError, userInfo } = useFetchUserInfo();

  const {
    error: patchUserError,
    isError: isPatchUserError,
    isLoading: isPatchUserInfoLoading,
    mutate,
  } = usePatchUserInfo({
    onSuccess: (data) => {
      queryClient.invalidateQueries('userInfo');

      setBackButtonReceive(
        { target: 'android', isUpdated: true, updatedSplitType: data.splitType },
        (result_cd: string, result_msg: string, extra: JSON) => {
          console.log(result_cd + result_msg + JSON.stringify(extra));
        }
      );
    },
  });

  const patchUserInfo = (splitType: SplitType | '') => {
    if (!userInfo) return;

    const { age, audioCoach, explanation, gender, height, nickname, speed, weight } = userInfo;

    const newUserInfo = {
      age,
      audioCoach,
      explanation,
      gender,
      height,
      nickname,
      speed,
      weight,
      splitType,
    };

    mutate(newUserInfo);
  };

  return {
    error: userInfoError || patchUserError,
    isError: isUserInfoError || isPatchUserError,
    isPatchUserInfoLoading,
    patchUserInfo,
  };
};

export default useSplitTypeChange;
