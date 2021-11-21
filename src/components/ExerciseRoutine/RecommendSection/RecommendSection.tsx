import React from 'react';
import { RecommendCarousel } from '@/components';
import style from './recommendSection.module.scss';
import { Exercise, ExercisePart } from '@/types';
import RightArrow from '@/assets/svg/right-arrow.svg';
import dumbbell from '@/assets/images/dumbbell.png';
import gripper from '@/assets/images/gripper.png';
import skippingRope from '@/assets/images/skipping-rope.png';
import { EXERCISE_PART } from '@/consts';

interface Props {
  recommendExerciseList: Exercise[];
  partList: ExercisePart;
}

const {
  s_recommendSection,
  s_deem,
  s_backImages,
  s_dumbbell,
  s_gripper,
  s_skippingRope,
  s_split_number,
  s_routineMessage,
  s_exerciseStart,
  s_recommendCarousel,
  s_otherExercise,
  s_rightArrow,
} = style;

const RecommendSection = ({ recommendExerciseList, partList }: Props) => {
  // TODO: api업데이트 되면 삭제
  const dummyrecommendExerciseList = recommendExerciseList?.map((exercise) => {
    return {
      ...exercise,
      imageLink: 'https://gif.helltabus.com/05861301/05861301-Lever-Lying-Leg-Curl_Thighs_360.gif',
    };
  });

  return (
    <section className={s_deem}>
      <div className={s_backImages} aria-hidden>
        <img src={dumbbell} alt="" className={s_dumbbell} />
        <img src={gripper} alt="" className={s_gripper} />
        <img src={skippingRope} alt="" className={s_skippingRope} />
      </div>
      <div className={s_recommendSection}>
        <div className={s_routineMessage}>
          <strong className={s_split_number}>무분할</strong>
          <span>
            오늘은{' '}
            <em>
              {partList?.map((part, index) => {
                return `${EXERCISE_PART[part]}${index !== partList.length - 1 ? ', ' : ''}`;
              })}
            </em>{' '}
            하는 날 😄
          </span>
          <span className="s_whiteSpace">이런 기구 어떠세요?</span>
        </div>
        <button type="button" className={s_exerciseStart}>
          운동시작 GO!
        </button>
        <RecommendCarousel
          className={s_recommendCarousel}
          recommendList={dummyrecommendExerciseList}
        />
        <div className={s_otherExercise}>
          <button type="button">
            <span>다른 운동 선택</span>
            <RightArrow className={s_rightArrow} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecommendSection;
