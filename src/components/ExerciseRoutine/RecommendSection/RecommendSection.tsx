import React from 'react';
import { Link } from 'react-router-dom';
import { RecommendCarousel } from '@/components';
import style from './recommendSection.module.scss';
import { Exercise, ExercisePartList, SplitType } from '@/types';
import RightArrow from '@/assets/svg/right-arrow.svg';
import dumbbell from '@/assets/images/dumbbell.png';
import gripper from '@/assets/images/gripper.png';
import skippingRope from '@/assets/images/skipping-rope.png';
import { EXERCISE_ACTIVITY, EXERCISE_CHOICE_PAGE, EXERCISE_PART, SPLIT_TYPE } from '@/consts';
import { startActivity } from '@/utils/mobile/activity';

interface Props {
  suggestionExerciseList: Exercise[];
  suggestionPartList: ExercisePartList;
  splitType: SplitType;
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

const RecommendSection = ({ suggestionExerciseList, suggestionPartList, splitType }: Props) => {
  const todayPartList = suggestionPartList.map((part, index) =>
    part ? `${EXERCISE_PART[part]}${index !== suggestionPartList.length - 1 ? ', ' : ''}` : ''
  );

  const handleOpenExerciseActivity: React.MouseEventHandler<HTMLButtonElement> = () => {
    const option = {
      target: EXERCISE_ACTIVITY,
      exerciseList: JSON.stringify(suggestionExerciseList),
    };
    startActivity(option, (resCodes: string, resMsg: string, resData: JSON) => {
      console.log(resCodes + resMsg + JSON.stringify(resData));
    });
  };

  return (
    <section className={s_deem}>
      <div className={s_backImages} aria-hidden>
        <img src={dumbbell} alt="" className={s_dumbbell} />
        <img src={gripper} alt="" className={s_gripper} />
        <img src={skippingRope} alt="" className={s_skippingRope} />
      </div>
      <div className={s_recommendSection}>
        <div className={s_routineMessage}>
          <strong className={s_split_number}>{SPLIT_TYPE[splitType]}</strong>
          <em>
            {SPLIT_TYPE[splitType] === SPLIT_TYPE.FULL_BODY_WORKOUT
              ? '오늘도 전신운동 하는 날 😄'
              : `오늘은 ${todayPartList.join('')} 하는 날 😄`}
          </em>
          <span className="s_whiteSpace">이런 운동 어떠세요?</span>
        </div>
        <button type="button" className={s_exerciseStart} onClick={handleOpenExerciseActivity}>
          운동시작 GO!
        </button>
        <RecommendCarousel className={s_recommendCarousel} recommendList={suggestionExerciseList} />
        <div className={s_otherExercise}>
          <Link to={EXERCISE_CHOICE_PAGE}>
            다른 운동 선택
            <RightArrow className={s_rightArrow} width="8" height="12" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecommendSection;
