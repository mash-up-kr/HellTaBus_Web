import React, { useState } from 'react';
import classNames from 'classnames';
import style from './healthStyle.module.scss';
import Workout from '@/components/Survey/Workout/Workout';
import FullBodyWorkout from '@/assets/svg/full-body-workout.svg';
import ThreeBodyWorkout from '@/assets/svg/three-body-workout.svg';
import FiveBodyWorkout from '@/assets/svg/five-body-workout.svg';

const { s_container, s_imagesContainer, s_title, s_nextButton } = style;

interface Props {
  healthStyle: string;
  setHealthStyle: (value: string) => void;
  setNextPage: () => void;
}

function HealthStyle({ healthStyle, setHealthStyle, setNextPage }: Props) {
  const [isDisabled, setIsDisabled] = useState<boolean>(!healthStyle);

  const handleClickHealthStyle = (userHealthStyle: string) => {
    setHealthStyle(userHealthStyle);
    setIsDisabled(false);
  };

  return (
    <section className={classNames(s_container)}>
      <h2 className={classNames(s_title)}>몇 분할로 운동을 원하시나요?</h2>
      <div className={classNames(s_imagesContainer)}>
        <Workout
          selectedHealthStyle={healthStyle}
          currentHealthStyle="FullBodyWorkout"
          imageComponent={<FullBodyWorkout />}
          title="무분할"
          handleClickHealthStyle={handleClickHealthStyle}
        >
          가슴, 어깨, 팔, 등, 하체를 하루에 운동하는 방법으로 초보자에게 추천합니다.
        </Workout>
        <Workout
          selectedHealthStyle={healthStyle}
          currentHealthStyle="ThreeBodyWorkout"
          imageComponent={<ThreeBodyWorkout />}
          title="3분할"
          handleClickHealthStyle={handleClickHealthStyle}
        >
          가슴, 이두 / 등, 삼두/ 하체, 어깨로 3개 부위로 나눠서 운동하는 방법입니다.
        </Workout>
        <Workout
          selectedHealthStyle={healthStyle}
          currentHealthStyle="FiveBodyWorkout"
          imageComponent={<FiveBodyWorkout />}
          title="5분할"
          handleClickHealthStyle={handleClickHealthStyle}
        >
          가슴 / 등/ 삼두 / 하체 / 어깨로 5개 부위로 나눠서 운동하는 방법입니다.
        </Workout>
      </div>
      <button
        className={classNames(s_nextButton)}
        type="button"
        onClick={setNextPage}
        disabled={isDisabled}
      >
        다음
      </button>
    </section>
  );
}

export default HealthStyle;
