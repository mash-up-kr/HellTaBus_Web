import React, { useState } from 'react';
import classNames from 'classnames';
import style from './splitType.module.scss';
import Workout from '@/components/Survey/Workout/Workout';
import FullBodyWorkout from '@/assets/svg/full-body-workout.svg';
import ThreeBodyWorkout from '@/assets/svg/three-body-workout.svg';
import FiveBodyWorkout from '@/assets/svg/five-body-workout.svg';
import { Carousel, CustomButton } from '@/components/common';

const { s_container, s_title, s_highlight, s_spiltCarousel, s_noProgressBarTitle } = style;

interface Props {
  splitType: string;
  setSplitType: (splitType: string) => void;
  handleSetNextPage: () => void;
  buttonType: 'button' | 'submit';
  hasProgressBar?: boolean;
}

const SplitType = ({
  splitType,
  setSplitType,
  handleSetNextPage,
  buttonType,
  hasProgressBar,
}: Props) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(!splitType);

  const handleClickSplitType = (userSplitType: string) => {
    setSplitType(userSplitType);
    setIsDisabled(false);
  };

  return (
    <section className={classNames(s_container)}>
      <h2 className={classNames('s_a11yHidden')}>분할 선택</h2>
      <p
        className={classNames(s_title, {
          [s_noProgressBarTitle]: hasProgressBar === false,
        })}
      >
        <span className={classNames('s_whiteSpace')}>
          <span className={classNames(s_highlight)}>몇 분할</span>로
        </span>
        운동을 원하시나요?
      </p>
      <Carousel className={classNames(s_spiltCarousel)}>
        <Workout
          selectedSplitType={splitType}
          currentSplitType="SPLIT_5_DAY_WORKOUT"
          imageComponent={<FiveBodyWorkout />}
          title="5분할"
          handleClickSplitType={handleClickSplitType}
        >
          가슴/어깨/팔/등/하체로 5개의 부위로 나눠서 운동 하는 방법입니다
        </Workout>
        <Workout
          selectedSplitType={splitType}
          currentSplitType="SPLIT_3_DAY_WORKOUT"
          imageComponent={<ThreeBodyWorkout />}
          title="3분할"
          handleClickSplitType={handleClickSplitType}
        >
          가슴,이두/등,삼두/어깨, 하체로 3개 부위로 나눠서 운동하는 방법입니다
        </Workout>
        <Workout
          selectedSplitType={splitType}
          currentSplitType="FULL_BODY_WORKOUT"
          imageComponent={<FullBodyWorkout />}
          title="무분할"
          handleClickSplitType={handleClickSplitType}
        >
          가슴, 어깨, 팔, 등, 하체를 하루에 운동하는 방법으로 초보자에게 추천합니다.
        </Workout>
      </Carousel>
      <CustomButton
        CustomButtonType={buttonType}
        handleClickCustomEvent={handleSetNextPage}
        isDisabled={isDisabled}
      >
        다음
      </CustomButton>
    </section>
  );
};

export default SplitType;
