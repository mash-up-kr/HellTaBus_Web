import React from 'react';
import classNames from 'classnames';
import { Modal } from '@/components';
import Arrow from '@/assets/svg/right-arrow.svg';
import style from './exerciseDescriptionModalDialog.module.scss';

interface Props {
  setIsDescriptionModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  exerciseDescription: { what: string; where: string; how: string[]; caution: string };
  exerciseName: string;
}

const {
  s_descriptionDialog,
  s_modalCloseArrow,
  s_exerciseName,
  s_howDescription,
  s_title,
  s_description,
} = style;

const ExerciseDescriptionModalDialog = ({
  setIsDescriptionModalOpen,
  exerciseDescription,
  exerciseName,
}: Props) => {
  const handleCloseDescriptionModal: React.MouseEventHandler<HTMLButtonElement> = () => {
    setIsDescriptionModalOpen(false);
  };

  const { caution, how, what, where } = exerciseDescription;

  return (
    <Modal deemBackground="rgba(0, 0, 0, 0.9)">
      <section className={classNames(s_descriptionDialog)}>
        <h2 className={classNames('s_a11yHidden')}>{exerciseName} 운동 설명</h2>
        <button
          type="button"
          className={classNames(s_modalCloseArrow)}
          onClick={handleCloseDescriptionModal}
        >
          <Arrow width="15" height="23" />
        </button>
        <div className={classNames(s_exerciseName)}>{exerciseName}</div>
        <div>
          <h3 className={classNames(s_title)}>
            <span aria-hidden>👀</span> 어떤 운동인가요?
          </h3>
          <span className={classNames(s_description)}>{what}</span>
        </div>
        <div>
          <h3 className={classNames(s_title)}>
            <span aria-hidden>💦</span> 어느부위가 운동되나요?
          </h3>
          <span className={classNames(s_description)}>{where}</span>
        </div>
        <div>
          <h3 className={classNames(s_title)}>
            ️<span aria-hidden>💪</span> 운동 방법을 알려주세요
          </h3>
          <span>
            {how.map((description, index) => (
              <div className={s_howDescription} key={`how-${index}`}>
                {index + 1}. {description}
              </div>
            ))}
          </span>
        </div>
        <div>
          <h3 className={classNames(s_title)}>
            <span aria-hidden>📌</span> 주의 사항이 있나요?
          </h3>
          <span className={classNames(s_description)}>{caution}</span>
        </div>
      </section>
    </Modal>
  );
};

export default ExerciseDescriptionModalDialog;
