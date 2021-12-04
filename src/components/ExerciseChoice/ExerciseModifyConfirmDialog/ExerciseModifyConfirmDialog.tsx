import React from 'react';
import classNames from 'classnames';
import { ConfirmModalDialog } from '@/components';
import style from './exerciseModifyConfirmDialog.module.scss';

interface Props {
  handleCancel: React.MouseEventHandler<HTMLButtonElement>;
  handleApprove: React.MouseEventHandler<HTMLButtonElement>;
}

const { s_title, s_description } = style;

const ExerciseModifyConfirmDialog = ({ handleCancel, handleApprove }: Props) => {
  return (
    <ConfirmModalDialog handleCancel={handleCancel} handleApprove={handleApprove}>
      <span className={classNames(s_title, 's_whiteSpace')}>운동부위를 변경하시겠어요?</span>
      <span className={classNames(s_description)}>운동 부위를 변경하면</span>
      <span className={classNames(s_description, 's_whiteSpace')}>선택한 운동이 초기화 돼요</span>
    </ConfirmModalDialog>
  );
};

export default React.memo(ExerciseModifyConfirmDialog);
