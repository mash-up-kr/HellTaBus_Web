import React from 'react';
import style from './exerciseRoutine.module.scss';
import { HistorySection, RecommendSection } from '@/components';
import { useExerciseRoutine } from '@/hooks';
import Setting from '@/assets/svg/setting.svg';
import Calendar from '@/assets/svg/calendar.svg';
import { startActivity } from '@/utils/mobile/token';
import { HISTORY_ACTIVITY, SETTING_ACTIVITY } from '@/consts';

const { s_exerciseRoutine, s_navigator } = style;

const ExerciseRoutine = () => {
  const { suggestion, exerciseHistory, userInfo } = useExerciseRoutine();
  const { suggestionExerciseList, suggestionPartList } = suggestion;

  const handleOpenSettingActivity: React.MouseEventHandler<HTMLButtonElement> = () => {
    const option = {
      target: SETTING_ACTIVITY,
    };
    startActivity(option, (resCodes: string, resMsg: string, resData: JSON) => {
      console.log(resCodes + resMsg + JSON.stringify(resData));
    });
  };

  const handleOpenHistoryActivity: React.MouseEventHandler<HTMLButtonElement> = () => {
    const option = {
      target: HISTORY_ACTIVITY,
    };
    startActivity(option, (resCodes: string, resMsg: string, resData: JSON) => {
      console.log(resCodes + resMsg + JSON.stringify(resData));
    });
  };

  return (
    <section className={s_exerciseRoutine}>
      <h2 className="s_a11yHidden">헬스 루틴 추천</h2>
      <nav className={s_navigator}>
        <button type="button" onClick={handleOpenHistoryActivity}>
          <Calendar width="20" height="20" />
        </button>
        <button type="button" onClick={handleOpenSettingActivity}>
          <Setting width="20" height="20" />
        </button>
      </nav>
      <HistorySection exerciseHistory={exerciseHistory} nickname={userInfo?.nickname ?? ''} />
      <RecommendSection
        // TODO: SpitTypeKey consts객체가 merge되면 상수값으로 수정
        splitType={userInfo?.splitType ?? 'FULL_BODY_WORKOUT'}
        suggestionExerciseList={suggestionExerciseList}
        suggestionPartList={suggestionPartList}
      />
    </section>
  );
};

export default ExerciseRoutine;
