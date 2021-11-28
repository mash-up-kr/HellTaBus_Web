import React from 'react';
import classNames from 'classnames';
import { useExerciseChoice } from '@/hooks';
import { Tabs, Header } from '@/components';
import style from './exerciseChoice.module.scss';

const { s_exerciseChoice } = style;

const ExerciseChoice = () => {
  const { isExerciseLoading, error, isError, tabHeaders } = useExerciseChoice();

  if (isError) {
    return <div>{error?.message}</div>;
  }

  return (
    <div className={classNames(s_exerciseChoice)}>
      <Header title="운동변경" handleClickBackButton={() => {}} />
      <Tabs headers={tabHeaders}>
        {isExerciseLoading ? (
          <div>로딩중</div>
        ) : (
          tabHeaders.map((tab, index) => <p key={index}>{tab.title}</p>)
        )}
      </Tabs>
    </div>
  );
};

export default ExerciseChoice;
