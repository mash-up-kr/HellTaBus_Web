import React from 'react';
import style from './exerciseRoutine.module.scss';
import { HistorySection, RecommendSection } from '@/components';
import { useExerciseRoutine } from '@/hooks';
import Setting from '@/assets/svg/setting.svg';
import Calendar from '@/assets/svg/calendar.svg';

const { s_exerciseRoutine, s_navigator } = style;

function ExerciseRoutine() {
  const { suggestion, exerciseHistory, userInfo } = useExerciseRoutine();
  const { suggestionExerciseList, suggestionPartList } = suggestion;

  return (
    <section className={s_exerciseRoutine}>
      <h2 className="s_a11yHidden">헬스 루틴 추천</h2>
      <nav className={s_navigator}>
        <button type="button">
          <Calendar width="20" height="20" />
        </button>
        <button type="button">
          <Setting width="20" height="20" />
        </button>
      </nav>
      <HistorySection exerciseHistory={exerciseHistory} />
      <RecommendSection
        // TODO: SpitTypeKey consts객체가 merge되면 상수값으로 수정
        splitType={userInfo?.splitType ?? 'FULL_BODY_WORKOUT'}
        suggestionExerciseList={suggestionExerciseList}
        suggestionPartList={suggestionPartList}
      />
    </section>
  );
}

export default ExerciseRoutine;
