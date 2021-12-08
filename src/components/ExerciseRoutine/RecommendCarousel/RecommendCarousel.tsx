import React from 'react';
import classNames from 'classnames';
import { ExerciseCard, Carousel } from '@/components';
import style from './recommendCarousel.module.scss';
import { Exercise } from '@/types';

interface Props {
  recommendList: Exercise[];
  className?: string;
}

const { s_routineCarousel } = style;

const dummyExerciseDescription = {
  what: '머신을 이용하여, 사선으로 고중량의 무게를 밀어내는 운동. 스쿼트를 머신에서 하는 운동입니다.\n프레스가 들어가는 운동은 미는 운동입니다.\n레그프레스는 다리(leg)로 발판을 미는(press) 운동입니다.',
  where:
    '무릎은 펴지고 엉덩이(고관절)도 펴지는 방향으로 힘을 쓰게 되고 그 근육들이 단련됩니다.\n무릎과 힙관절 모두를 사용하므로 다관절 운동이라 하며 한 관절만 운동시킬 때보다 운동 목표를 달성하는데 효과적이기 때문에 주요 운동에 해당됩니다.\n 레그 프레스 운동을 통해 단련되는 근육은 일차적으로는 대퇴사두근이며 이차적으로는 엉덩이 근육(대둔근), 대퇴 뒤편의 근육(햄스트링), 대퇴내전근입니다.',
  how: [
    '머리 등 엉덩이가 등 받침 패드에 단단히 밀착 고정되어야 합니다. 등 받침이 허리를 지지해 주기 때문에 허리 통증으로 인해 스쿼트을 실행할 수 없는 환자도 하체 단련을 할 수 있습니다.',
    '의자 양옆의 손잡이를 잡아야 합니다. 허벅지와 종아리는 직각이 되어야 하며 허벅지와 발판은 평행이 되도록 의자의 위치를 조정합니다.',
    '발은 엉덩이 너비로 벌려 발판의 중간에 위치시키고 바깥으로 약간 벌립니다. 발판의 놓는 발의 위치에 따라 트레이닝 되는 근육이 달라집니다. 위에 위치하면 엉덩이 및 대퇴 후면의 근육이 더 단련되고 아래에 위치하면 허벅지 앞쪽이 더 단련됩니다. 발을 멀리하면 대퇴를 안족으로 모으는 내전근이 단련됩니다.',
    '밀 때는 엉덩이와 무릎관절을 천천히 펴면서 발판을 앞으로 밉니다. 이때 양측 허벅지와 종아리는 평행한 상태를 유지해야 하며 안쪽이나 바깥쪽으로 움직이면 안 됩니다. 무릎이 완전히 펴질 때까지 밀어야 합니다.',
    '되돌아올 때는 엉덩이와 무릎관절을 천천히 굽히면서 시작자세로 되돌아 옵니다. 머리, 어깨, 등, 엉덩이를 패드에 밀착하여 균등하게 압력을 가하도록 유지하여야 합니다.',
  ],
  caution:
    '손잡이를 꼭 잡아야 하고 뒤꿈치를 발판에서 떼거나 엉덩이를 의자에서 들어 올리면 안 됩니다.\n운동하는 동안 양측 허벅지를 평행하게 유지하고 무릎을 안으로 모으거나 바깥으로 벌리면 안 됩니다.',
};

const RecommendCarousel = ({ recommendList, className }: Props) => {
  return (
    <Carousel className={classNames(className, s_routineCarousel)}>
      {recommendList?.map(({ imageLink, name, placeHolderImage }, index) => (
        <ExerciseCard
          imageLink={imageLink}
          exerciseName={name}
          key={`exerciseCard-${index}`}
          exerciseDescription={dummyExerciseDescription}
          placeHolderImage={placeHolderImage}
        />
      ))}
    </Carousel>
  );
};

export default RecommendCarousel;
