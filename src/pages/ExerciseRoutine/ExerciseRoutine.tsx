import React from 'react';
import style from './exerciseRoutine.module.scss';
import { HistorySection, RecommendSection } from '@/components';
import { Exercise } from '@/types/exercise';
import dumbbellVentOverLow from '@/assets/images/dumbbell-vent-over-low.jpg';

const { s_exerciseRoutine } = style;

// TODO: api를 붙히면 삭제 할 더미데이터
const recommendExerciseList: Exercise[] = [
  { img: dumbbellVentOverLow, name: '덤벨 벤트 오버 로우' },
  { img: dumbbellVentOverLow, name: '덤벨 인크라인 벤치프레스' },
  { img: dumbbellVentOverLow, name: '덤벨 벤트 오버 로우' },
  { img: dumbbellVentOverLow, name: '덤벨 벤트 오버 로우' },
  { img: dumbbellVentOverLow, name: '덤벨 벤트 오버 로우' },
  { img: dumbbellVentOverLow, name: '덤벨 벤트 오버 로우' },
  { img: dumbbellVentOverLow, name: '덤벨 벤트 오버 로우' },
];

function ExerciseRoutine() {
  return (
    <section className={s_exerciseRoutine}>
      <h2 className="s_a11yHidden">헬스 루틴 추천</h2>
      <HistorySection />
      <RecommendSection recommendExerciseList={recommendExerciseList} />
    </section>
  );
}

export default ExerciseRoutine;
