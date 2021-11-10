import React from 'react';
import style from './exerciseRoutine.module.scss';
import { HistorySection, RecommendSection } from '@/components';
import { Exercise } from '@/types';
import Setting from '@/assets/svg/setting.svg';
import Calendar from '@/assets/svg/calendar.svg';
import dumbbellVentOverLow from '@/assets/images/dumbbell-vent-over-low.jpg';

const { s_exerciseRoutine, s_navigator } = style;

// TODO: api를 붙히면 삭제 할 더미데이터
const recommendExerciseList: Exercise[] = [
  {
    imageLink: dumbbellVentOverLow,
    name: '덤벨 벤트 오버 로우',
    id: 0,
    priority: 0,
    part: '',
    baseCount: 0,
    setCount: 0,
    startWeight: 0,
    changeWeight: 0,
    setBreakTime: 0,
    breakTime: 0,
  },
  {
    imageLink: dumbbellVentOverLow,
    name: '덤벨 인크라인 벤치프레스',
    id: 0,
    priority: 0,
    part: '',
    baseCount: 0,
    setCount: 0,
    startWeight: 0,
    changeWeight: 0,
    setBreakTime: 0,
    breakTime: 0,
  },
  {
    imageLink: dumbbellVentOverLow,
    name: '덤벨 벤트 오버 로우',
    id: 0,
    priority: 0,
    part: '',
    baseCount: 0,
    setCount: 0,
    startWeight: 0,
    changeWeight: 0,
    setBreakTime: 0,
    breakTime: 0,
  },
  {
    imageLink: dumbbellVentOverLow,
    name: '덤벨 벤트 오버 로우',
    id: 0,
    priority: 0,
    part: '',
    baseCount: 0,
    setCount: 0,
    startWeight: 0,
    changeWeight: 0,
    setBreakTime: 0,
    breakTime: 0,
  },
  {
    imageLink: dumbbellVentOverLow,
    name: '덤벨 벤트 오버 로우',
    id: 0,
    priority: 0,
    part: '',
    baseCount: 0,
    setCount: 0,
    startWeight: 0,
    changeWeight: 0,
    setBreakTime: 0,
    breakTime: 0,
  },
  {
    imageLink: dumbbellVentOverLow,
    name: '덤벨 벤트 오버 로우',
    id: 0,
    priority: 0,
    part: '',
    baseCount: 0,
    setCount: 0,
    startWeight: 0,
    changeWeight: 0,
    setBreakTime: 0,
    breakTime: 0,
  },
  {
    imageLink: dumbbellVentOverLow,
    name: '덤벨 벤트 오버 로우',
    id: 0,
    priority: 0,
    part: '',
    baseCount: 0,
    setCount: 0,
    startWeight: 0,
    changeWeight: 0,
    setBreakTime: 0,
    breakTime: 0,
  },
];

function ExerciseRoutine() {
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
      <RecommendSection recommendExerciseList={recommendExerciseList} />
    </section>
  );
}

export default ExerciseRoutine;
