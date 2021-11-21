import React from 'react';
import style from './exerciseRoutine.module.scss';
import { HistorySection, RecommendSection } from '@/components';
import { Exercise, ExercisePart } from '@/types';
import { useFetchExerciseSuggestion } from '@/hooks';
import Setting from '@/assets/svg/setting.svg';
import Calendar from '@/assets/svg/calendar.svg';

const { s_exerciseRoutine, s_navigator } = style;

function ExerciseRoutine() {
  const { suggestion } = useFetchExerciseSuggestion();
  const exercisePartList = suggestion?.suggestionPartList as ExercisePart;
  const recommendExerciseList = suggestion?.suggestionExerciseList as Exercise[];

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
      <HistorySection />
      <RecommendSection recommendExerciseList={recommendExerciseList} partList={exercisePartList} />
    </section>
  );
}

export default ExerciseRoutine;
